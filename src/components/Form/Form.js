import React from "react";
import { FormWrapper, Label, Input, FormTitle, Button } from "./styles";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      topic: "Wybierz temat wiadomości",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSurnameChange = e => {
    this.setState({ surname: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleTopicChange = e => {
    this.setState({ topic: e.target.value });
  };
  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    alert(
      "Dzięki " +
        this.state.name +
        " za wiadomość! Odpowiemy najszybciej jak to tylko mozliwe!"
    );
    const { name, surname, email, topic, message } = this.state;
    axios
      .post("/", { name, surname, email, topic, message })
      .then(result => {});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormWrapper>
          <FormTitle>Zostaw wiadomość</FormTitle>
          <Label>
            <Input
              placeholder="Imię"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Label>
          <Label>
            <Input
              placeholder="Nazwisko"
              type="text"
              value={this.state.surname}
              onChange={this.handleSurnameChange}
            />
          </Label>
          <Label>
            <Input
              placeholder="Email"
              type="email"
              value={this.state.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={this.handleEmailChange}
            />
          </Label>
          <Label>
            Wybierz temat wiadomości:
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="dostępność terminów">Dostępność terminów</option>
              <option value="wycena">Wycena</option>
              <option value="współpraca">Współpraca</option>
              <option value="inne">Inne</option>
            </select>
          </Label>
          <Label>
            <textarea
              placeholder="Tu wpisz treść"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </Label>
          <Button type="submit" value="Wyślij">
            Wyślij
          </Button>
        </FormWrapper>
      </form>
    );
  }
}

export default Form;
