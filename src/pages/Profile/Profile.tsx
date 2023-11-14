import { FC } from "react";
import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { createButton } from "../../components/Buttons/Button";
import * as S from "../Profile/S.profile";

export const ProfilePage: FC = () => {
  const user = "user";
  return (
    <Container>
      <S.profileCardUser>
        <S.profileInfo>
          <S.profileTitle>Мой профиль</S.profileTitle>
          <S.profileP>Логин: {user}</S.profileP>
          <S.profileP>Пароль: 4fkhdj880d</S.profileP>

          <S.profileEdit>
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
          </S.profileEdit>
        </S.profileInfo>
        <S.profileTitle>Мои курсы</S.profileTitle>

        <S.profileCourseCardBlock>
          <S.profileCourceCard>
            <S.profileCourceCardTitle>
              <S.profileCourceCardTitleP>Йога</S.profileCourceCardTitleP>
            </S.profileCourceCardTitle>
            <S.profileCourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.profileCourceCardLink>
          </S.profileCourceCard>
          <S.profileCourceCard>
            <S.profileCourceCardTitle>
              <S.profileCourceCardTitleP>Йога</S.profileCourceCardTitleP>
            </S.profileCourceCardTitle>
            <S.profileCourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.profileCourceCardLink>
          </S.profileCourceCard>
          <S.profileCourceCard>
            <S.profileCourceCardTitle>
              <S.profileCourceCardTitleP>Йога</S.profileCourceCardTitleP>
            </S.profileCourceCardTitle>
            <S.profileCourceCardLink onClick={() => alert("no Link")}>
              Перейти
            </S.profileCourceCardLink>
          </S.profileCourceCard>
        </S.profileCourseCardBlock>
      </S.profileCardUser>
    </Container>
  );
};
const Button = styled(createButton)``;
