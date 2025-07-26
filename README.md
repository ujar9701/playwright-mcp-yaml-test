# AI-Powered Playwright MCP YAML Test Framework

This is a modular, AI-integrated test automation framework built using **Playwright**, **TypeScript**, and **YAML** — enhanced with **Gemini AI** for intelligent test case generation, validation, and self-healing capabilities.

## Features

-  YAML-based modular test case structure
-  Playwright for cross-browser automation
-  **Gemini AI integration** for:
  - Suggesting test cases from user stories or bugs
  - Auto-healing flaky locators
  - Smart validation hints during test failures
-  Rich HTML and JUnit reporting
-  Environment configs via `.env.*` files

## Folder Structure

```bash
.
├── steps/                         # Reusable YAML test steps
├── test-cases/                   # Test case definitions (YAML)
├── test-suits/                   # Test suite collection (YAML)
├── tests/                        # TypeScript specs
├── gemini-playwright/           # Gemini AI logic/integration
├── test-reports/                # HTML, JUnit test outputs
├── .env.dev / .env.staging       # Env configs
├── package.json
├── README.md

Tech Stack
1. Playwright MCP
2. TypeScript
3. YAML
4. Gemini AI (Google LLM)

🙌 Author
Raju Thatha
rajrayudu01@gmail.com
GitHub @ujar9701
