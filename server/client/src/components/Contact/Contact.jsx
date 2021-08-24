import { useState } from "react";
import "./Contact.scss";
import axios from "axios";

function Contact() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState({
    text_mail: "",
    text_msg: "",
  });

  const handelSend = async (e) => {
    setSent(true);
    e.preventDefault();
    try {
      await axios.post("https://ankurudeyportfolio.herokuapp.com/mail", {
        text,
      });
    } catch (error) {
      console.log(error);
    }

    console.log(text);
    setText((prevVal) => ({
      text_mail: "",
      text_msg: "",
    }));
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setText((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handelSend}>
          <input
            type="email"
            placeholder="Email"
            name="text_mail"
            value={text.text_mail}
            required="true"
            onChange={handelChange}
          />
          <textarea
            placeholder="Message"
            name="text_msg"
            value={text.text_msg}
            onChange={handelChange}
          ></textarea>
          <button type="submit">Send</button>
          {sent && <span>Thankyou for the message , I'll reply ASAP &lt;3 </span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
