import React from "react";
import { Item, List, Btn } from "./ContactsList.styled";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import toast, { Toaster } from 'react-hot-toast';

const ContactsList = () => {
  const {data = [], isLoading} = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  
  const handleDeleteContact = async (id) => {
    await deleteContact(id).unwrap();
  }

  if (isLoading) return <h1>Loading...</h1>
  
  // const filterByName = () => {
  //   return data.filter((contact) =>
  //     contact.name.toLowerCase().includes(contactName.toLowerCase())
  //   );
  // };

  return (
    <List>
      {data.map((contact) => (
        <Item key={contact.id}>
          <p>
            {contact.name}: {contact.phone}
          </p>
          <Btn
            id={contact.id}
            type="button"
            onClick={() => {
              handleDeleteContact(contact.id)
              toast.success('Contact deleted');
            }}
          >
            Delete
          </Btn>
        </Item>
      ))}
      <Toaster/>
    </List>
  );
};


export default ContactsList;
