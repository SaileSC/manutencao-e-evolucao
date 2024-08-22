"use client ";

import Image from "next/image";
import ButtonLink from "../ButtonLink/ButtonLink";
import Link from "next/link";

type Page = {
  title: string;
  href: string;
};

const MainSide = () => {
  const pages: Page[] = [
    { title: "Usuário", href: "/usuario" },
    { title: "Requisições", href: "/requisicoes" },
    { title: "Identificação", href: "/identificacao" },
    { title: "Análise", href: "/analise" },
    { title: "Projeto", href: "/projeto" },
    { title: "Implementação", href: "/implementacao" },
    { title: "Teste de Sistema", href: "/testedesistema" },
    { title: "Teste de Aceite", href: "/testedeaceite" },
    { title: "Entrega", href: "/entrega" },
  ];

  return (
    <div className="col-2">
      <div className="d-flex flex-column flex-shrink-0 p-3 h-100 rounded-2 justify-content-center">
        <ul className="nav nav-pills flex-column gap-3">
          {pages.map((page) => (
            <li key={page.title} className="nav-item">
              <ButtonLink href={page.href}>{page.title}</ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainSide;
