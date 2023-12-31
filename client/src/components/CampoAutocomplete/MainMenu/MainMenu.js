import React, { useState } from "react";
import "./MainMenu.css";
import { Link } from "react-router-dom";

function MainMenu() {
  // Estado para controlar si el menú móvil está activo o no
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  // Función para manejar el clic en el botón de la hamburguesa
  const handleBurgerButtonClick = () => {
    // Toggle del estado para activar/desactivar el menú móvil
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <div className={`sidebar ${isMobileMenuActive ? "sidebar--active" : ""}`}>
        <div div className="sidebar__logoContainer">
          <img
            className="sidebar__logo"
            src={require("../../assets/logo-media-hit-white.png")}
            alt={"Media Hit"}
          />
        </div>

        <ul className="sidebar__itemsContainer">
          <li className="sidebar__category">Financiero</li>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-today.png")}
                  alt={"movimientos"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Movimientos</span>
          </Link>

          <Link to="/balance" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-balance.png")}
                  alt={"balance"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Balance</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-budget.png")}
                  alt={"presupuesto"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Presupuesto</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-solvencia.png")}
                  alt={"solvencia"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Solvencia</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-ingreso.png")}
                  alt={"ingresos"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Ingresos</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-egreso.png")}
                  alt={"egresos"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Egresos</span>
          </Link>

          <li className="sidebar__category">Administrativo</li>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-invoice.png")}
                  alt={"facturas"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Facturas</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-client.png")}
                  alt={"clientes"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Clientes</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-provider.png")}
                  alt={"proveedores"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Proveedores</span>
          </Link>

          <li className="sidebar__category">Comercial</li>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-invoice.png")}
                  alt={"cotizaciones"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Cotizaciones</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-client.png")}
                  alt={"proyectos"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">Proyectos</span>
          </Link>

          <Link to="/" className="sidebar_item">
            <span className="sidebar__iconSpan">
              <i>
                <img
                  className="sidebar__itemIcon"
                  src={require("../../assets/menu-icons/i-provider.png")}
                  alt={"crm"}
                />
              </i>
            </span>
            <span className="sidebar__itemText">CRM</span>
          </Link>
        </ul>

        <div className="sidebar__profileContainer">
          <Link to="/" className="sidebar__profileBox">
            <div className="sidebar__profileImgBox">
              <img
                className="sidebar__profileImg"
                src={require("../../assets/profile-photo.jpg")}
                alt={"profile"}
              />
            </div>
            <div className="sidebar__profileInfo">
              <div className="sidebar__profileName">Felipe Garcia</div>
              <div className="sidebar_profileCharge">CEO</div>
            </div>
          </Link>
        </div>
      </div>

      <nav className="topMenu--mobile">
        <img
          className="mobile-logo"
          src={require("../../assets/logo-media-hit-white.png")}
          alt="Media Hit"
        />
        <i
          className={`fi fi-br-menu-burger burger`}
          id="burger-button"
          onClick={handleBurgerButtonClick}
        ></i>
      </nav>
    </>
  );
}

export { MainMenu };
