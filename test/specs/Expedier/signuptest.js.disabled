
describe('Expedier App - Signup Flow', () => {
  it('should complete personal account signup with valid details', async () => {
    // Step 1: Select "Personal Account"
    const personalAccountOption = await $('android=new UiSelector().descriptionContains("Personal Account")')
    await personalAccountOption.click()

    // Step 2: Tap Continue
    const continueBtn = await $('~Continue');
    await continueBtn.waitForDisplayed({ timeout: 5000 })
    await continueBtn.click();

  })

  it('should fill in personal details and proceed', async()=> {
    
    //Enter Email Address
    const emailInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)')
    await emailInput.setValue('qatesting@mailinator.com')
    await driver.pause(5000) // Wait for the input to be set

    // Step 4: Enter Password
    const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)')
    await passwordInput.setValue('Qatest@123')

    // Step 5: Confirm Password Rule Indicators
    const rules = [
      '~8 character',
      '~Uppercase',
      '~Lowercase',
      '~Number',
      '~Special character'
    ];

    for (const rule of rules) {
      const ruleElement = await $(rule)
      await expect(await ruleElement.isDisplayed()).toBe(true)
    }

    //Leave country code as default or select it (if required)
    const countryCodeBtn = await $('~+')
    await expect(await countryCodeBtn.isDisplayed()).toBe(true)
    await countryCodeBtn.click()
    await driver.pause(5000)

    //Enter Phone Number
    const phoneInput = await $('android=new UiSelector().className("android.widget.EditText").instance(2)')
    await phoneInput.setValue('9123456789')
    await driver.pause(5000)

    //Tick the agreement checkbox
    const agreementCheckbox = await $('android=new UiSelector().className("android.widget.CheckBox")')
    await agreementCheckbox.click()

    //Tap Proceed
    const proceedBtn = await $('~Proceed')
    await proceedBtn.waitForDisplayed({ timeout: 5000 })
    await proceedBtn.click()

    //Pause for navigation to the next page
    await driver.pause(5000)
  })

  it('Tell us about yourself page', async() => {
    // Wait for "Tell us about yourself"
    const aboutYouText = await $('~Tell us about yourself')
    await aboutYouText.waitForDisplayed({ timeout: 10000 })

    // Enter First Legal Name
    const firstNameInput = await $('(//android.widget.EditText)[1]')
    await firstNameInput.setValue('Qa')
    await driver.pause(5000) // Wait for the input to be set

    // Enter Last legal Name
    const lastNameInput = await $('(//android.widget.EditText)[2]')
    await lastNameInput.setValue('Test')
    await driver.pause(5000) // Wait for the input to be set

    // Open and select from "How did you hear about us?"
    const dropdown = await $('(//android.view.View)[1]')
    await dropdown.click()

    const telegramOption = await $('~Telegram Group')
    await telegramOption.waitForDisplayed({ timeout: 5000 })
    await telegramOption.click()
    await driver.pause(5000) // Wait for selection to be processed

    // Click Proceed
    const secondProceedBtn = await $('~Proceed')
    await secondProceedBtn.waitForDisplayed({ timeout: 5000 })
    await secondProceedBtn.click()

    //SUCCESS PAGE

    const successMsg = await $('~Account Created Successfully!')
    await successMsg.waitForDisplayed({ timeout: 10000 })
    expect(await successMsg.isDisplayed()).toBe(true)

    // Click Proceed to Dashboard
    const proceedToDashboard = await $('~Proceed to Dashboard')
    await proceedToDashboard.waitForDisplayed({ timeout: 10000 })
    await proceedToDashboard.click()

    // Optional: Validate landing page element
    const dashboardGreeting = await $('~Hi, Qa! 👋')
    await expect(dashboardGreeting).toBeDisplayed()
  })

})

