import React from 'react';
import { FooterContext } from './App';



const Footer = () => {
  return (
    <FooterContext.Consumer>
      {name => <div className="footer">
        <a href='https://t.me/vanyachyzh'>{name}</a>
      </div>}
    </FooterContext.Consumer>)
}

export default Footer;


