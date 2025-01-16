import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = (route) => {
    navigate(route); // Navega para a rota fornecida
  };
  const buttons = [
    { label: "profile", route: "/", icon: "bi bi-person" },
    { label: "redeem", route: "redeem", icon: "bi bi-upc-scan" },
    { label: "news", route: "news", icon: "bi bi-newspaper" },
    { label: "signup", route: "signup", icon: "bi bi-award" },
    { label: "login", route: "login", icon: "bi bi-award" },
  ];
  return (
    <div className="align-items-center menu mb-2 z-3">
      {buttons.map((button, index) => (
        <div className="col-auto" key={index}>
          <button
            className="btn btn-dark m-1"
            onClick={() => handleClick(button.route)}
          >
            <i className={button.icon}></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
