it('should show inline error for existing email but still proceed, then block on final submit', async () => {
  //Select Personal Account
  await $('android=new UiSelector().description("Personal Account\nPersonal Account")').click()
  await $('android=new UiSelector().description("Continue")').click()
  await driver.pause(2000)

  //Enter existing email
  const emailInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)')
  await emailInput.setValue('ife1@mailinator.com')
  await driver.pause(1000)

  const inlineError = await $('android=new UiSelector().description("Email already Exist")')
  expect(await inlineError.isDisplayed()).toBe(true)

  //Enter Valid password
  const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)')
  await passwordInput.setValue('Heaphemh@97')

  //Phone number
  await $('~+').click()
  const phoneInput = await $('android=new UiSelector().className("android.widget.EditText").instance(2)')
  await phoneInput.setValue('8123456789')

  //Tick agreement checkbox
  await $('android.widget.CheckBox').click()

  //Proceed to next page despite inline error
  await $('android=new UiSelector().description("Proceed")').click()

  //Fill "Tell us about yourself"
  await $('(//android.widget.EditText)[1]').setValue('QA')
  await $('(//android.widget.EditText)[2]').setValue('Istesting')

  //Choose 'Telegram Group' in dropdown
  await $('(//android.view.View)[1]').click()
  const telegramOption = await $('~Telegram Group')
  await telegramOption.waitForDisplayed({ timeout: 3000 })
  await telegramOption.click()

  //Try final submission
  const secondProceedBtn = await $('~Proceed')
  await secondProceedBtn.waitForDisplayed({ timeout: 3000 })
  await secondProceedBtn.click()

  //Assert blocker error modal appears
  await driver.pause(2000)
  const dismissBtn = await $('android=new UiSelector().description("Dismiss")')
  expect(await dismissBtn.isDisplayed()).toBe(true)
})