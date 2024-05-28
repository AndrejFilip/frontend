interface ModalProps {
  modalOpen: boolean;
  setModalOpen(open: boolean): boolean | void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
}) => {
  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div {...{ className: 'modal-box' }}>
        <label
          {...{
            onClick: () => setModalOpen(false),
            className: 'btn btn-circle right-2 top-1 absolute btn-sm',
          }}>
          x
        </label>
        {children}
      </div>
    </div>
  );
};
