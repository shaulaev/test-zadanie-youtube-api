import "./style.css";

function Modal({ modal, setModal, children }) {
  return (
    <div
      className={modal ? "modal__active" : "modal"}
      onClick={() => setModal(!modal)}
    >
      <div className="modal__block">{children}</div>
    </div>
  );
}

export default Modal;
