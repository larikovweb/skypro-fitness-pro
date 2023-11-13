import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import StrelaPic from '../../assets/img/svg/Rectangle 3765.svg';
import ProfilePic from '../../assets/img/svg/Ellipse 376.svg';

export const Header: FC = () => {
	//временно, для изменения header
	const [page, setPage] = useState<string>('/');
	const handleSetPage: React.MouseEventHandler<HTMLAnchorElement> = (
		event
	) => {
		if (!(event.target instanceof HTMLElement)) {
			return;
		} else {
			const target = event.target.innerText;
			console.log(target);
			if (target === 'Profile') {
				setPage('profile');
			} else if (target === 'About') {
				setPage('about');
			} else if (target === 'Войти') {
				setPage('login');
			} else {
				setPage('/');
			}
		}
	};
	//

	return (
		<Wrapper
			style={{
				background:
					page === '/' || page === 'login'
						? 'rgb(39,26,88)'
						: 'rgb(250, 250, 250)',
			}}
		>
			<Container>
				<Wrapper
					style={{
						background:
							page === '/' || page === 'login'
								? 'rgb(39,26,88)'
								: 'rgb(250, 250, 250)',
					}}
				>
					{page === 'profile' ? (
						<>
							<Img
								src="src/assets/img/png/logo_dark.png"
								alt="logo_Sky-fitness-Pro"
							/>
							<ProfileDiv>
								<img src={ProfilePic} alt="Profile icon" />
								<p>Сергей</p>
								<button
									style={{ background: 'transparent' }}
									onClick={() => alert('Привет!')}
								>
									<img src={StrelaPic}></img>
								</button>
							</ProfileDiv>
						</>
					) : page === 'about' ? (
						<>
							<Img
								src="src/assets/img/png/logo_dark.png"
								alt="logo_Sky-fitness-Pro"
							/>
							<Link to="/login" onClick={handleSetPage}>
								<Button>Войти</Button>
							</Link>
						</>
					) : page === 'login' ? (
						<>
							<Img
								src="src/assets/img/png/logo_light.png"
								alt="logo_Sky-fitness-Pro"
							/>
						</>
					) : (
						<>
							<Img
								src="src/assets/img/png/logo_light.png"
								alt="logo_Sky-fitness-Pro"
							/>
							<Link to="/login" onClick={handleSetPage}>
								<Button>Войти</Button>
							</Link>
						</>
					)}
				</Wrapper>
			</Container>
			{/* Временная навигация. Меняет оформление header*/}
			{/* Далее либо через props с router. Либо с Redux. Либо useContext*/}
			<Link to="/" onClick={handleSetPage}>
				Main
			</Link>
			<Link to="/about" onClick={handleSetPage}>
				About
			</Link>
			<Link to="/profile" onClick={handleSetPage}>
				Profile
			</Link>
			<Link to="/404" onClick={handleSetPage}>
				404
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	background: #271a58;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Img = styled.img`
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
