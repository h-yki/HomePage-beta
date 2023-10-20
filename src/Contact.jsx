// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className='links'>
      <h2>Contact</h2>
      <h4>X(旧Twitter)</h4>
      <ul className='Twi'>
        <li><Link to="https://x.com/yuh2253" target='_blank'>@yuh2253(本垢)</Link></li>
        <li><Link to="https://x.com/mald_y" target='_blank'>@mald_y(趣味垢)</Link></li>
      </ul>
      <h4>Github</h4>
      <ul className='Git'>
        <li><Link to="https://github.com/h-yki" target='_blank'>h-yki</Link></li>
      </ul>
      <h4>E-mail</h4>
      <ul className='email'>
        <li>yuuki531259[at]gmail.com</li>
      </ul>
    </div>
  );
};

export default Contact;
