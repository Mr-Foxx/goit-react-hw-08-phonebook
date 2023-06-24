import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contacts/contactOperations';
import { ContactList, ItemsContact, DeleteBtn } from './Contacts.styled';
import { toast } from 'react-toastify';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const query = useSelector(state => state.filter.filter);

  // console.log('contacts', contacts);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Контакт успішно видалений!');
  };

  return (
    <ContactList>
      {filteredContacts.map(contact => (
        <ItemsContact key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteBtn>
        </ItemsContact>
      ))}
    </ContactList>
  );
};
