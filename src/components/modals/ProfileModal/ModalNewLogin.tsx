import { FC } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';

type Props = {
  isOpen?: boolean;
};

export const ModalNewLogin: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <LogoIco fillColor="#140d40" />
      </S.Logo>
      <S.Form>
        <S.Label>Новый логин:</S.Label>
        <Input placeholder="Логин" />
        <Button $primary type="submit">
          Сохранить
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
