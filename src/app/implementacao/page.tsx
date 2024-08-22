"use client";

import { useState } from "react";
import ImplementationTable from "../components/ImplementationTable/ImplementationTable";

const Implementacao = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Implementação</title>
        <div className="h-100">
          <ImplementationTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default Implementacao;
