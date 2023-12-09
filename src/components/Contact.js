import React from 'react';

const Contact = () => (
  <div>
    <h2 className="contact-comment">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
    <form action="https://formspree.io/f/mqkoaqdk/" method="POST">
      <ul className="form-list">
        <li>
          <input type="text" name="user-name" id="name" maxLength="30" required placeholder="Full name" />
        </li>
        <li>
          <input type="email" name="user-email" id="mail" required placeholder="Email address" />
        </li>
        <li>
          <textarea name="user-message" id="message" maxLength="500" required placeholder="Write me something..." />
        </li>
        <li className="contact-button">
          <button className="form-submit" type="submit">Get in touch</button>
        </li>
        <span id="error" aria-live="polite" />
      </ul>
    </form>
  </div>
);

export default Contact;
