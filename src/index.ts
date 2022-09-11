#!/usr/bin/env node
import { Command } from 'commander'
import { createAddCommand } from '../bin/add';

export const program = new Command();

createProgramInfo()
createAddCommand()

program.parse();


function createProgramInfo() {
  program
    .name('caculate-cli')
    .description('a basic calculator cli with addition feature')
    .version('1.0.0');
}