import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 class="contact-comment">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
      
      <form action="https://formspree.io/f/mqkoaqdk/" method="POST">
        <ul class="form-list">
          <li>
            <input type="text" name="user-name" id="name" maxlength="30" required placeholder="Full name" />
          </li>
          <li>
            <input type="email" name="user-email" id="mail" required placeholder="Email address"/>
          </li>
          <li>
            <textarea name="user-message" id="message" maxlength="500" required placeholder="Write me something..."></textarea>
          </li>

          <li class="contact-button">
            <button class="form-submit" type="submit">Get in touch</button>
          </li>
          <span id="error" aria-live="polite"></span>
        </ul>
      </form>
    </div>
  )
}

export default Contact;
