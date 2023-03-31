import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='logo'>
                <Link to='/' />
            </div>
            <div className='social-media'>
                <a
                    href='https://www.facebook.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaFacebookF />
                </a>
                <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsLinkedin />
                </a>
                <a
                    href='https://www.instagram.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsInstagram />
                </a>
                <a
                    href='https://www.twitter.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsTwitter />
                </a>
                <a
                    href='https://www.youtube.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsYoutube />
                </a>
            </div>
        </div>
    );
};

export default Contact;
