const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.use(cors());

app.post("/mail", cors(), async (req, res) => {
  let { text } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: `${text.text_mail}`,
    to: "test@test.com",
    subject: "test email",
    html: `<div className="email"
      style="border: 1px solid black;
      padding: 20px;
      font-family:sans-serif;
      line-height:2;
      font-size: 20px"
      >
      <h2>Here is your email!</h2>
      <p>${text.text_mail}</p>
      <p>${text.text_msg}</p>
      </div>`,
  });
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
