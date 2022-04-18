import React from "react";
import PropTypes from "prop-types";
import { Item, List, Btn } from "./ContactsList.styled";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import toast, { Toaster } from 'react-hot-toast';

const ContactsList = ({filter}) => {
  const {data = [], isLoading} = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactMutation();
  
  const handleDeleteContact = async (id) => {
    await deleteContact(id).unwrap();
  }
  
  if (isLoading) return <h1>Loading...</h1>
  
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

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactsList;
