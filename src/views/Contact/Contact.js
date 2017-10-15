import React, { Component } from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import { Breadcrumb, Container, Recaptcha } from '../../components';
import styles from './Contact.css';
import { api } from '../../utils';

const GENERIC_ERROR = 'Something went wrong, please try again.';

export default class Contact extends Component {

  state = {
    name: '',
    email: '',
    enquiry: '',
    message: null,
    verified: false,
    sending: false,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ sending: true });

    const { name, email, enquiry } = this.state;

    try {
      const recaptcha = window.grecaptcha.getResponse();
      const response = await api.post('/contact', { name, email, enquiry, recaptcha });

      if (response) {
        this.setState({ sending: false, name: '', email: '', enquiry: '', message: 'Thank you for submitting your enquiry. The team will get back to you as soon as possible.' });
      } else {
        this.setState({ sending: false, message: GENERIC_ERROR });
      }
    } catch (error) {
      this.setState({ sending: false, message: GENERIC_ERROR });
    }
  };

  verifyCallback = (response) => {
    this.setState({ verified: response });
  };

  render() {
    const { name, email, enquiry, verified, sending, message } = this.state;

    return (
      <div className={styles.root}>
        <Helmet title="Contact" />
        <Breadcrumb title="Contact" description="We'd love to hear from you" />

        {
          message ? (
            <Container small>
              <h2>Get in touch</h2>
              <p>{message}</p>
            </Container>
          ) : (
            <Container small>
              <h2>Get in touch</h2>
              <p>If you have any comments or questions about the products and services on this site and PABLO please feel
                free to contact us using the form below.</p>

              <form className={styles.form} onSubmit={this.onSubmit}>
                <input type="text" placeholder="Name" className={styles.input} required value={name} onChange={e => this.setState({ name: e.target.value })} />
                <input type="text" placeholder="Email" className={styles.input} required value={email} onChange={e => this.setState({ email: e.target.value })} />
                <textarea placeholder="Enquiry" className={cx(styles.input, styles.textarea)} required value={enquiry} onChange={e => this.setState({ enquiry: e.target.value })} />
                <Recaptcha className={styles.recaptcha} sitekey="6LcbnTMUAAAAAItJg_R4moUEYtv-iJTDnC8WTLNm" callback={this.verifyCallback} />
                <button type="submit" className={styles.button} disabled={sending || !name || !email || !enquiry || !verified}>SUBMIT ENQUIRY</button>
              </form>
            </Container>
          )
        }
      </div>
    );
  }
}
