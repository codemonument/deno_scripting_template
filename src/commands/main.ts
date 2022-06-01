import { YargsInstance } from "../deps/yargs.ts";
import { startKia } from "../utils/startKia.ts";
import { MainArgs } from "./mainArgs.type.ts";

/**
 * @param args
 */
async function commandHandler(args: MainArgs) {
  console.info("Default command called with args:", args);

  const demoKia = await startKia(
    `Base Deno Repo, Sleep for 3 sek`,
  );
  setTimeout(async () => {
    await demoKia.succeed(
      `Finished Base Deno Repo sucessfully`,
    );
  }, 3000);
}

function argsBuilder(yargs: YargsInstance) {
  return yargs
    .boolean("boolArg")
    .default("boolArg", false)
    .alias("boolArg", "b")
    .describe(
      "boolArg",
      `Some boolean argument with a default value of false.`,
    )
    .option("someOption", {
      alias: "o",
      describe:
        `[Optional] Some option flag (--someOption value) which is not required (due to the default of undefined)`,
      default: undefined,
    });
}

/**
 * Area of yargs command definition module export
 */

export const command = "$0";
export const describe =
  "The default command, called when no subcommand was passed";
export const builder = argsBuilder;
export const handler = commandHandler;
