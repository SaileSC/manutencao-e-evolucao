"use client";

import { userDelete } from "@/app/service/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type UserModalDelete = {
  show: boolean;
  onClose: () => void;
  name: string;
  id: number;
};

const UserModalDelete = ({ show, onClose, name, id }: UserModalDelete) => {
  const router = useRouter();
  const deleteUser = async () => {
    try {
      const response = await userDelete(id);

      if (response) {
        toast.success(response.menssage);
        onClose();
        router.push("/usuario");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      id="confirmaDelecao"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Confirmação de Deleção
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            Confirma a deleção do usuário:
            <em className="fw-medium text-warning" id="usuarioModal">
              {name}
            </em>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger fw-medium"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="btn btn-outline-success fw-medium"
              onClick={deleteUser}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModalDelete;
