import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";

const UserSchema = yup.object().shape({
  username: yup.string().min(2, "To short!").required("Required!"),
  usernumber: yup.number().min(3, "To short!").required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.user}>
          <label htmlFor={`${fieldId}-username`}>Name</label>
          <Field
            className={css.input}
            name="username"
            id={`${fieldId}-username`}
          />
          <ErrorMessage
            className={css.error_msg}
            name="username"
            component="span"
          />
        </div>
        <div className={css.user}>
          <label htmlFor={`${fieldId}-usernumber`}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="usernumber"
            id={`${fieldId}-usernumber`}
          />
          <ErrorMessage
            className={css.error_msg}
            name="usernumber"
            component="span"
          />
        </div>
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
