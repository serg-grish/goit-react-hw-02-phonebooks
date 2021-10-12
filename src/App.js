import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import FormContact from "./components/FormContact/FormContact";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import "./app.css";

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Марина Соколова", number: "459-12-56" },
      { id: uuidv4(), name: "Денис Степанов", number: "443-89-12" },
      { id: uuidv4(), name: "Вадим Обрамов", number: "645-17-79" },
      { id: uuidv4(), name: "Елена Степанова", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>

        <FormContact onSubmit={this.addContact} />

        <h2>Contants</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactsList>
      </>
    );
  }
}

export default App;
