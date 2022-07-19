const { sendSingleMail } = require("../services/mailService");

exports.sendMail = (req, res) => {
    const send_mail_service = sendSingleMail("Joseph")
    res.json(send_mail_service);
}