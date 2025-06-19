# Expedier Mobile App Test Automation

This project contains automated test scripts written using [WebDriverIO](https://webdriver.io/) for testing the Expedier mobile application. The tests cover both positive and negative user sign-up scenarios and login validation.

## Project Structure
test/
└── specs/
└── Expedier Test/
├── logintest.js # Login functionality test
├── signuptest.js # Positive sign-up test
└── negative-signuptest.js # Negative sign-up validation test

## Test Coverage

### 1. **Login Test (`logintest.js`)**
- Valid login with correct credentials
- Validation for incorrect login (optional)

### 2. **Positive Sign-up Test (`signuptest.js`)**
- Select account type
- Fill registration form
- Password rule validation (uppercase, lowercase, number, special char, etc.)
- Phone number with country code
- Agreement checkbox and submission
- Filling personal info and selecting source
- Successful account creation and dashboard landing

### 3. **Negative Sign-up Test (`negative-signuptest.js`)**
- Handling of duplicate/existing email entry
- Inline validation displayed but doesn't block flow
- Final form submission blocked with error modal
- Assertion to confirm that inline error is shown before final blocker

## Tools & Tech

- **Framework:** WebDriverIO
- **Language:** JavaScript (Node.js)
- **Assertion Library:** Expect (from WebDriverIO)
- **Device:** Android Emulator / Real Device
- **Automation Server:** Appium

## How to Run Tests

### 1. Clone the Repository

```bash
git clone https://github.com/AdeIfeh/Expedier-Test.git
cd Expedier-Test

**2. Install Dependencies**
npm install

 **3. Run all Tests**
npx wdio run wdio.conf.js

**4. Run Specific Test Files**
npx wdio run wdio.conf.js --spec ./test/specs/Expedier\ Test/logintest.js

**Test Results**
This project uses Allure Reporter to generate detailed, interactive test reports.

**To view the test results:**
# Make sure you have Allure CLI installed globally
npm install -g allure-commandline --save-dev

# Serve the latest report
allure serve allure-results
-The allure-results folder is included in this repo. After running the tests, you can visualize the report with the above command.

**Prerequisites**
-Android emulator or real device connected
-Appium server running
-Correct capabilities configured in wdio.conf.js
-Android device authorization enabled (for physical devices)

**Notes**
-Password validation checks for uppercase, lowercase, special characters, number, and a minimum of 8 characters.
-Tests are designed to reflect real user interaction with form validations and expected behaviors.
-The negative sign-up test ensures inline errors don’t block progression immediately, but show a blocking modal at final submission.

**Author**
Elizabeth Adebayo
QA Engineer | Mobile Automation | WebDriverIO | Appium
GitHub: [AdeIfeh](https://github.com/AdeIfeh)




