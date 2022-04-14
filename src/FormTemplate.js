import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector(".form-message")

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_ID)
      .then((result) => {
          console.log(result.text); 
          form.current.reset()
          formMess.innerHTML = "<p className='success'>Message Envoyé avec succes</p>";

          setTimeout(() => {
              formMess.innerHTML = "";
          }, 2500)
      }, (error) => {
          console.log(error.text);
          formMess.innerHTML = "<p className='error'>Une erreur c'eest produit veuillez reessayé</p>";
          
          setTimeout(() => {
              formMess.innerHTML = "";
            }, 2500)
      });
  };

  return (
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
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