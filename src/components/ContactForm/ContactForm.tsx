import React from 'react';
import useForm from '../../hooks/useForm';

import "./ContactForm.css"

const Contact: React.FC = () => {
  const fields = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      validation: {
        required: true,
        minLength: 3,
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validation: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      validation: {
        required: true,
        minLength: 10,
        maxLength: 300,
      },
    },
  ];

  const { formState, errors, handleChange, handleSubmit } = useForm(fields);

  return (
    <section id="contact">
      <h1>Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        {fields.map(({ name, type, label }) => (
          <div key={name}>
            <label htmlFor={name}>{label}:</label>
            {type === 'textarea' ? (
              <>
                <textarea
                id={name}
                name={name}
                value={formState[name]}
                onChange={handleChange}
                />
              </>

            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={formState[name]}
                onChange={handleChange}
              />
            )}
            {errors[name] && <p className="error">{errors[name]}</p>}
          </div>
        ))}
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
