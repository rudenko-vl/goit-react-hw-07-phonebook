import React from "react";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { Item, List, Btn } from "./ContactsList.styled";
import { deleteItem } from "redux/contactSlice";
import toast, { Toaster } from 'react-hot-toast';

const ContactsList = ({ contacts } ) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Btn
            id={contact.id}
            type="button"
            onClick={() => {
              dispatch(deleteItem(contact.id))
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
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
