const { emulatorDriver, expect, asserts } = require('./helpers/setup');

async function checkElementWithXPathClassAndText(elementClass, elementText) {
  const element = await emulatorDriver.waitForElement(
    'xpath',
    `//*[@class='${elementClass}' and @text='${elementText}']`,
    asserts.isDisplayed,
    20000
  );
  return element;
}

async function checkElementWithXPathClass(elementClass) {
  const element = await emulatorDriver.waitForElement(
    'xpath',
    `//*[@class='${elementClass}']`,
    asserts.isDisplayed,
    20000
  );
  return element;
}

async function checkElementWithText(elementAccessibilityLabel, elementText) {
  const element = await emulatorDriver.waitForElementById(elementAccessibilityLabel, asserts.isDisplayed, 30000);
  expect(await element.text()).to.be.equal(elementText);
}

async function clickOnElementByAccessibilityId(elementAccessibilityLabel) {
  const element = await emulatorDriver.waitForElementById(elementAccessibilityLabel, asserts.isDisplayed, 20000);
  await element.click();
}

const accountInfo = {
  username: 'Yahya',
  email: 'yahya.qandel@devsquads.com',
  password: 'devsquads'
};

async function dismissError() {
  await clickOnElementByAccessibilityId('rn_redbox_dismiss_button');
}
async function skipTestStepIntoScale() {
  await clickOnElementByAccessibilityId('stepIntoScaleButton');
  await clickOnElementByAccessibilityId('testStepIntoScaleButton');
}

async function loginAndAllowBluetooth() {
  await clickOnElementByAccessibilityId('getStartedButton');
  await clickOnElementByAccessibilityId('LoginLink');
  const loginFormEmailField = await emulatorDriver.waitForElementById(
    'loginFormEmailField',
    asserts.isDisplayed,
    15000
  );
  await loginFormEmailField.type(accountInfo.email);
  const loginFormPasswordField = await emulatorDriver.waitForElementById(
    'loginFormPasswordField',
    asserts.isDisplayed,
    15000
  );
  await loginFormPasswordField.type(accountInfo.password);
  await clickOnElementByAccessibilityId('submitLoginButton');
  await clickOnElementByAccessibilityId('submitLoginButton');
}
async function checkDashboardTabsTextsArabic() {
  await checkElementWithText('weighInTabText', 'اوزن');
  await checkElementWithText('missionsTabText', 'المهامات');
  await checkElementWithText('myColorTabText', 'اللون الخاص بي');
}
async function loginAndGoToDashboard() {
  await loginAndAllowBluetooth();
  await skipTestStepIntoScale();
  await dismissError();
  await clickOnElementByAccessibilityId('modalButton');
  await clickOnElementByAccessibilityId('illCheckitOutLaterBtn');
  await clickOnElementByAccessibilityId('dismissBagdeModalBtn');
}

async function goToSetting() {
  await clickOnElementByAccessibilityId('openSideMenu');
  // await checkElementWithText("settingMenu", "Settings");
  await clickOnElementByAccessibilityId('settingMenu');
}

async function setAppLanguageToArabic() {
  const languageMenuElement = await checkElementWithXPathClass('android.widget.Spinner');
  await languageMenuElement.click();
  const element = await checkElementWithXPathClassAndText('android.widget.CheckedTextView', 'العربية');
  await element.click();
}

async function assertLandingPageTexts(enTitleText, enDescriptionText, enButtonText) {
  await checkElementWithText('personalisedTitle', enTitleText);
  await checkElementWithText('personalisedDescription', enDescriptionText);
  await checkElementWithText('getStartedButtonText', enButtonText);
}

module.exports = {
  checkElementWithText,
  clickOnElementByAccessibilityId,
  loginAndAllowBluetooth,
  loginAndGoToDashboard,
  skipTestStepIntoScale,
  dismissError,
  checkElementWithXPathClass,
  checkElementWithXPathClassAndText,
  goToSetting,
  setAppLanguageToArabic,
  checkDashboardTabsTextsArabic,
  assertLandingPageTexts,
  accountInfo
};
