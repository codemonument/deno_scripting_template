import { log, resolveToAbsolutePath } from "./src/dependencies.ts";
import { startKia } from "./src/utils/startKia.ts";

let CWD = Deno.env.get("CWD");
if (CWD) {
  CWD = resolveToAbsolutePath(CWD);
  log.info(`Using current working directory from CWD Env var: ${CWD}`);
} else {
  CWD = Deno.cwd();
  log.info(`Using current working directory from Deno.cwd(): ${CWD}`);
}

/**
 * VERSION: 1.0.0
 */
try {
  const demoKia = await startKia(`Base Deno Repo, Sleep for 3 sek`);
  setTimeout(async () => {
    await demoKia.succeed(`Finished Base Deno Repo sucessfully`);
  }, 3000);
} catch (error) {
  console.error(error);
  Deno.exit();
}
