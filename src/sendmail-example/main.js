const mailer = require('nodemailer');

const mail = {
  from: '',
  to: '',
  subject: '',
  text: ''
  // html: ''
}

const smtp = mailer.createTransport({
  host: '',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: ''
  }
});

smtp.sendMail(mail, function(err, res){
  if(err){
    console.log(err);
  }
  else{
    console.log('Sent: ' + res.message);
  }
  smtp.close();
});
