import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item, List, Btn, Error } from "./ContactsList.styled";
import { useDeleteContactMutation, useGetContactsQuery } from "redux/contactsApi";
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";

const ContactsList = ({ filter }) => {
  const [loading, setLoading] = useState(false);
  const {data = [], isLoading, isError} = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = async (id) => {
    setLoading(true);
    await deleteContact(id).unwrap();
    setLoading(false);
  }
  console.log(data.length)
  if (loading || isLoading) return <Loader/>
  if (isError) return <Error>Sorry, server error!</Error>
  if (data.length === 0) return <h2>You don't have contacts yet. Add someone 🙂</h2>
  
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
