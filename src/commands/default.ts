import { YargsInstance } from "../deps/_yargs.ts";

/**
 * Area of yargs command definition module export
 */
 
function default(args) {
  console.info("Default command called with args:", args);
} 

export const command = '$0'
export cost describe = 'The default command, called when no subcommand was passed';
export const builder = (yargs: YargsInstance) => {};
export const handler = default;
