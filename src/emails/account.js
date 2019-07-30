require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sendGridAPIKey = process.env.SG_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.barbone@gmail.com",
    subject: "Welcome to GoGetter!",
    text: `Hello ${name}. Welcome to GoGetter! You can use this app to track all of your daily tasks. Using the filtering tools, you can filter through all of your tasks to stay organized and productive. Enjoy!`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.barbone@gmail.com",
    subject: "Sorry to see you go!",
    text: `Hello ${name}. We see that you have cancelled your GoGetter account. We would like to thank you for getting your tasks done with us and hope you enjoyed using our product. Any feedback you have about GoGetter or more information on why you choose to cancel would be greatly appreciated. We hope to see you soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
