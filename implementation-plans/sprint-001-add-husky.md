# Add Husky

npm install husky --save-dev

## Usage
Downloads the Husky package into your project, adds it to devDependencies in package.json, and writes it into node_modules (and updates package-lock.json).

### Breakdown
npm — Node Package Manager, the tool for installing JavaScript/Node packages.\
install — tells npm to fetch and install one or more packages into the current project.
husky — the package name. Husky is a widely used tool to manage Git hooks (pre-commit, pre-push, etc.) from your repository (so you can run linting, tests, formatting automatically before commits/pushes).\
--save-dev — a flag that records the package under the devDependencies section of package.json (instead of dependencies). devDependencies are packages required for development and tooling, not for production runtime.\

#### What changes in your repo?
Adds husky into node_modules.\
Adds an entry in package.json under devDependencies similar to:
"devDependencies": {  "husky": "^x.y.z"}\
Updates package-lock.json (or npm-shrinkwrap.json) to lock the version installed.

**Important behavior & next steps**\
Installing Husky alone doesn't enable Git hooks. After install you usually run the Husky installer to create the .husky/ folder and hook scripts:

## Run the Husky installer
npx husky install

### Add a prepare script
Add a prepare script in package.json so it runs automatically after installs:

"scripts": {  "prepare": "husky install"}

## Add hooks
Add specific hooks, for example a pre-commit running tests:

npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit

### In CI environments
If the pipeline installs only production deps (NODE_ENV=production or npm ci --only=production), devDependencies (including Husky) won’t be installed and hooks won't be available. If you need hooks in CI, install devDependencies or handle hooks differently.

#### Difference from other flags
--save (or no flag) places a package under dependencies (runtime).\
-g installs globally (not what you want for project-specific tooling).\

**Quick example workflow**\
Install:\
npm install husky --save-dev

Enable hooks:\
npx husky install
(or add "prepare": "husky install" and run npm install so it runs automatically)

Add a pre-commit:\
npx husky add .husky/pre-commit "npm test"\
git add .husky/pre-commit

## Edge cases / tips
If you use Yarn or pnpm, use the equivalent commands (yarn add --dev husky or pnpm add -D husky).
If your repo already has old-style hooks managed differently, coordinate changes so you don’t overwrite existing hooks.
Husky versions changed their setup across major releases — follow the README of the installed Husky version (v7+ uses the .husky/ folder + husky install).

