"use client";

import Link from "next/link";
import UserModalDelete from "../UserModalDelete/UserModalDelete";
import { useState } from "react";

const TableAnalysisOptions = ({ id, name }: { id: number; name: string }) => {
  const [modal, setModal] = useState<boolean>(false);

  const onCloseModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <div className="d-flex w-25 flex-row  justify-content-center gap-3">
      <Link href={`/requisicoes/detalhe/${id}`}>
        <i className="bi bi-1-square text-black fs-5 fw-bold"></i>
      </Link>

      <Link className="deleta" href="">
        <i className="bi bi-2-square text-black fs-5"></i>
      </Link>

      <Link className="deleta" href="">
        <i className="bi bi-3-square text-black fs-5"></i>
      </Link>

      <Link className="deleta" href="">
        <i className="bi bi-4-square text-black fs-5"></i>
      </Link>
    </div>
  );
};

export default TableAnalysisOptions;
