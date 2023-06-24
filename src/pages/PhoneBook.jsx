import { Countainer } from '../components/Styles/Countainer';
import { TitleContact, TitlePhone } from '../components/Styles/Titles';
import { Contacts } from '../components/Contacts/Contacts';
import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contacts/contactOperations';

export function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Countainer>
      <ToastContainer autoClose={1000} />

      <TitlePhone>Phonebook</TitlePhone>

      <Form />

      <TitleContact>Contacts</TitleContact>

      <Filter title="Find contacts by name" />

      <Contacts />
    </Countainer>
  );
}
