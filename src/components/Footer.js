import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a href="https://github.com/JerallStalz" target='_blank'>
          <i className="fab fa-github" />
        </a>
        <a href="https://juanperezdev.netlify.app" target='_blank'>
          <i className="fas fa-link" />
        </a>
        <a href="https://www.linkedin.com/in/juan-simon-perez-castillo/">
          <i className="fab fa-linkedin" target='_blank'/>
        </a>
      </div>
      <div className="footer-legend">Conoce más de mi</div>
    </footer>
  );
}
