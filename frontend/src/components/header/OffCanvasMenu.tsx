import Link from "next/link";
import React from "react";


interface OffCanvasMenuProps {
  isOpen: boolean;
  toggleOffCanvas: () => void; // Assuming it's a function without parameters
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, toggleOffCanvas }) => {
  const showClass = isOpen ? 'show' : '';

  return (
    <>
    <div className={`offcanvas offcanvas-end ${showClass}`} tabIndex={-1}>
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link
            href="/"
            className={`d-flex align-items-center mb-md-0 text-decoration-none `}
          >
            <img
              src={`/assets/img/omaina/logo/enormt-logo-color.png`}
              alt="logo"
              width={150}
              className="img-fluid ps-2"
            />
          </Link>
          <button
            type="button"
            className="close-btn text-danger"
            onClick={toggleOffCanvas}
          >
            <i className="far fa-close"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav col-12 col-md-auto justify-content-center main-menu">
            <li>
              <Link href="/" className="nav-link">
                Hem
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="nav-link">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link">
                Tjänster
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="nav-link">
                Kontakta oss
              </Link>
            </li>
            <li>
              <Link href="/nyheter" className="nav-link">
                Nyheter
              </Link>
            </li>
            <li>
              <Link href="/advo-app" 
                className="nav-link"
                >Advo appen
              </Link>
            </li> 
          </ul>
          <div className="action-btns mt-4 ps-3">
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
