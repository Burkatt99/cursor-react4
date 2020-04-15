import React from "react";
import ContactBook from "../../Components/ContactBook";
import "../../Components/ContactsList/style.css";
import "./style.css";
import man from "../../Components/ContactsList/images/man.jpg";
import me from "../../Components/post/images/author.jpg";

export default function ContactMsg(props) {
  return (
    <div className="messenger">
      <ContactBook />
      <div className="mesage">
        <div className="your">
          <img src={man} alt="contactPhoto" />
          <p>Hi!How are you?</p>
        </div>
        <div className="me">
          <p>Hi!I`m fine, thanks. And you?</p>
          <img src={me} alt="mePhoto" />
        </div>
        <div className="your">
          <img src={man} alt="contactPhoto" />
          <p>I`m so-so. I need your help!&#128591;</p>
        </div>
        <div className="me">
          <p>What happened? How can I help you?</p>
          <img src={me} alt="mePhoto" />
        </div>
        <div className="your">
          <img src={man} alt="contactPhoto" />
          <p>Can I call you and tell you what the problem is?</p>
        </div>
      </div>
    </div>
  );
}
