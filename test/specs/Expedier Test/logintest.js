describe('Expedier App - Valid Login Flow', () => {
  it('should log in with valid credentials and show Continue button', async () => {
    // Locate email input
    const emailInput = await $('//android.widget.EditText[1]');
    await emailInput.setValue('ife1@mailinator.com');

    // Locate password input
    const passwordInput = await $('//android.widget.EditText[2]');
    await passwordInput.setValue('@Heaphemh97');

    // Locate and click the Login button
    const loginButton = await $('~Login')
    await loginButton.click()

    // Wait a bit for login to process
    await driver.pause(10000)

    // Wait for Continue button to appear
    const continueBtn = await $('~Continue'); // or use the correct XPath again
    await continueBtn.waitForDisplayed({ timeout: 10000 })

    // Assert that it's visible
    expect(await continueBtn.isDisplayed()).toBe(true)

    // Click the Continue button
    await continueBtn.click()

    // Wait a bit for the next screen to load
    await driver.pause(5000)
  });

  it('should not login with incorrect credentials', async() =>{
    // Locate email input
    const emailInput = await $('//android.widget.EditText[1]')
    await emailInput.setValue('qatesting@gmail.com')

    // Locate password input
    const passwordInput = await $('//android.widget.EditText[2]')
    await passwordInput.setValue('@Heaphemh97')

    // Locate and click the Login button
    const loginButton = await $('~Login')
    await loginButton.click();

    // Wait for the error popup's dismiss button
    const dismissBtn = await $('~Dismiss');
    await dismissBtn.waitForDisplayed({ timeout: 10000 })

    // Confirm it's shown
    expect(await dismissBtn.isDisplayed()).toBe(true)

    // Click to dismiss
    await dismissBtn.click()
  
  });

    it('should not login with blank email', async () => {
    // Locate email input
    const emailInput = await $('//android.widget.EditText[1]')
    await emailInput.setValue(''); // blank email

    // Locate password input
    const passwordInput = await $('//android.widget.EditText[2]')
    await passwordInput.setValue('@Heaphemh97')

    // Locate the Login button
    const loginButton = await $('~Login')

    // Wait a bit for UI validation to apply
    await driver.pause(3000)

    // Try to find the "Continue" button (which shows only after successful login)
    const continueBtn = await $('~Continue')
    const isContinueShown = await continueBtn.isDisplayed()

    // We should NOT see the continue button
    expect(isContinueShown).toBe(false)
  })

  it('should not login with invalid email format', async()=> {
    // Locate email input
    const emailInput = await $('//android.widget.EditText[1]')
    await emailInput.setValue('ifemailinator.com') // invalid email

    // Locate password input
    const passwordInput = await $('//android.widget.EditText[2]')
    await passwordInput.setValue('@Heaphemh97')

    // Locate the Login button
    const loginButton = await $('~Login')

    // Wait a bit for UI validation to apply
    await driver.pause(3000)

    // Try to find the "Continue" button (which shows only after successful login)
    const continueBtn = await $('~Continue')
    const isContinueShown = await continueBtn.isDisplayed()

    // We should NOT see the continue button
    expect(isContinueShown).toBe(false)
  })

  it('should not login with blank password', async()=> {
    // Locate email input
    const emailInput = await $('//android.widget.EditText[1]')
    await emailInput.setValue(''); // blank email

    // Locate password input
    const passwordInput = await $('//android.widget.EditText[2]')
    await passwordInput.setValue('');
    // Locate the Login button
    const loginButton = await $('~Login')

    // Wait a bit for UI validation to apply
    await driver.pause(3000)

    // Try to find the "Continue" button (which shows only after successful login)
    const continueBtn = await $('~Continue')
    const isContinueShown = await continueBtn.isDisplayed()

    // We should NOT see the continue button
    expect(isContinueShown).toBe(false)
  })
})
