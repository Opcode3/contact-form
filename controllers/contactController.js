const mailServer = require('../services/mailService');
function postContact(req, res){
    const user_info = req.body;
    const sendMail = mailServer.sendSingleMail((err, data)=> {
            if (err) {
              console.log("Error " + err);
            } else {
              console.log("Email sent successfully");
            }
          }
    )
    res.json(`Posting contact of ${user_info.name}`);
}

module.exports = postContact