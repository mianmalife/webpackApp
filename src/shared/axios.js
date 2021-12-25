import axios from 'axios'

const CancelToken = axios.CancelToken

const pendingMap = new Map()

function getPendingKey (config) {
  let { url, method, params, data } = config
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}

function removePending (config) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

function addPending (config) {
  const pendingKey = getPendingKey(config)
  config.cancelToken = config.cancelToken || new CancelToken((cancel) => {
    if (!pendingMap.has(pendingKey)) {
      pendingMap.set(pendingKey, cancel)
    }
  })
}
function fetchApi (axiosOpt, custOpt) {
  const custOption = Object.assign({
    repeat_request_cancel: true // 是否开启取消重复请求, 默认为 true
  }, custOpt)

  const instance = axios.create({
    baseURL: '',
    timeout: 30000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    removePending(config)
    custOption.repeat_request_cancel && addPending(config)
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    removePending(response.config)
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (axios.isCancel(error)) {
      console.warn('取消重复请求了', error.message)
    }
    error.config && removePending(error.config)
    return Promise.reject(error)
  })
  instance(axiosOpt)
}

export default fetchApi
