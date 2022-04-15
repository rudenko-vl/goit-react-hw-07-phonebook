import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";
import ContactsList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Title from "./Title/Title";
import { GlobalStyle } from "./GlobalStyle";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { newItem } from "redux/contactSlice";


const App = () => {
    let contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);


  const  handleFormSubmit = ( data ) => {
    const checkForContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForContact) {
      return toast.error(`${data.name} is already in contacts.`)
    }
    dispatch(newItem(data));
  };


  const filterByName = () => {
    return contacts.filter((contact) => 
       contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
  };

    return (
      <Container>
        <GlobalStyle />
        <Toaster/>
        <Title title="Phonebook" />
        <ContactForm onSubmit={handleFormSubmit} />
        <Title title="Contacts" />
        <Filter />
        <ContactsList
          contacts={filterByName()}
        />
      </Container>
    );
}

export default App;
