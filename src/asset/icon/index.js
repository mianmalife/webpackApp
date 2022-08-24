const repl = (name) => name.replace('./', '').replace(/\.(svg)$/, '')
function importAll(r) {
  const svgObj = {}
  r.keys().forEach((key) => (svgObj[repl(key)] = r(key).default))
  return svgObj
}
export default importAll(require.context('!@svgr/webpack!', false, /\.svg$/))
