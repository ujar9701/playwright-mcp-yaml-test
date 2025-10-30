# playwright-yaml-test

A small Playwright test framework that drives UI tests from YAML files. Purpose: make tests readable, data-driven, and easy for newcomers to understand. This README explains project structure, prerequisites, how to run the project, how YAML test cases are organized, and troubleshooting — enough so a random person can understand and run the project.

## Quick summary
- What it is: Playwright + YAML-driven test runner (example project).
- Goal: separate test logic (Playwright code) from test data/steps (YAML), enabling non-devs to read and contribute test cases.
- Main tech: Node.js, Playwright, YAML parser.

## Project structure (typical)
Root files and important folders you should see:
- package.json — npm scripts and dependencies
- playwright.config.ts — Playwright configuration (browser, timeouts, testDir)
- src/
  - runner.ts — code that reads YAML and executes steps
  - helpers/ — reusable Playwright helper functions
- tests/ — TypeScript/JS spec files that call the YAML runner
- testdata/ (or fixtures/) — YAML files with test cases
- README.md — this file

Example tree:
```
playwright-yaml-test/
├─ package.json
├─ playwright.config.ts
├─ src/
│  ├─ runner.ts
│  └─ helpers/
├─ tests/
│  └─ example.spec.ts
├─ testdata/
│  └─ login-tests.yml
└─ README.md
```

## Prerequisites
- Node.js (recommended v16+ or v18+)
- npm (or yarn/pnpm)
- Git (to clone)
- Internet connection for browser downloads (Playwright installs browsers)

## Setup — first time
1. Clone the repo:
   - git clone <repo-url>
   - cd playwright-yaml-test
2. Install dependencies:
   - npm install
3. Install Playwright browsers:
   - npx playwright install
   - (or `npx playwright install --with-deps` on some Linux)
4. Optional: run type checks or build (if project uses TS)
   - npm run build (if configured)

## Common npm scripts
Add or use scripts in package.json for convenience:
```json
{
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:debug": "npx playwright test --debug",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

## How to run tests
- Run the full test suite:
  - npm test
- Run a single spec file:
  - npx playwright test tests/example.spec.ts
- Run tests headed (show browser):
  - npm run test:headed
- Debug a failing test:
  - npm run test:debug
- Run only tests driven by a specific YAML file (example pattern):
  - npx playwright test --grep "Login"  (if specs/generator add test titles from YAML)

## How YAML-driven tests work (overview)
- YAML files live in testdata/ (or fixtures/).
- Each YAML entry describes a test case: title, steps, data.
- The runner (src/runner.ts) parses YAML and translates steps into Playwright actions:
  - steps examples: goto, click, fill, expectText, waitForSelector, screenshot
- Example YAML snippet:
```yaml
- title: "Login with valid credentials"
  url: "/login"
  steps:
    - goto: "{{url}}"
    - fill:
        selector: "#username"
        value: "demoUser"
    - fill:
        selector: "#password"
        value: "secret"
    - click:
        selector: "button[type=submit]"
    - expect:
        selector: ".welcome"
        contains: "Welcome"
```
- The spec file calls the runner for a YAML file and the runner creates Playwright tests using that data.

## Writing a new YAML test
1. Add a new entry to testdata/my-tests.yml following the examples.
2. Ensure selectors and data are correct.
3. Create or update tests/example.spec.ts to invoke runner with that YAML (the runner may already auto-load all YAML files).
4. Run npm test and verify.

## Configuration
- Playwright options are set in playwright.config.ts (baseURL, timeout, testDir, retries).
- Update baseURL to point to your target environment (local/dev/staging).
- Use environment variables for secrets and credentials:
  - Example: BASE_URL, USERNAME, PASSWORD
  - Access them with process.env in runner or tests.

## CI (short)
- Use Playwright GitHub Action or run via Node:
  - name: Run Playwright tests
    run: |
      npm ci
      npx playwright install --with-deps
      npm test
- Ensure browsers are installed in CI (npx playwright install).

## Debugging / Troubleshooting
- "Locator not found" — verify selector and increase timeout in config or step.
- Browser not found — run npx playwright install.
- Tests run too fast — add waits or better assertions (waitForSelector).
- Permissions/Windows path issues — use Git Bash/PowerShell consistent with project setup.

## Tips & best practices
- Keep YAML descriptive and small: one scenario per entry.
- Prefer data-driven variables over hard-coded values.
- Use helper functions for repeated patterns (login, logout).
- Keep tests deterministic: avoid relying on third-party timing.

## Example checklist before opening PR
- [ ] YAML file follows schema and includes title
- [ ] Selectors validated locally
- [ ] No hard-coded secrets
- [ ] Tests pass locally: npm test

