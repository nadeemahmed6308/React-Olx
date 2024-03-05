import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center ">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
            <a className="text-dark fs-4" href="https://github.com/nadeemahmed6308/JS-ASSIGNMENTS" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            {" "} Made with ❤️ by {" "}
              <a  href="https://www.linkedin.com/in/nadeem-ahmed786" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Nadeem Ahmed</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
