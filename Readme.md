# Deno Scripting Template

A template repo for developing scripts with deno. These scripts can be compiled
to single js files or even bundled with the deno executable for distribution.

This could also be used as a base for a cli written in deno, simply use a
cli-args parsing package in `main.ts` and build out the commands.

## Folder Structure

- `.vscode` = A folder, containing a `settings.json` which activates the deno
  language server for this workspace
- `dist` = A folder containing the output artefacts, like a bundled js file or
  even an executable for windows or mac
- `playground` = a location used as cwd for running main.ts (this allows a clean
  testing space and avoids problems with the source-code files, like accidental
  deletion)
- `src` = A folder containing more source files which are used by `main.ts`
- `.env` = A file with environment variables being used with the `bonnie` script
  running tool
- `.gitignore` = A normal gitingore file
- `bonnie.toml` = A file defining the workspace scripts, like `bonnie start` &
  `bonnie build`
- `main.ts` = the entrypoint for this deno script
- `Readme.md` = A normal Readme file

## Adjustments after using the Template

1. Update the `APP_NAME` variable in `.env` file. It is used as name for bundled
   js files or compiled executables.

## Setup after Cloning

1. Install Velociraptor (Script Runner)
   1. Get the newest install command from here:
      https://velociraptor.run/docs/installation/
   2. Run the install command from the website, for example:
      `deno install -qAn vr https://deno.land/x/velociraptor@1.4.0/cli.ts`
   3. If you used this command from 2., run `vr upgrade` afterwards to update
      velociraptor
2.

## TODOs for this Template

- Add automation with Github Actions:
  https://stefanbuck.com/blog/repository-templates-meets-github-actions
