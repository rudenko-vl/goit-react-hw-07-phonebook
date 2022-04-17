import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";
import ContactsList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Title from "./Title/Title";
import { GlobalStyle } from "./GlobalStyle";
import toast, { Toaster } from 'react-hot-toast';
import { useNewContactsMutation, useGetContactsQuery } from "redux/contactsApi";

const App = () => {
    const [newContacts] = useNewContactsMutation();
    const { data } = useGetContactsQuery();

      const  handleFormSubmit = async ( { name, phone } ) => {
      const arrayNames = data.map(item => item.name.toLowerCase());
      if (arrayNames.includes(name.toLowerCase())) {
        return toast.error(`${name} is already in contacts.`);
        };
    await newContacts({ name, phone }).unwrap();
  };

    return (
      <Container>
        <GlobalStyle />
        <Toaster/>
        <Title title="Phonebook" />
        <ContactForm onSubmit={handleFormSubmit} />
        <Title title="Contacts" />
        <Filter />
        <ContactsList />
      </Container>
    );
}


export default App;
