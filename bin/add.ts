import { program } from '../src/index.js'

export function createAddCommand() {
  program.command('add')
    .description('add multiple numbers')
    .argument('<numbers...>', 'number')
    .option('-f', 'add floating numbers')
    .action((_, options) => {
      const newArgs = processArgs(program.args)
      console.log(newArgs);
      const res = sum(newArgs, options.f)
      console.log(res)
    });


  function sum(nums: number[], isFloat: boolean) {
    return nums.reduce((prev, cur) => {
      if (isFloat) {
        return prev + cur
      }
      return Math.trunc(prev) + Math.trunc(cur)
    }, 0)
  }

  function processArgs(args: string[]) {
    args = [...args]
    args = processFloatArg(args)
    return args.map(Number)
  }

  function processFloatArg(args: string[]) {
    args = [...args]
    const delIndex = args.indexOf('-f')
    if (delIndex !== -1) {
      args.splice(delIndex, 1)
      args = args.splice(1)
    } else {
      args = program.args.splice(1)
    }
    return args
  }
}
