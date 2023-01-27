import React from "react";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header className="container-header">
      <p className="header-primary">Desafio</p>
      <p className="header-secondary">Progresso Formulário</p>
    </header>
  );
};

export { Header };
