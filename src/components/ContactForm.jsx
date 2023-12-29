import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1fvjwbn', 'template_9scoa1k', form.current, 'Aha9W_unsHYs8MZtT')
      .then(() => {
        setSubmissionStatus('success');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setSubmissionStatus(null);
          window.location.reload(); // Refresh the page on send
        }, 3500); // Set time for the popup to disappear after send
      })
      .catch(() => {
        setSubmissionStatus('error');
        setShowPopup(true);
      });
  };

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
        setSubmissionStatus(null);
      }, 3500); // Set time for the popup to disappear after fail

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='contact'>
        <label className='submit'>Your Name</label>
        <input type="text" name="from_name" className='submit' />
        <label className='submit'>Your Email</label>
        <input type="email" name="from_email" className='submit' />
        <label className='submit'>Message</label>
        <textarea name="message" className='submit' />
        <input className='submitButton' type="submit" value="Send" />
      </form>
      {showPopup && (
        <div className='popup'>
          <p>
            {submissionStatus === 'success'
              ? 'Your email has sent successfully!'
              : 'Oops! An error has occured!'}
          </p>
        </div>
      )}
    </div>
  );
};