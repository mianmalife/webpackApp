if (!/yarn/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33m请使用yarn做为包管理器.\u001b[39m\n`)
  process.exit(1)
}