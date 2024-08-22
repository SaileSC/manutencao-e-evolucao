"use client";

import { useState } from "react";
import ProjectTable from "../components/ProjectTable/ProjectTable";

const Projeto = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <title>Projeto</title>;
      <div className="m-4 p-3">
        <title>Identificação</title>
        <div className="h-100">
          <ProjectTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default Projeto;
