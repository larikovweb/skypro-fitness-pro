// src/hooks/useModal.ts
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../store/slices/modalSlice';
import { RootState } from '../store/store';
// update with your path

export const useModal = (id: string) => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state: RootState) => state.modal.currentModal);
  const isOpen = currentModal === id;
  const close = () => dispatch(closeModal());
  const open = () => dispatch(openModal(id));
  return { isOpen, close, open };
};
