// src/components/ModalControl.tsx
import { FC, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ModalOverlay } from './ModalOverlay';
import { RootState } from '../../store/store';
import { closeModal, openModal } from '../../store/slices/modalSlice';

type Props = {
  modal: ReactNode;
  children: ReactNode;
  id: string;
};

export const ModalControl: FC<Props> = ({ modal, children, id }) => {
  const currentModal = useSelector((state: RootState) => state.modal.currentModal);
  const dispatch = useDispatch();

  const isOpen = currentModal === id;

  return (
    <>
      <div
        style={{ cursor: 'pointer', width: 'fit-content' }}
        onClick={() => dispatch(openModal(id))}>
        {children}
      </div>
      {
        <ModalOverlay setOpen={() => dispatch(closeModal())} open={isOpen}>
          {modal}
        </ModalOverlay>
      }
    </>
  );
};
