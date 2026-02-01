# Add Prettier

npm install --save-dev prettier

Use a formatter (Prettier) for formatting on save, and keep markdownlint for linting This is the most common setup: Prettier formats the Markdown (consistent, powerful), and markdownlint enforces lint rules.

Install Prettier extension: Prettier - Code formatter (ID: esbenp.prettier-vscode).
Install Prettier in the project if you want consistent CLI/CI behavior:

npm install --save-dev prettier
Add workspace settings .vscode/settings.json:

{  "editor.formatOnSave": true,  "[markdown]": {    "editor.defaultFormatter": "esbenp.prettier-vscode"  },  "markdownlint.enable": true}
(Optional) Configure Prettier for Markdown in .prettierrc:

{  "printWidth": 80,  "proseWrap": "always"}
Keep markdownlint extension enabled for linting. To auto-fix lintable markdownlint rules on save in addition to Prettier, combine both:

{  "editor.formatOnSave": true,  "[markdown]": {    "editor.defaultFormatter": "esbenp.prettier-vscode"  },  "editor.codeActionsOnSave": {    "source.fixAll.markdownlint": true  }}
This will run Prettier (format) and also apply markdownlint fixes that Prettier does not cover.

Trade-offs and tips

Prettier is better at structural formatting (wrapping, lists, code fences). markdownlint focuses on rule violations. They can overlap; configure rules so they don't fight.
Add .markdownlint.json or .markdownlint-cli2 config in the repo to ensure consistent lint rules across contributors.
If you prefer command-line formatting (CI or Husky pre-commit), add a package script:
Using Prettier:

"scripts": {  "format:md": "prettier --write \"\*_/_.md\""}
Using markdownlint-cli2 auto-fix:

npm install --save-dev markdownlint-cli2
package.json:

"scripts": {  "format:md": "markdownlint-cli2 --fix \"\*_/_.md\""}
To prevent surprises in CI, run the formatter in CI or add a Husky pre-commit hook to run npm run format:md.
Verify it works

Save a Markdown file that violates a simple rule (extra trailing spaces, double spaces) and see if it changes on save.
Or run the CLI script to confirm behavior:

npm run format:md
Which setup do you want me to add to this repo right now?

A: Add .vscode/settings.json with markdownlint fix-on-save.
B: Install Prettier dev dependency + set Prettier as default formatter for Markdown and enable format-on-save.
C: Both (Prettier formatting + markdownlint fix-on-save) and add an npm format:md script and a Husky pre-commit to run it.
Tell me which option and I’ll make the changes (create files, install packages, and verify).
