import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(
        'service_ac9dhm5',
        'template_zuzrjwi',
        formRef.current,
        'ahRzRP_DbaUrC5ZIS',
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>karthikeyaburla@gmail.com</h5>
            <a href="mailto:karthikeyaburla@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <span>Thanks, I'll reply ASAP :)</span>}
          {status === 'error' && <span>Something went wrong — please email me directly.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
