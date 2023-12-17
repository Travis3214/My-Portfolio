import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1fvjwbn', 'template_9scoa1k', form.current, 'Aha9W_unsHYs8MZtT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact'>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label className='submit'>Email</label>
      <input type="email" name="from_email" />
      <label className='submit'>Message</label>
      <textarea name="message" />
      <input className='submitButton' type="submit" value="Send" />
    </form>
  );
};