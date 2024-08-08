// export type RequestResponseAPI = {
//   numero_requisicao: string;
//   data: string;
//   nome_solicitante: string;
//   nome_sistema: string;
//   descricao_requisicao: string;
//   status_requisicao: string;
//   anexo: string;
//   fechamento: string;
//   id: string;
// };

export type RequestAPI = {
  nomeSolicitante: string;
  nomeSistema: string;
  data: string;
  descricaoRequisicao: string;
  statusRequisicao: string;
  anexo: Blob;
  dataFechamento: string;
};

export type RequestAPIResponse = RequestAPI & { numeroRequisicao: string };
