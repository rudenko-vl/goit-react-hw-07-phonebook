import React from "react";
import PropTypes from "prop-types";
import { Item, List, Btn, Error } from "./ContactsList.styled";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import toast, { Toaster } from 'react-hot-toast';

const ContactsList = ({filter}) => {
  const {data = [], isLoading, isError} = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactMutation();
  
  const handleDeleteContact = async (id) => {
    await deleteContact(id).unwrap();
  }
  
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <Error>Sorry, server error!</Error>
  
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
