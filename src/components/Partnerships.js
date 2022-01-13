import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import config from '../config';

const Partnerships = () => {
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

  return (
    <div className="partnerships">
      <div className="partnerships-section-1">
        <img
          src={`${config.publicCloudfrontURL}/deuterx-handshake-cropped.jpg`}
          alt={config.businessName}
          className="fixed-image partnerships-image"
        />
        <Fade><div className="image-overlay" /></Fade>
        <Fade>
          <div className="partnerships-section-1-content">
            <h1>Compelling Commercial Strategy</h1>
            <h3>and Large Portfolio of Product Opportunities</h3>
          </div>
        </Fade>
      </div>
      <div className="partnerships-section-2">
        <div className="partnerships-cards">
          <div className="partnership-card">
            <h3>Neurological Disorders</h3>
            <ul>
              <li>
                <p>
                  <b>NTY-184</b>
                  ,
                  deuterated S-bupropion
                  <br />
                  Neuromity Therapeutics created (Nov 2021)
                </p>
              </li>
              <li><p>Undisclosed discovery stage assets</p></li>
            </ul>
          </div>
          <div className="partnership-card">
            <h3>Sold/Partnered Assets</h3>
            <ul>
              <li>
                <p>
                  <b>SP-3164</b>
                  ,
                  deuterated S-avadomide
                  <br />
                  Acquired by Salarius (Jan 2022)
                </p>
              </li>
              <li>
                <p>
                  <b>PXL065</b>
                  ,
                  deuterated R-pioglitazone
                  <br />
                  <a href="https://www.businesswire.com/news/home/20180829005794/en/Poxel-Expands-Metabolic-Pipeline-Strategic-Acquisition-Agreement">
                    Acquired by Poxel SA
                  </a>
                  {' '}
                  (Aug 2018)
                </p>
              </li>
              <li>
                <p>
                  <b>DP-053</b>
                  ,
                  deuterated S-lenalidomide
                  <br />
                  <a href="https://www.sec.gov/Archives/edgar/data/816284/000104746913001186/a2212863z10-k.htm">
                    Acquired by Celgene
                  </a>
                  {' '}
                  (Dec 2012)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="partnerships-section-3">
        <h3>For additional information, please send us a message.</h3>
        <div className="contact">
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
            <div className="contact-method">
              <p><i className="fas fa-phone-alt" /></p>
              <p>(978) 662-5287</p>
            </div>
            <div className="contact-method">
              <p><i className="fas fa-envelope" /></p>
              <a className="no-fuschia" href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a>
            </div>
            <div className="contact-method">
              <p><i className="fas fa-map-marker-alt" /></p>
              <p>
                DeuteRx, LLC
                <br />
                300 Brickstone Square, Suite 201
                <br />
                Andover MA 01810
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
