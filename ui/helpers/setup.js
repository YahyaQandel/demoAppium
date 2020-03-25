require('colors');
const webDriver = require('wd');
const emulatorConfiguration = require('./driver_capabilities').selendroid16;
const expect = require('chai').expect;
const chai = require('chai');
const {assert} = chai;
const asserts = webDriver.asserters;
const emulatorDriver = webDriver.promiseChainRemote({
  host: 'localhost',
  port: 4723,
});
require('./logging').configure(emulatorDriver);

async function setEmulatorLocaleCapability(country, locale) {
  Object.assign(emulatorConfiguration, {locale: country});
  Object.assign(emulatorConfiguration, {language: locale});
  await emulatorDriver.init(emulatorConfiguration);
}

module.exports = {
  webDriver,
  asserts,
  emulatorDriver,
  expect,
  emulatorConfiguration,
  setEmulatorLocaleCapability,
  assert,
};
