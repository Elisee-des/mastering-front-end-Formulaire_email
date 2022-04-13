import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector("form-message")

    emailjs.sendForm('service_4bdqtiz', 'template_hgxq536', form.current, 'KH2PQNfUY8NjGIBJY')
      .then((result) => {
          console.log(result.text);
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required autoComplete='off' />
            <label>Email</label>
            <input type="email" name="email" required autoComplete='off' />
            <label>Message</label>
            <textarea name="message"  required />
            <input type="submit" value="Send" />
        </form>
        <div className="form-message">

        </div>
      </div>
  );
};

export default FormTemplate;