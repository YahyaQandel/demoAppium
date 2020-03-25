/* eslint no-console: ["error", { allow: ["log"] }] */
exports.configure = (driver) => {
  // See whats going on
  driver.on('status', (info) => {
    console.log(info.cyan);
  });
  driver.on('command', (method, path, data) => {
    console.log(` > ${method.yellow}`, path.grey, data || '');
  });
  driver.on('http', (method, path, data) => {
    console.log(` > ${method.magenta}`, path, (data || '').grey);
  });
};
