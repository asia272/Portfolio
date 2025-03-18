import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import NearMeIcon from '@mui/icons-material/NearMe';
import './Contact.css';
import "./ContactError.css"

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // onSubmit function to handle form submission
  const sendEmail = async () => {
    try {
      await emailjs.sendForm('service_8t19f5v', 'template_rwj6f8p', form.current, {
        publicKey: 'gbCcFmbXFCuYQBlX4',
        reply_to: form.current.from_email.value,
      });

      alert('Message sent successfully!');
      reset();

    } catch (error) {
      console.log(error.text);
      alert('Something went wrong. Please try again!');
    }
  };



  return (
    <div className="section contact" id="contact">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <p>Let's connect! 😎 </p>
      </div>

      <div className="contact-container">
        <div className="form-info">
          <h3>Talking with me...</h3>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            {/* Name Input */}
            <div>
              <label htmlFor="name"
                className='form-lable'
              >
                Name
              </label>
              <input
                className={errors.from_name ? "input-error contact-input" : "contact-input"}
                {...register('from_name', { required: 'Name is required' })}
                placeholder="Enter Your Name"
                id="name"
                autoComplete="name"

              />
              {errors.from_name &&
                <p className={errors.from_name ? "error" : ""}>
                  {errors.from_name.message}
                </p>
              }
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className='form-lable'
              >
                Email
              </label>
              <input
                className={errors.from_email ? "input-error contact-input" : "contact-input"}
                type="email"

                {...register('from_email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Enter Your Email"
                id="email"
                autoComplete="email"
              />
              {errors.from_email &&
                <p className={errors.from_email ? "error" : ""}>
                  {errors.from_email.message}
                </p>
              }
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className='form-lable'
              >Message
              </label>
              <textarea
                className={errors.message ? "input-error contact-input" : "contact-input"}
                {...register('message', { required: 'Message is required' })}
                placeholder="Something you want to write for me"
                id="message"
                rows="8"
              />
              {errors.message &&
                <p className={errors.message ? "error" : ""}>
                  {errors.message.message}
                </p>
              }
            </div>

            {/* Submit Button */}
            <div>
              <button
                className='contact-btn'
                type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <NearMeIcon />

              </button>
            </div>
          </form>
        </div>
        <div className="my-info">
          <div className="info">
            <h1>Asia Ashraf</h1>
            <i className='info-p'>
              BSCS Student & Technology Enthusiast
            </i>
          </div>
          <div className="my-contact-info">
            <p><span>Age:</span> 21</p>
            <p><span>Phone:</span> +92 302 2094272</p>
            <p><span>Email:</span> <a href="mailto:asiaashraf7272@gmail.com">asiaashraf7272@gmail.com</a> </p>
            <p><span>Residence:</span> Pakistan</p>
            <p><span>Address:</span> Fort Abbas (272), Punjab, Pakistan</p>
            <p><span>Github:</span> <a href="https://github.com/asia272">github.com/asia272</a></p>
            <p><span>Linkdin:</span><a href="https://www.linkedin.com/"> linkedin.com/asia-ashraf</a></p>
            <p><span>Frontendmentor:</span><a href="https://www.frontendmentor.io/profile/asia272">frontendmentor.io/profile/asia272</a></p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Contact;
