import React from "react";
import "../stylesheets/footer.scss";

const footer = () => {
  return (
    <footer className="footer">
      <p>Bárbara Chaves © 2019</p>
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/barbara-chaves/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/barbara-chaves">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </footer>
  );
};

export default footer;
