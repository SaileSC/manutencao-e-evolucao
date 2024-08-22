"use client";

import { useState } from "react";
import AnalysisTable from "../components/AnalysisTable/AnalysisTable";

const Analise = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Análise</title>
        <div className="h-100">
          <AnalysisTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default Analise;
