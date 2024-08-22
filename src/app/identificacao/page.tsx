"use client";

import { useState } from "react";
import IdentificationTable from "../components/IdentificationTable/IdentificationTable";

const Identificacao = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Identificação</title>
        <div className="h-100">
          <IdentificationTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default Identificacao;
