module.exports = {
  "AppTitle available" : function (client) {
    client
      .url("http://127.0.0.1:3000")
      .waitForElementVisible("body", 1000)
      .assert.title("http://127.0.0.1:3000/")
      .verify.containsText('#toolbarTitle', '<%= appName %>')
      .end();
  },
  "Login & SignUp Button available if user not logged in" : function (client) {
    client
      .url("http://127.0.0.1:3000")
      .waitForElementVisible("body", 1000)
      .verify.containsText('div > ul > li:nth-child(1) > a', 'Login')
      .verify.containsText('div > ul > li:nth-child(2) > a', 'Sign up')
      .end();
  },
  "Change Password & Logout Button available if user logged in" : function (client) {
    client
    .url("http://127.0.0.1:3000/login")
    .waitForElementVisible("body", 1000)
    .setValue('#usernameInput','admin')
    .setValue('#passwordInput','admin')
    .click('#signIn')
    // .submitForm('form')
    // .keys(['\uE006'], function(){
    //   console.log("press enter")
    // })
    .pause(1000)
    .verify.containsText('div > ul > li:nth-child(3) > a', 'Logout')
    .verify.containsText('div > ul > li:nth-child(4) > a', 'Change Password')
    .verify.containsText('div > ul > li:nth-child(5) > a', 'User: admin')
    .end();
  },
};
