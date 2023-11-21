import { FC } from 'react';
import { LogoIco } from '../../icons';
import { Input } from '../form/Input';
import { Button } from '../form/Button';
import styled from '@emotion/styled';

type Props = {
  isOpen?: boolean;
};

export const ModalNewPassword: FC<Props> = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoIco fillColor="#140d40" />
      </Logo>
      <Form>
        <Label>Новый пароль:</Label>
        <Input placeholder="Пароль" />
        <Input placeholder="Повторите пароль" />
        <Button $primary type="submit">
          Сохранить
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 17.375rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

const Form = styled.form`
  > input {
    &:not(:last-of-type) {
      margin-bottom: 2.35rem;
    }
  }
  > button {
    margin-top: 3.13rem;
  }
`;

const Label = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00313rem;
  margin-bottom: 1.25rem;
`;
