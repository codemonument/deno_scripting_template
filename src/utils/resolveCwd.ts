import * as log from "https://deno.land/std@0.129.0/log/mod.ts";
import { resolve as resolveToAbsolutePath } from "https://deno.land/std@0.129.0/path/mod.ts";

/**
 * Gets the current working directory from
 * - either an env var called CWD
 * - or Deno.cwd()
 * Reason:
 * Setting the cwd to something other than the dir
 * in where the deno executable was called
 * seems not possible in velociraptor (script runner) right now.
 *
 * @returns
 */
export function resolveCwd() {
  let CWD = Deno.env.get("CWD");
  if (CWD) {
    CWD = resolveToAbsolutePath(CWD);
    log.info(`Using current working directory from CWD Env var: ${CWD}`);
  } else {
    CWD = Deno.cwd();
    log.info(`Using current working directory from Deno.cwd(): ${CWD}`);
  }
  return CWD;
}
