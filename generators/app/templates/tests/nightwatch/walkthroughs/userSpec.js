module.exports = {
  "Change Password view redirects if not loged in" : function (client) {
    client
      .url("http://127.0.0.1:3000/changepw")
      .waitForElementVisible("body", 1000)
      .assert.urlContains('/login')
      .end();
  },
  "Change Password view correct after login in" : function (client) {
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
      .url("http://127.0.0.1:3000/changepw")
      .waitForElementVisible('form > div> button', 1000)
      .verify.containsText('form > div > button', 'change password')
      .end();
  },
  "Forgot Password view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/forgotpw")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('form > div > button', 1000)
      .verify.containsText('form > div > button', 'reset password')
      .end();
  },
  "Login view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/login")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('form > div > button', 1000)
      .verify.containsText('form > div > button', 'Sign In')
      .end();
  },
  "Register view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/register")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('form > div >button', 1000)
      .verify.containsText('form > div > button', 'Create account')
      .end();
  },
  "Reset Password view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/resetpw/1")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('form > div > button', 1000)
      .verify.containsText('form > div > button', 'Reset password')
      .end();
  },
};
