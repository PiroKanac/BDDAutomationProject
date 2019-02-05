$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcases/LoginTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login functionality",
  "description": "",
  "id": "facebook-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "facebook-login-functionality;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_page()"
});
formatter.result({
  "duration": 9217869280,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_username()"
});
formatter.result({
  "duration": 676312135,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_password()"
});
formatter.result({
  "duration": 389891708,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2966697424,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_logged_in_successfully()"
});
formatter.result({
  "duration": 20085517,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with InValid credentials",
  "description": "",
  "id": "facebook-login-functionality;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters incorrect username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should not be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_page()"
});
formatter.result({
  "duration": 6982399321,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_incorrect_username()"
});
formatter.result({
  "duration": 632456952,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_password()"
});
formatter.result({
  "duration": 974749284,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2741283823,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_not_be_logged_in_successfully()"
});
formatter.result({
  "duration": 12407255,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat testcases.Steps.user_should_not_be_logged_in_successfully(Steps.java:53)\r\n\tat ✽.Then User should not be logged in successfully(testcases/LoginTestCases.feature:15)\r\n",
  "status": "failed"
});
});