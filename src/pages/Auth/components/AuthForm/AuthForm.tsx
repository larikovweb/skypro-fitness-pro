import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import { ButtonSize, ButtonTheme } from '@/components/UiButton/enums';
import UiImage from '@/components/UiImage';
import { useAuth } from '@/api/hooks';
import { Credentials } from '@/api/types';
import formFields from './constants';
import { AuthFields } from './types';
import { ButtonTitle, FieldsList } from './enums';
import * as S from './AuthForm.style';

const FormInput: React.FC<any> = ({ register, inputError, ...props }) => (
  <Input {...props} {...register(props.name)} />
);

const UiAuthForm = () => {
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false);

  const { auth, isLoading } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthFields>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<Credentials> = ({ email, password }) => {
    auth({ email, password, isSignUp });
  };

  return (
    <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
      <UiImage name="logoBlack" width="220px" height="35px" />

      <S.GroupWrapper>
        <FormInput
          register={register}
          inputError={errors[FieldsList.Email]?.message}
          {...formFields[FieldsList.Email]}
        />
        <FormInput
          register={register}
          inputError={errors[FieldsList.Password]?.message}
          {...formFields[FieldsList.Password]}
        />
        {isSignUp ? (
          <FormInput
            register={register}
            inputError={errors[FieldsList.PasswordConfirm]?.message}
            {...formFields[FieldsList.PasswordConfirm]}
          />
        ) : null}
      </S.GroupWrapper>

      <S.GroupWrapper>
        {!isSignUp ? (
          <Button
            type="submit"
            size={ButtonSize.L}
            title={isLoading ? ButtonTitle.LoginLoader : ButtonTitle.LoginTitle}
          />
        ) : null}
        <Button
          type={isSignUp ? 'submit' : 'button'}
          size={ButtonSize.L}
          title={isSignUp && isLoading ? ButtonTitle.SignUpLoader : ButtonTitle.SignUpTitle}
          theme={isSignUp ? ButtonTheme.PurpleBright : ButtonTheme.White}
          onClick={() => setIsSignUp(true)}
          outlined
        />
      </S.GroupWrapper>
    </S.AuthForm>
  );
};

export default UiAuthForm;
