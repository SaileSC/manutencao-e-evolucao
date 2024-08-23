"use client";

import Link from "next/link";
import UserModalDelete from "../UserModalDelete/UserModalDelete";
import { useState } from "react";

const TableImplementationOptions = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
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
        <i className="bi bi-check-lg text-black fs-5 fw-bold"></i>
      </Link>
    </div>
  );
};

export default TableImplementationOptions;
