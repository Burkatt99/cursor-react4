import React, { Component } from "react";
import ContactsList from "../ContactsList";

class ContactBook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          firstName: "Барней",
          lastName: "Стинсовский",
          phone: "+380956319521",
          gender: "male",
          id: 2,
        },
        {
          firstName: "Робин",
          lastName: "Щербатская",
          phone: "+380931460123",
          gender: "female",
          id: 7,
        },
        {
          firstName: "Аномный",
          lastName: "Анонимус",
          phone: "+380666666666",
          gender: "anonim",
          id: 4,
        },
        {
          firstName: "Лилия",
          lastName: "Олдровна",
          phone: "+380504691254",
          gender: "female",
          id: 9,
        },
        {
          firstName: "Маршэн",
          lastName: "Эриксонян",
          phone: "+380739432123",
          gender: "male",
          id: 6,
        },
        {
          firstName: "Теодор",
          lastName: "Мотсбэс",
          phone: "+380956319521",
          gender: "male",
          id: 2,
        },
      ],
      value: "",
      male: true,
      female: true,
      anonim: true,
    };
  }
  changeValueSearch = (e) => {
    this.setState({ value: e.target.value });
  };
  checkGender = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const searchValue = this.state.value.toLocaleLowerCase();
    const contacts = this.state.contacts.filter(
      (el) =>
        el.firstName.toLocaleLowerCase().includes(searchValue) |
        el.lastName.toLocaleLowerCase().includes(searchValue) |
        el.phone.includes(searchValue)
    );
    const search = contacts.filter(
      (el) =>
        (this.state.male && el.gender === "male") ||
        (this.state.female && el.gender === "female") ||
        (this.state.anonim && el.gender === "anonim")
    );

    return (
      <div className="contacts">
        <div className="checkbox">
          <input
            id="checkMale"
            type="checkbox"
            name="male"
            value="check1"
            checked={this.state.male}
            onChange={this.checkGender}
          />
          <label for="checkMale">Male</label>
          <input
            id="checkFemale"
            type="checkbox"
            name="female"
            value="check2"
            checked={this.state.female}
            onChange={this.checkGender}
          />
          <label for="checkFemale">Female</label>
          <input
            id="checkAnonim"
            type="checkbox"
            name="anonim"
            value="check3"
            checked={this.state.anonim}
            onChange={this.checkGender}
          />
          <label for="checkAnonim">Anonim</label>
        </div>
        <form>
          <input
            type="text"
            onChange={this.changeValueSearch}
            value={this.state.value}
            placeholder="Search..."
          ></input>
        </form>
        <ContactsList contacts={search} />
        {this.props.children}
      </div>
    );
  }
}

export default ContactBook;
