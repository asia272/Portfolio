import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  // onSubmit function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_8t19f5v', 'template_rwj6f8p', form.current, {
        publicKey: 'gbCcFmbXFCuYQBlX4',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text); 
          alert('Something went wrong. Please try again!');
        }
      );
  };

  return (
    <div className="section contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="my-info">My info</div>

        <div className="form-info">
          <h3>Talking with me...</h3>
          <form ref={form} onSubmit={sendEmail}>
            {/* Name Input */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                className='contact-input'
                {...register('from_name', { required: 'Name is required' })}
                placeholder="Enter Your Name"
                id="name"
                required
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email">Email</label>
              <input
              className='contact-input'
                type="email"
                required
                {...register('from_email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Enter Your Email"
                id="email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message">Message</label>
              <textarea
              className='contact-input'
                {...register('message', { required: 'Message is required' })}
                placeholder="Something you want to write for me"
                id="message"
                rows="8"
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
