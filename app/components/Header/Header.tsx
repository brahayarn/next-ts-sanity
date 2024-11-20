"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Default active link

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (hash: string) => {
    setActiveLink(hash);
    closeMobileMenu();
  };

  useEffect(() => {
    const currentHash = window.location.hash || "#home";
    setActiveLink(currentHash);
  }, []);

  return (
    <header className={styles.header}>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={styles.logo}>
        DIGITAL <span>Construction</span>
      </div>
      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.navOpen : styles.navClosed
        }`}
      >
        <a
          href="#home"
          className={activeLink === "#home" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </a>
        <a
          href="#services"
          className={activeLink === "#services" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#services")}
        >
          Services
        </a>
        <a
          href="#about"
          className={activeLink === "#about" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About Company
        </a>
        <a
          href="#career"
          className={activeLink === "#career" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#career")}
        >
          Career
        </a>
        <a
          href="#blog"
          className={activeLink === "#blog" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#blog")}
        >
          Blog
        </a>
      </nav>
      <button
          className={styles.contactButton}
          onClick={closeMobileMenu}
        >
          Contact Us
        </button>
    </header>
  );
};

export default Header;
