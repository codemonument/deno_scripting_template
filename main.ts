import { startKia } from "./src/utils/startKia.ts";

/**
 * VERSION: 0.0.1
 */
async function main() {
  const demoKia = await startKia(
    `Base Deno Repo, Sleep for 3 sek`,
  );
  setTimeout(async () => {
    await demoKia.succeed(
      `Finished Base Deno Repo sucessfully, CDW: ${Deno.cwd()}`,
    );
  }, 3000);
}

try {
  await main();
} catch (error) {
  console.error(error);
  Deno.exit();
}
