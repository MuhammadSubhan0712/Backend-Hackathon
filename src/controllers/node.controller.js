import nodemailer from "nodemailer";

 const sendEmail = async (req, res) => {
let testAccount = await nodemailer.createTestAccount();

const transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure:false,
    auth: {
        user: 'howell.muller60@ethereal.email',
        pass: 'ApebtNCsj13G6JcQ3H'
    }
});

    const info = await transporter.sendMail({
      from: '"😊 Howell Muller " <howell.muller60@ethereal.email>',
      to: "muhammadsubhan0712@gmail.com", 
      subject: "Urgent Hiring",
      text: "You have been hired as a developer let's start a journey",
      html: "<b>Hello world</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    res.send("email sent" , info);
  };
  export {sendEmail};