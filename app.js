
const nodeMailer = require('nodemailer');
const dotEnv = require('dotenv');


dotEnv.config()

// The data are secure in the .env files 
const auth_pass = process.env.gmail_pass;
const auth_user = process.env.gmail_user;
const user_gmail = process.env.user_gmail;


// The mailtransporter varible to set user transport
const mailTransporter = nodeMailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: auth_user,
            pass: auth_pass
        }
    }
);

// The mailDetails varible is a detail of auth and another user.

let mailDetails = {
    from: auth_user,
    to:user_gmail ,
    subject: "Assignment Nodejs",
    html: "<p>This is send through nodemailer by.</p> <h3>Akshai Muraleedharan</h3> <h3>Gmail-id: akshaimuraleeharan4@gmail.com</h3> "

};

/* The mailtransporter varible  to sendmail  a  mail  to the 
user and to check a condition for checking mail send or not*/


 mailTransporter.sendMail(mailDetails, function (err, info) {
    if (err) {
        console.log("Error occurs");
      
    } else {
        console.log("Email sent sucessfully");
        console.log("Message id: ",info.messageId)
    }
})


