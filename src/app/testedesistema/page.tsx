"use client";

import { useState } from "react";
import SystemTestTable from "../components/SystemTestTable/SystemTestTable";

const TesteSistema = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Teste de Sistema</title>
        <div className="h-100">
          <SystemTestTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default TesteSistema;
