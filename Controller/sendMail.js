const { contactUsEmail } = require("../MailTemplate/EmailTemplate");
const mailSender = require("../Utils/mailSender");

exports.sendMail = async(req, res) => {
    try{
        const { name, email, subject, message } = req.body;
        console.log("message: ", message);
        const htmlContent = contactUsEmail(name, email, message, subject);
        const mailInfo =  await mailSender(name, email, subject, htmlContent);

        console.log("Mail Info that is to be send: ", mailInfo);
        return res.status(201).json({
            success: true,
            message: "Email sent successfully."
        });

    }catch(err){
        console.log("Error in controller of sending mail: ", err);
        return res.status(500).json({
            success: false,
            message: "Email failed to send."
        });
    }
}