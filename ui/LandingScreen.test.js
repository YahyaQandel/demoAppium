const {emulatorDriver, emulatorConfiguration, expect,assert, asserts} = require('./helpers/setup');
const {
  checkElementWithText,
  clickOnElementByAccessibilityId,
  loginAndGoToDashboard,
  loginAndAllowBluetooth,
  checkElementWithXPathClass
} = require('./common');

describe('Login Scenario', () => {

  beforeEach(async () => {
    await emulatorDriver.init(emulatorConfiguration);
  });
  afterEach(() => emulatorDriver.quit());

  it('Hello world screen', async () => {

    // let elementOne = await emulatorDriver.waitForElement("id","instructionsSteps1", asserts.isDisplayed, 30000);
    // expect(await elementOne.text()).to.be.equal("Step One");
    await emulatorDriver.setImplicitWaitTimeout(20000);
    const searchParametersElement = await emulatorDriver.elementsByAccessibilityId('instructionsSteps1');
    assert.equal(searchParametersElement.length, 1);
    assert.equal(await searchParametersElement[0].text(),"Step One");
  });
});
