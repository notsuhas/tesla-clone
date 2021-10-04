import React from "react";
import styled from "styled-components";
import Fade from "@stahl.luke/react-reveal";

function Section({
	title,
	backgroundImg,
	description,
	leftBtnText,
	rightBtnText,
}) {
	return (
		<Wrap bgImg={backgroundImg}>
			<div>
				<Fade bottom>
					<ItemText>
						<h1>{title}</h1>
						<p>{description}</p>
					</ItemText>
				</Fade>
			</div>
			<Buttons>
				<div>
					<Fade bottom>
						<ButtonGroup>
							<LeftButton>{leftBtnText}</LeftButton>
							{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
						</ButtonGroup>
					</Fade>
				</div>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 786px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	margin-top: 20px;
	margin-bottom: 20px;
	height: 40px;
	overflow-x: hidden;
	animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

