import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Link, useLocation } from 'react-router-dom';
import { StrelaIco } from '../../icons/index';
import { ProfileIco } from '../../icons/index';
import { LogoIco } from '../../icons/index';

export const Header: FC = () => {
	const isAuth = true;
	const location = useLocation();
	return (
		<Wrapper
			style={{
				background:
					location.pathname === '/' || location.pathname === '/login'
						? 'rgb(39,26,88)'
						: 'rgb(250, 250, 250)',
			}}
		>
			<Container>
				<Wrapper
					style={{
						background:
							location.pathname === '/' || location.pathname === '/login'
								? 'rgb(39,26,88)'
								: 'rgb(250, 250, 250)',
					}}
				>
					{location.pathname === '/profile' ? (
						<>
							<Img>
								<LogoIco fillColor="black" />
							</Img>
							<ProfileDiv>
								<ProfileIco />
								<p>Сергей</p>
								<button
									style={{ background: 'transparent' }}
									onClick={() => alert('Привет!')}
								>
									<StrelaIco />
								</button>
							</ProfileDiv>
						</>
					) : location.pathname === '/about' ? (
						<>
							<Img>
								<LogoIco fillColor="black" />
							</Img>
						</>
					) : location.pathname === '/login' ? (
						<>
							<Img>
								<LogoIco fillColor="black" />
							</Img>
						</>
					) : (
						<>
							<Img>
								<LogoIco fillColor="white" />
							</Img>
						</>
					)}
					<>
						{!isAuth ? (
							<Link
								to="/login"
								onClick={() => alert('Вы авторизованы!')}
							>
								<Button>Войти</Button>
							</Link>
						) : null}
					</>
				</Wrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	background: #271a58;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Img = styled.div`
	margin-top: 1.5rem;
	margin-bottom: 1.2rem;
`;
const Button = styled.button`
	background: #140d40;
	color: whitesmoke;
	height: 1.5rem;
	width: 4.8rem;
	border-radius: 2.8rem;
	font-size: 1rem;
	margin-top: 1.5rem;

	line-height: 1.5rem;
	padding: 1.25px 1.25px 1.25px 1.25px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
`;
