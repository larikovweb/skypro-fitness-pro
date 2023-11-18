import { FC } from "react";
import * as S from "./styles";

export const Header: FC = () => {
    return (
        <S.MainHeaderBlock>
          <S.SkyfintessLogo src="../../../public/img/logo.png" alt="logo" />
          <S.LoginButton>Войти</S.LoginButton>
        </S.MainHeaderBlock>
    )
}