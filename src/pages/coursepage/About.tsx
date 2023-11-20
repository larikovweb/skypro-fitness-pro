import { TitleImage } from "../../assets/img/coursepage";
import * as S from "./styles";
import { FC } from "react";

const About: FC = () => {
  return (
    <S.Container>
      <S.TitleBlockImage src={TitleImage} />
      <S.TitleBlockH1>Йога</S.TitleBlockH1>

      <S.TitleH2>Подойдет для вас, если:</S.TitleH2>
      <S.NumberedList>
        <S.NumberedListItem>
          <S.Circle>
            <S.CircleNumber>1</S.CircleNumber>
          </S.Circle>
          <S.DescriptionText>Давно хотели попробовать йогу, но не решались начать.</S.DescriptionText>
        </S.NumberedListItem>

        <S.NumberedListItem>
          <S.Circle>
            <S.CircleNumber>2</S.CircleNumber>
          </S.Circle>
          <S.DescriptionText>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</S.DescriptionText>
        </S.NumberedListItem>

        <S.NumberedListItem>
          <S.Circle>
            <S.CircleNumber>3</S.CircleNumber>
          </S.Circle>
          <S.DescriptionText>Ищете активность, полезную для тела и души.</S.DescriptionText>
        </S.NumberedListItem>
      </S.NumberedList>

      <S.TitleH2>Направления:</S.TitleH2>
      <S.PracticeList>
        <S.PracticeListItem key="1">Йога для новичков</S.PracticeListItem>
        <S.PracticeListItem key="2">Классическая йога</S.PracticeListItem>
        <S.PracticeListItem key="3">Йогатерапия</S.PracticeListItem>
        <S.PracticeListItem key="4">Кундалини-йога</S.PracticeListItem>
        <S.PracticeListItem key="5">Хатха-йога</S.PracticeListItem>
        <S.PracticeListItem key="6">Аштанга-йога</S.PracticeListItem>
      </S.PracticeList>

      <S.BenefitText>Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.</S.BenefitText>

      
    </S.Container>
  );
};

export default About;
