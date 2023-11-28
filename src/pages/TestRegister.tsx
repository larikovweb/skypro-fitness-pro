import { FC } from 'react';
import { Input } from '../components/form/Input';
import { Button } from '../components/form/Button';
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
  User,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { InputField } from '../components/form/InputField';
import { useNavigate } from 'react-router-dom';

type TSignUp = {
	email: string;
	password: string;
	repeat: string;
};

const TestRegister: FC = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<TSignUp>();

	const  onSubmit =   (data: TSignUp) => {
 
		const auth = getAuth();
 createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(() => {
				navigate('/login');
				sendEmailVerification(auth.currentUser as User)
					.then(() => {
						console.log('verification done');
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						alert(`${errorCode}: ${errorMessage}`);
					});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(`${errorCode}: ${errorMessage}`);
			});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				maxWidth: '17rem',
				margin: '0 auto',
			}}
			action="">
			<h1>Register</h1>
			<InputField error={errors.email?.message}>
				<Input
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Некорректный адрес электронной почты',
						},
					})}
					placeholder="Email"
				/>
			</InputField>
			<InputField error={errors.password?.message}>
				<Input
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters',
						},
						maxLength: {
							value: 20,
							message: 'Password must be less than 20 characters',
						},
						pattern: {
							value: /(?=.*[0-9])/,
							message: 'Password must contain a number',
						},
					})}
					placeholder="Password"
				/>
			</InputField>
			<InputField error={errors.repeat?.message}>
				<Input
					{...register('repeat', {
						validate: (value) => value === getValues('password') || 'Passwords should match',
						required: 'Repeat password is required',
					})}
					placeholder="Repeat password"
				/>
			</InputField>
			<Button type="submit" $primary>
				Submit
			</Button>
		</form>
	);
};

export default TestRegister;
