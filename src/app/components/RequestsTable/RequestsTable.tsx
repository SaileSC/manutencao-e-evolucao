"use client";

import { StatesResponse } from "@/app/types/StateResponse";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import TableRequestsOptions from "../TableRequestsOptions/TableRequestsOptions";
import { RequestStatus } from "@/app/enums/RequestStatus";
import { listRequests } from "@/app/service/requisicoes";
import { RequestAPIResponse } from "@/app/types/requests";

type DataRow = {
  idRequest: string;
  requestername: string;
  date: string;
  status: string;
  actions: React.ReactNode;
};

type RequestsTableprops = {
  countTableRows: React.Dispatch<React.SetStateAction<number>>;
};

const RequestsTable = ({ countTableRows }: RequestsTableprops) => {
  const [stateResponse, setStateResponse] = useState<StatesResponse>({
    isError: false,
    isLoading: false,
    errorMessage: undefined,
  });

  const [response, setResponse] = useState<RequestAPIResponse[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listRequests();
        setResponse(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  countTableRows(response?.length || 0);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Nº Requisição",
      selector: (row) => row.idRequest,
      sortable: true,
    },
    {
      name: "Nome do Solicitante",
      selector: (row) => row.requestername,
      sortable: true,
    },
    {
      name: "Data",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Ações",
      cell: (row) => row.actions,
      sortable: false,
      center: true,
      style: { justifyContent: "center" },
    },
  ];

  const data =
    response?.map((request) => {
      return {
        idRequest: request.numeroRequisicao,
        requestername: request.nomeSolicitante,
        date: request.data,
        status: RequestStatus[parseInt(request.statusRequisicao)],
        actions: <TableRequestsOptions id={1} name="asdas" />,
      };
    }) || [];

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const CustomNoDataComponent = () => (
    <div style={{ padding: "24px", textAlign: "center" }}>
      Nenhum dado disponível para exibir.
    </div>
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      fixedHeaderScrollHeight="300px"
      pagination
      responsive
      subHeaderWrap
      progressPending={stateResponse.isLoading}
      paginationComponentOptions={paginationComponentOptions}
      paginationPerPage={7}
      striped
      noDataComponent={<CustomNoDataComponent />}
    />
  );
};

export default RequestsTable;
