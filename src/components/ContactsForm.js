import { Formik, Form, Field, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
import { object, string } from 'yup';
import { FormFild } from './ContactsForm.styled';
import { addContacts } from '../Redax/contacts/operations';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redax/contacts/selectors';

let schema = object({
  name: string().required(),
});

const ContactsForm = () => {
  const initialValue = {
    name: '',
    number: '',
  };
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (contacts.map(contact => contact.name).includes(newContact.name)) {
      alert(`Contact ${newContact.name} already exists.`);
      return;
    }
    dispatch(addContacts(values));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <ErrorMessage name="name" component="div" />

          <FormFild>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormFild>
          <FormFild>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormFild>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

// ContactsForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactsForm;
