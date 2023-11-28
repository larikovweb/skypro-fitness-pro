import { FC, ReactNode, useState } from 'react';
import { ModalOverlay } from './ModalOverlay';

type Props = {
  modal: ReactNode;
  children: ReactNode;
};

export const ModalControl: FC<Props> = ({ modal, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => setOpen(true)}>
        {children}
      </div>
      <ModalOverlay setOpen={setOpen} open={open}>
        {modal}
      </ModalOverlay>
    </>
  );
};
