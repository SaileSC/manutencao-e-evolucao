"use client";

import { useState } from "react";
import AcceptTestTable from "../components/AcceptTestTable/AcceptTestTable";

const TesteAceite = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Teste de Aceite</title>
        <div className="h-100">
          <AcceptTestTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default TesteAceite;
