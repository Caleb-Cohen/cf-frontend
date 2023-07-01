import styled from "styled-components";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";

export const ResetButton = styled.button`
	background: url("/Restart.png") center no-repeat;
	background-size: 100%;
	width: 3%;
	border: none;
	height: 6vh;
	cursor: pointer;
`;

export const ResumeButton = styled(FaRegPlayCircle)`
	font-size: 2rem;
	color: #595959;
`;

export const PauseButton = styled(FaRegPauseCircle)`
	font-size: 2rem;
	color: #595959;
`;