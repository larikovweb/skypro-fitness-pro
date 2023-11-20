import { FC } from "react";
import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { createButton } from "../../components/form/Button";
import * as S from "./S.profile";

export const ProfilePage: FC = () => {
  const user = "user";
  return (
    <Container>
      <S.CardUser>
        <S.Info>
          <S.Title>Мой профиль</S.Title>
          <S.Ptext>Логин: {user}</S.Ptext>
          <S.Ptext>Пароль: 4fkhdj880d</S.Ptext>

          <S.Edit>
            <Button $primary type="submit" onClick={() => alert("no Link")}>
              Редактировать логин
            </Button>
            <Button
              $primary
              type="submit"
              $width={17}
              onClick={() => alert("no Link")}
            >
              Редактировать пароль
            </Button>
          </S.Edit>
        </S.Info>
        <S.Title>Мои курсы</S.Title>

        <S.CourseCardBlock>
          <S.CourceCard>
            <S.CourceCardTitle>
              <S.CourceCardTitleP>Йога</S.CourceCardTitleP>
            </S.CourceCardTitle>
            <S.CourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.CourceCardLink>
          </S.CourceCard>
          <S.CourceCard>
            <S.CourceCardTitle>
              <S.CourceCardTitleP>Йога</S.CourceCardTitleP>
            </S.CourceCardTitle>
            <S.CourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.CourceCardLink>
          </S.CourceCard>
          <S.CourceCard>
            <S.CourceCardTitle>
              <S.CourceCardTitleP>Йога</S.CourceCardTitleP>
            </S.CourceCardTitle>
            <S.CourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.CourceCardLink>
          </S.CourceCard>
        </S.CourseCardBlock>
      </S.CardUser>
    </Container>
  );
};
const Button = styled(createButton)``;
