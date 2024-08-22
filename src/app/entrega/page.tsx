"use client";

import { useState } from "react";
import DeliveryTable from "../components/DeliveryTable/DeliveryTable";

const Entrega = () => {
  const [countRequest, setCountRequest] = useState<number>(0);

  return (
    <div>
      <div className="m-4 p-3">
        <title>Entrega</title>
        <div className="h-100">
          <DeliveryTable countTableRows={setCountRequest} />
        </div>
      </div>
    </div>
  );
};

export default Entrega;
