import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black mt-4 text-white p-10">
                <aside>
                   <h1 className="text-3xl font-bold">Customer-Support CS</h1>
                    <p>
                        Providing reliable customer support solutions since 2024.<br /> Your satisfaction is our priority.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover flex items-center gap-2"><FaTwitter/> Twitter</a>
                    <a className="link link-hover flex items-center gap-2"><FaInstagram/> Instagram</a>
                    <a className="link link-hover flex items-center gap-2"><FaFacebook/> Facebook</a>
                    <a className="link link-hover flex items-center gap-2"><FaGithub/> Github</a>
                </nav>
            </footer>
            <hr className="container w-11/12 mx-auto"/>
            <div>
                <p className='text-center text-sm bg-black text-white py-4'>Copyright © 2024 - All right reserved by Customer-Support CS</p>
            </div>
        </div>
    );
};

export default Footer;