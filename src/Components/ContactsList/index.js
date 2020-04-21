import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPhone from "../../assets/images/phone-call.png";
import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";

class ContactsList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((el) => (
          <div className="contact" key={el.id}>
            <div id="icon">
              {el.gender !== "anonim" &&
                (el.gender === "male" ? (
                  <img alt="male" id="male" src={male} />
                ) : (
                  <img alt="female" id="female" src={female} />
                ))}
            </div>
            <div className="inf">
              <span id="name">
                {el.firstName}{" "}
                <Link className="link" to={`/contacts/${el.id}`}>
                  {el.lastName}
                </Link>
              </span>
              <br />
              <img id="iconPhone" alt="phone" src={iconPhone} />
              <span id="phone">{el.phone}</span>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactsList;
