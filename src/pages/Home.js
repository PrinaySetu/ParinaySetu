import rectangle from "../assets/img/rectangle-5.svg";
import Heartfirst from "../assets/img/Heart-1.png";
import Heartsecond from "../assets/img/Heart-2.png";
import iconcheck from "../assets/img/icon-check.png";
import logo from "../assets/img/group-1.png";
import phone from "../assets/img/vector-1.svg";
import clock from "../assets/img/vector-2.svg";
import puzzle from "../assets/img/vector.svg";
import coverpic from "../assets/img/group-2.png";
import instagram from "../assets/Buttons/Icon-3.png";
import youtube from "../assets/Buttons/Icon-2.png";
import linkedin from "../assets/Buttons/Icon-1.png";
import facebook from "../assets/Buttons/Icon.png";
import ProfileDropdown from "../components/core/Auth/ProfileDropDown";
import { useCallback } from "react";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, matchPath } from "react-router-dom";

const Home = () => {
	const onButtonContainerClick = useCallback(() => {
		// Add your code here
	}, []);

	const onPricingTextClick = useCallback(() => {
		// Add your code here
	}, []);

	const { token } = useSelector((state) => state.auth);
	const location = useLocation();

	const matchRoute = (route) => {
		return matchPath({ path: route }, location.pathname);
	};

	const onContactUsTextClick = () => {
		// Implement the functionality for contact us click
	};

	const getNavItemClass = (path) => {
		return matchRoute(path)
			? "shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-[15px] bg-white py-3.5 px-6 text-red"
			: "text-gray-600 hover:text-red";
	};

	const onSignInTextClick = useCallback(() => {
		// Add your code here
	}, []);

	return (
		<div className="w-full relative bg-white h-[3534px] overflow-hidden text-left text-5xl text-black font-body-text">
			<div
				className="absolute top-[274px] left-[calc(50%_-_431px)] w-[857px] flex flex-col items-start 
      justify-start p-2.5 box-border text-center text-45xl"
			>
				<div className="w-[837px] flex flex-col items-center justify-start gap-[24px]">
					<b className="self-stretch relative tracking-[-0.02em]">
						<span>{`Choose `}</span>
						<span className="text-red">Right</span>
						<span>!</span>
					</b>
					<div className="self-stretch relative text-5xl leading-[150%] text-gray">
						Find your perfect match here!
					</div>
					<div
						className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-khaki-200 flex flex-row items-center justify-center py-3.5 px-6 cursor-pointer text-left text-base"
						onClick={onButtonContainerClick}
					>
						<div className="relative leading-[150%] font-medium">
							<Link
								to="/signup"
								style={{
									color: "inherit",
									textDecoration: "none",
								}}
							>
								Begin
							</Link>
						</div>
					</div>
				</div>
			</div>
			<img
				className="absolute top-[621px] left-[calc(50%_-_640px)] rounded-lg w-[1280px] h-[640px] overflow-hidden object-cover"
				alt=""
				src={coverpic}
			/>
			<div className="absolute top-[1381px] left-[calc(50%_-_640px)] w-[1280px] flex flex-col items-start justify-start text-center text-21xl">
				<div className="self-stretch relative leading-[110%] font-semibold">
					<span>{`Get high level `}</span>
					<span className="text-red">{`Support `}</span>
					<span>and</span>
					<span className="text-red"> Assistance</span>
					<span> on your tips</span>
				</div>
			</div>
			<div className="absolute w-[calc(100%_-_466px)] top-[1501px] right-[233px] left-[233px] flex flex-row items-start justify-start gap-[32px]">
				<div className="self-stretch flex-1 shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-center p-8 border-[1px] border-solid border-whitesmoke">
					<div className="w-[409px] h-[126px] flex flex-row items-center justify-center gap-[16px]">
						<img
							className="w-[45px] relative h-[45px]"
							alt=""
							src={puzzle}
						/>
						<div className="flex flex-col items-start justify-start">
							<div className="relative leading-[150%] font-medium">
								<span>{`Tailored `}</span>
								<span className="text-red">Matchmaking</span>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch flex-1 shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-center p-8 text-red border-[1px] border-solid border-whitesmoke">
					<div className="w-[409px] h-[126px] flex flex-row items-center justify-center gap-[16px]">
						<img
							className="w-[45px] relative h-[45px]"
							alt=""
							src={iconcheck}
						/>
						<div className="flex flex-col items-start justify-start">
							<div className="relative leading-[150%] font-medium">
								<span>Verified</span>
								<span className="text-black"> Profiles</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute w-[calc(100%_-_466px)] top-[1726px] right-[233px] left-[233px] flex flex-row items-start justify-start gap-[32px] text-red">
				<div className="self-stretch flex-1 shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-center p-8 border-[1px] border-solid border-whitesmoke">
					<div className="w-[409px] h-[126px] flex flex-row items-center justify-center gap-[16px]">
						<img
							className="w-[45px] relative h-[45px]"
							alt=""
							src={phone}
						/>
						<div className="flex flex-col items-start justify-start">
							<div className="relative leading-[150%] font-medium">
								<span>Transparent</span>
								<span className="text-black">
									{" "}
									Communication
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch flex-1 shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-center p-8 text-black border-[1px] border-solid border-whitesmoke">
					<div className="w-[409px] h-[126px] flex flex-row items-center justify-center gap-[16px]">
						<img
							className="w-[45px] relative h-[45px]"
							alt=""
							src={clock}
						/>
						<div className="flex flex-col items-start justify-start">
							<div className="relative leading-[150%] font-medium">
								<span>{`Efficient `}</span>
								<span className="text-red">Matchmaking</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				className="absolute right-[-370.7px] bottom-[510.49px] w-[1003.7px] h-[1096.6px] object-contain"
				alt=""
				src={Heartfirst}
			/>
			<img
				className="absolute bottom-[-420.1px] left-[-388px] w-[1110.5px] h-[1129.1px] object-contain"
				alt=""
				src={Heartsecond}
			/>
			<div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(181.78deg,_rgba(255,_226,_122,_0.96),_#f9f9f9)] h-[264px] overflow-hidden text-base text-darkslategray">
				<div className="absolute top-[48px] right-[517px] w-[187px] flex flex-col items-end justify-center gap-[24px]">
					<div className="self-stretch relative leading-[150%] font-medium text-black">
						Topic
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
				</div>
				<div className="absolute top-[48px] right-[298px] w-[187px] flex flex-col items-end justify-center gap-[24px]">
					<div className="self-stretch relative leading-[150%] font-medium text-black">
						Topic
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
				</div>
				<div className="absolute top-[48px] right-[80px] w-[187px] flex flex-col items-end justify-center gap-[24px]">
					<div className="self-stretch relative leading-[150%] font-medium text-black">
						Topic
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
					<div className="self-stretch relative leading-[150%] font-medium">
						Page
					</div>
				</div>
				<div className="absolute top-[52px] left-[80px] text-5xl leading-[150%] text-black">
					<span>Parinay</span>
					<span className="text-red"> Setu</span>
				</div>
				<div className="absolute top-[176px] left-[80px] flex flex-row items-start justify-start gap-[8px]">
					<img
						className="w-10 relative rounded h-10 object-cover"
						alt=""
						src={instagram}
					/>
					<img
						className="w-10 relative rounded h-10 object-cover"
						alt=""
						src={facebook}
					/>
					<img
						className="w-10 relative rounded h-10 object-cover"
						alt=""
						src={youtube}
					/>
					<img
						className="w-10 relative rounded h-10 object-cover"
						alt=""
						src={linkedin}
					/>
				</div>
				<div className="absolute top-[0.5px] left-[79.5px] box-border w-[1281px] h-px border-t-[1px] border-solid border-gainsboro" />
			</div>
			<div className="absolute top-[2036px] left-[calc(50%_-_585px)] w-[1176px] h-[1258px] text-37xl text-red font-norican">
				<div className="absolute top-[0px] left-[calc(50%_-_242.17px)] flex flex-row items-center justify-start gap-[45px]">
					<img
						className="w-[132.3px] relative h-[141.1px] object-cover"
						alt=""
						src={logo}
					/>
					<div className="w-[300px] relative h-[102.3px]">
						<div className="absolute top-[9.1px] left-[calc(50%_+_58px)] inline-block w-[92px] h-[89.8px]">
							Setu
						</div>
						<div className="absolute top-[0px] left-[calc(50%_-_150px)] text-45xl text-black inline-block w-[187px] h-[102.3px]">
							Parinay
						</div>
					</div>
				</div>
				<div className="absolute w-full top-[196px] left-[0px] text-[18px] leading-[54px] capitalize font-body-text text-black text-justify inline-block h-[1062px]">
					<p className="m-0">
						Lorem ipsum dolor sit amet consectetur. Tellus donec
						egestas et a mi fringilla lorem pharetra. Ipsum ac a
						quam ultrices senectus fermentum pulvinar tortor
						pretium. Tellus pharetra id dui euismod sed in lacinia
						quis. Morbi consequat nunc suspendisse leo odio nisi
						morbi tellus enim. Nisi massa ante egestas egestas enim
						venenatis facilisi nisl purus. Metus ultricies est
						viverra luctus eget malesuada viverra. Mollis sit nibh
						hac risus laoreet. Sit nibh quis nibh viverra eu ante
						at.
					</p>
					<p className="m-0">&nbsp;</p>
					<p className="m-0">
						Morbi praesent massa ultrices tristique. Egestas et eu
						sed sapien quis morbi neque quis imperdiet. Tellus eget
						blandit arcu feugiat at viverra malesuada lacus amet.
						Elementum diam pellentesque morbi sem ornare
						pellentesque eu. Diam arcu eu iaculis risus sodales
						eget. Dictumst elementum commodo cursus maecenas sed leo
						elit erat. Purus consequat et leo pharetra dis. Cursus
						nibh vitae nec porta vitae elementum senectus mattis.
						Urna egestas quis nisl dignissim mi.
					</p>
					<p className="m-0">&nbsp;</p>
					<p className="m-0">
						{" "}
						Non leo posuere a consequat diam sagittis pellentesque
						lorem in. Faucibus id iaculis vitae blandit vitae
						placerat. Nec sem nec proin pellentesque cras maecenas
						placerat. Volutpat pellentesque interdum commodo
						senectus ipsum nulla pulvinar lacus. Auctor vitae varius
						nibh ut nisi quis quis. Blandit egestas turpis et
						adipiscing id id ac adipiscing.
					</p>
					<p className="m-0">
						Netus neque vel nisl sodales. Eu et lectus aliquet sed
						id velit vel.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
