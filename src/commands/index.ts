// Follows the pattern at
// https://github.com/yargs/yargs/blob/main/docs/advanced.md#example-command-hierarchy-using-indexmjs

import * as defaultCommand from './default.ts';
export const commands = [defaultCommand];