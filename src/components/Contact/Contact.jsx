import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import { themeContext } from '../../Context';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const handleSubmit = (e) => {
    alert('Thanks for Contacting me');
    if (nameRef.current.value === '') {
      nameRef.current.focus();
      return;
    }
    if (emailRef.current.value === '') {
      emailRef.current.focus();
      return;
    }
    if (messageRef.current.value === '') {
      messageRef.current.focus();
      return;
    }
    fetch('https://formsubmit.co/souhardya.bose@ieee.org', {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      },
    });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}

      {/* right side form */}
      <div className="c-right">
        <form onSubmit={handleSubmit} method="POST">
          <h2
            className="c-title font-bold"
            style={{ color: darkMode && 'white' }}
          >
            Contact. <span>Me</span>
          </h2>

          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            ref={nameRef}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            ref={emailRef}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            ref={messageRef}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for Contacting me'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
