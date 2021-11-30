const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;

  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "please fill out the fiels" });
  }
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "aaronsharris@gmail.com",
      password: "Archer15.",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "aaronsharris@gmail.com",
    subject: `message from ${data.name}`,
    html: `
                <h1>You got an Email!</h1>
                <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                </ul>
                <h3>Message:</h3>
                <p>${data.message}</p>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "please fill out all fields" });
      res.status(200).json({ msg: "Thanks for contacting Aaron! " });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is an error" });
    }
  });
});
module.exports = router;
