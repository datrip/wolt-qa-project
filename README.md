# Wolt Food Delivery Testing Project

## Overview

Personal (portfolio) project that includes a test plan, manual test cases and automation test cases, all for testing the Wolt food delivery service

## Project Highlights

- **Detailed Test Documentation**
  - Test Strategy and Planning
  - Test Scenarios and Cases
  - Risk Assessment and Scope Definition
  - Testing Approach Documentation

- **Manual Test Cases (In Progress)**
  - User Registration & Authentication flows
  - Search & Filtering Functionality
  - Detailed Test Steps with Screenshots
  - Defect Documentation

- **Test Automation (In Progress)**
  - Built with Playwright + TypeScript
  - Implemented Page Object Model Architecture
  - Automated Scripts Derived from Manual Test Cases
  - Developed in Parallel with Manual Testing

## Technical Stack

- **Testing Framework:** Playwright
- **Language:** TypeScript
- **Architecture:** Page Object Model
- **Documentation:** Markdown
- **Version Control:** Git


## Project Structure

```
├── documentation/           # Comprehensive test documentation
├── manual_tests/           # Manual test cases with screenshots
│   ├── test_cases/        # Structured test case files
│   └── images/            # Test evidence and screenshots
└── automation/            # Automated test suite
    ├── pages/            # Page Object Models
    └── tests/            # Automated tests
```

## Future Plans

- Complete automation of remaining manual test cases
- Add error handling and edge case scenarios
- Implement CI/CD pipeline with GitHub Actions for automated test execution
- Set up cross-browser testing
- Add test reporting and results tracking in GitHub

## Getting Started

While this project is still in progress, you can explore the existing test cases and automation scripts:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/datrip/wolt-qa-project
   ```
2. **Navigate to the project directory**:

   ```bash
   cd wolt-qa-project
   ```
3. **Install dependencies** :

   ```bash
   npm install
   ```
4. **Run automated tests**:

   ```bash
   npx playwright test
   ```

## Current Status

The project follows a parallel development approach where manual test cases are created and then automated:
- **Completed**: Test documentation and strategy finalized.
- **Completed**: Manual test cases for User Registration & Login.
- **Completed**: Manual test cases for Search & Filtering.
- **Completed**: Automation for Registration & Login flows.
- **In Progress**: Automation for Search & Filtering functionality.
- **Planned**: Manual and automated test cases for payment processing.

## Disclaimer

This project is for educational purposes only and is not affiliated with Wolt.
