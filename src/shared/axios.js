import axios from 'axios'
import * as rax from 'retry-axios'
import qs from 'qs'
// const controller = new AbortController();

const instance = axios.create({
  baseURL: '',
  timeout: 30000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
})

instance.defaults.raxConfig = {
  instance: instance,
  retry: 3,
  statusCodesToRetry: [[400, 599]]
}

rax.attach(instance)

export async function fetchApi(config) {
  const response = await instance.request(config)
  // 业务逻辑写这里
  return response.data
}

export async function mockData() {
  return Promise.resolve(arguments[arguments.length - 1])
}

// export function withCancelToken(ajax) {
//   let signal;
//   function send(data, config) {
//     cancel();
//     signal = controller.signal;
//     return ajax(data, { ...config, signal });
//   }
//   function cancel() {
//     if (signal) {
//       controller.abort();
//       signal = null;
//     }
//   }

//   return [send, cancel];
// }

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
