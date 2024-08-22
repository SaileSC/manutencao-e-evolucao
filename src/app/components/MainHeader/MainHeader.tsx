"use client";

import Image from "next/image";
import footerStyle from "./style/footer.module.scss";

const MainHeader = () => {
  return (
    <header className="py-0 row border-bottom border-3 border-warning">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-opacity-10 border-bottom border-primary border-2">
        <div className="container-fluid bg-opacity-10">
          <div className="d-flex flex-row">
            <Image
              src="/img/if.png"
              alt="logoIfam"
              className="img img-fluid mx-3 p-1"
              width={80}
              height={0}
            />

            <div className="d-flex flex-column">
              <div className="d-flex justify-content-around flex-grow-1 pt-1">
                <Image
                  src="/img/titulo.png"
                  alt="logoIfam"
                  className="img img-fluid mx-3 p-1"
                  width={180}
                  height={0}
                />
              </div>

              <Image
                src="/img/ifam-nome.png"
                alt="logoIfam"
                className="img img-fluid mx-3 p-1"
                width={250}
                height={0}
              />
            </div>
          </div>

          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav fs-4">
                <li className="nav-item">
                  <a
                    className={`nav-link ${footerStyle.textHouver}`}
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`nav-link ${footerStyle.textHouver}`} href="#">
                    Produto
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`nav-link ${footerStyle.textHouver}`} href="#">
                    Sobre
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`nav-link ${footerStyle.textHouver}`} href="#">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
