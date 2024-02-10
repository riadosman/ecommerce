import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram ,FaTwitch,FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <img src="https://picsum.photos/200/200" alt="img" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          sequi.
        </p>
        <ul>
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
            <FaTwitch />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter   />
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>Solutions</li>
        <li>Marketing</li>
        <li>Analytics</li>
        <li>Commerce</li>
        <li>Insights</li>
      </ul>
      <ul>
        <li>Support</li>
        <li>Pricing</li>
        <li>Documentation</li>
        <li>Guides</li>
        <li>API Status</li>
      </ul>
      <ul>
        <li>Company</li>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Press</li>
      </ul>
    </div>
  );
};
export default Footer;
