import { FC } from 'react';
import { LogoIco } from '../../../icons';
import { Input } from '../../form/Input';
import { Button } from '../../form/Button';
import * as S from './styles';

type Props = {
  isOpen?: boolean;
};

export const ModalNewPassword: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <LogoIco fillColor="#140d40" />
      </S.Logo>
      <S.Form>
        <S.Label>Новый пароль:</S.Label>
        <Input placeholder="Пароль" />
        <Input placeholder="Повторите пароль" />
        <Button $primary type="submit">
          Сохранить
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
