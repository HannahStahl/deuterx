import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import config from '../config';

const Contact = ({ content }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');

  const updateValue = (e, updateFcn) => {
    updateFcn(e.target.value);
    setButtonText('Send');
  };

  const validateForm = () => name.length > 0 && email.length > 0 && message.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    fetch(config.emailURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        message,
        userEmail: email,
        clientEmail: config.emailAddress,
        siteDomain: window.location.origin,
      }),
    }).then((response) => response.json()).then((json) => {
      if (json.MessageId) {
        setButtonText('Sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setButtonText('Send');
        window.alert(`Oops! An error occurred with our contact form. Please send an email directly to ${config.emailAddress}.`);
      }
    });
  };

  return (content.allContact ? (
    <div className="contact">
      <div className="contact-section-1">
        <img
          src={`${config.publicCloudfrontURL}/deuterx-contact.png`}
          alt={config.businessName}
          className="fixed-image contact-image"
        />
        <Fade><div className="image-overlay" /></Fade>
        <Fade>
          <div className="contact-section-1-content">
            <h1>Contact Us</h1>
            <h3>for Additional Information</h3>
          </div>
        </Fade>
      </div>
      <div className="contact-section-2">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="name">
              <FormControl
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => updateValue(e, setName)}
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormControl
                placeholder="Your email address"
                type="email"
                value={email}
                onChange={(e) => updateValue(e, setEmail)}
              />
            </FormGroup>
            <FormGroup controlId="message">
              <FormControl
                rows={7}
                as="textarea"
                placeholder="Your message"
                value={message}
                onChange={(e) => updateValue(e, setMessage)}
              />
            </FormGroup>
            <Button
              block
              type="submit"
              size="lg"
              variant="outline-dark"
              disabled={!validateForm()}
            >
              {buttonText}
            </Button>
          </form>
          <div className="contact-info">
            {content.allContact[0].phone && (
              <div className="contact-method">
                <p><i className="fas fa-phone-alt" /></p>
                <p>{content.allContact[0].phone}</p>
              </div>
            )}
            <div className="contact-method">
              <p><i className="fas fa-envelope" /></p>
              <a className="no-fuschia" href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a>
            </div>
            <div className="contact-method">
              <p><i className="fas fa-map-marker-alt" /></p>
              <p>{content.allContact[0].address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <></>);
};

export default Contact;
