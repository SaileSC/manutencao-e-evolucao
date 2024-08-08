"use client";

import { createRequest } from "@/app/service/requisicoes";
import { RequestAPI } from "@/app/types/requests";
import { getDate } from "@/app/utils/currentDate";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CurrentDate = () => {
  const reqparam = useSearchParams();
  const param = reqparam.get("countRequest");
  const numRequisicao = parseInt(param!) + 1;

  return (
    <input
      className="form-control text-center"
      type="text"
      id="numRequisicao"
      value={numRequisicao}
      disabled
    />
  );
};

const Criar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RequestAPI>();

  const onSubmit = async (data: RequestAPI) => {
    const response = await createRequest(data);
    if (response.status == "1") {
      console.log(response.status);
      toast.success(response.menssage);
      router.back();
    }
  };

  return (
    <fieldset className="border py-2 px-4 m-2 rounded-4 ">
      <title>Nova Requisição</title>
      <legend className="float-none w-auto">Criação de Nova Requisição</legend>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-100"
      >
        <div className="row mb-3">
          <div className="col-8 row p-0 m-0">
            <label
              htmlFor="numRequisicao"
              className="col-3 col-form-label px-0"
            >
              Número da Requisição:
            </label>
            <div className="col-2 p-0">
              <Suspense>
                <CurrentDate />
              </Suspense>
            </div>
          </div>

          <div className="col-4 row p-0 m-0 justify-content-end">
            <label htmlFor="data" className="col-2 col-form-label px-0">
              Data:
            </label>
            <div className="col-6 p-0">
              <input
                className="form-control text-center"
                id="data"
                type="date"
                value={getDate()}
                disabled
              />

              <input value={getDate()} {...register("data")} hidden />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="nomeSolicitante"
            className="col-2 col-form-label px-0"
          >
            Nome do Solicitante:
          </label>
          <div className="col-10 p-0">
            <input
              {...register("nomeSolicitante", { required: true })}
              type="text"
              id="nomeSolicitante"
              className="form-control"
            />
            {errors.nomeSolicitante && (
              <small className="fw-medium text-danger">
                Nome do solicitante é obrigatório
              </small>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="nomeSistema" className="col-2 col-form-label px-0">
            Nome do Sistema:
          </label>
          <div className="col-10 p-0">
            <input
              {...register("nomeSistema", { required: true })}
              type="text"
              id="nomeSistema"
              className="form-control"
            />
            {errors.nomeSistema && (
              <small className="fw-medium text-danger">
                Nome do sistema é obrigatório
              </small>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="descricaoRequisicao"
            className="col-2 col-form-label px-0"
          >
            Descrição da Requisição de Alteração:
          </label>
          <div className="col-10 p-0">
            <textarea
              {...register("descricaoRequisicao", { required: true })}
              id="descricaoRequisicao"
              className="form-control"
              rows={4}
              maxLength={500}
            ></textarea>
            {errors.descricaoRequisicao && (
              <small className="fw-medium text-danger">
                É obrigatório ter uma descrição
              </small>
            )}
            <small
              className={`text${
                watch("descricaoRequisicao")?.length != 500
                  ? "-success"
                  : "-danger fw-medium"
              } `}
            >
              <span> {watch("descricaoRequisicao")?.length || 0}</span>
              /500 caracteres
            </small>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="status" className="col-2 col-form-label px-0">
            Status da Requisição:
          </label>
          <div className="col-2 p-0 ">
            <input
              className="form-control text-center"
              type="text"
              disabled
              value="Em criação"
            />

            <input
              type="text"
              value={1}
              {...register("statusRequisicao")}
              hidden
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="anexo" className="col-2 col-form-label px-0">
            Anexo:
          </label>
          <div className="col-10 p-0">
            <input type="file" className="form-control" />
            <input type="text" value="" {...register("anexo")} hidden />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="dataFechamento" className="col-2 col-form-label px-0">
            Data Fechamento:
          </label>
          <div className="col-2 p-0">
            <input
              type="text"
              id="dataFechamento"
              name="fechamento"
              className="form-control text-center"
              disabled
              value="A determinar"
            />

            <input
              type="date"
              value=""
              hidden
              {...register("dataFechamento")}
            />
          </div>
        </div>

        <div className="row mt-2 justify-content-end">
          <button
            type="submit"
            className="btn btn-outline-success col-2 fw-bolder"
          >
            Enviar
          </button>
        </div>
      </form>
    </fieldset>
  );
};

export default Criar;
