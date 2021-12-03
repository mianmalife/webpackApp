const num: number = 123;
function identity(num: number): number {
  return num * 90;
}
function reverses<T>(arr: T[]): T[] {
  let rarr = []
  for (let j = arr.length - 1; j>= 0; j--) {
    rarr.push(arr[j])
  }
  return rarr
}
const numList = [22,33,44]
let rlist = numList.reverse()
function conArray(arr: number[]):number[] {
  return [1].concat(arr)
}
conArray(numList)

function stringTrim(arg:string[]|string):string {
  if (typeof arg === 'string') {
    return arg.trim()
  } else {
    return arg.join(',').trim()
  }
}
// 元组
let numstring : [string, number]
numstring = ['apple', 1234]
const [name, nums] = numstring
console.log(name, nums)

// 类型别名
type strNum = string | number
type Callback = (data:string) => string
const testArg:strNum = 34
const args:strNum = 'true'
function funcTest (func:Callback) {
  console.log('test 类型别名', func('hello kitty'))
}
const small = (arg: string) => {
  return arg
}
funcTest(small)

export { identity, reverses, stringTrim }