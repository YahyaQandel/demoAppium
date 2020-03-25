const resolve = require('path').resolve;

exports.ios92 = {
  'appium-version': '1.17.0',
  platformName: 'iOS',
  platformVersion: '13.3',
  deviceName: 'iPhone 11',
  app: resolve("/Users/Yahya/Library/Developer/Xcode/DerivedData/demoAppium-hirtmykrcqzzmlaadqpzijswdowh/Build/Products/Debug-iphonesimulator/demoAppium.app")
};
exports.selendroid16 = {
  'appium-version': '1.17.0',
  platformName: 'Android',
  platformVersion: '8.1',
  deviceName: 'Nexus_5_API_27',
  autoGrantPermissions: 'true',
  app: resolve("android/app/build/outputs/apk/debug/app-debug.apk")
};
