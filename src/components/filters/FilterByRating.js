import { ratingKeys } from "../../filterKeyObjs";
import { CSSTransition } from "react-transition-group";
import FilterSubOptionBtn from "./FilterSubOptionBtn";

const FilterByRating = (props) => {
	return (
		<>
			{props.currentRatingSelected !== ratingKeys.all ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 50, enter: 50, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.all}
						filterNumberProp={ratingKeys.all}
						textProp={ratingKeys.all}
						liClassProps={"box-shadow-light z-index-4"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.zeroToOne &&
			props.currentRatingSelected === ratingKeys.all ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 50, enter: 50, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.zeroToOne}
						filterNumberProp={"0"}
						textProp={ratingKeys.zeroToOne}
						liClassProps={"box-shadow-light z-index-4"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.zeroToOne &&
			props.currentRatingSelected !== ratingKeys.all ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 100, enter: 100, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.zeroToOne}
						filterNumberProp={"0"}
						textProp={ratingKeys.zeroToOne}
						liClassProps={"box-shadow-light z-index-3"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.oneToTwo &&
			props.currentRatingSelected === ratingKeys.zeroToOne ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 100, enter: 100, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.oneToTwo}
						filterNumberProp={"1"}
						textProp={ratingKeys.oneToTwo}
						liClassProps={"box-shadow-light z-index-3"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.oneToTwo &&
			props.currentRatingSelected !== ratingKeys.zeroToOne ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 150, enter: 150, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.oneToTwo}
						filterNumberProp={"1"}
						textProp={ratingKeys.oneToTwo}
						liClassProps={"box-shadow-light z-index-2"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.twoToThree &&
			props.currentRatingSelected === ratingKeys.oneToTwo ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 150, enter: 150, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.twoToThree}
						filterNumberProp={"2"}
						textProp={ratingKeys.twoToThree}
						liClassProps={"box-shadow-light z-index-2"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.twoToThree &&
			props.currentRatingSelected !== ratingKeys.oneToTwo ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 200, enter: 200, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.twoToThree}
						filterNumberProp={"2"}
						textProp={ratingKeys.twoToThree}
						liClassProps={"box-shadow-light z-index-1"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.threeToFour &&
			props.currentRatingSelected === ratingKeys.twoToThree ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 200, enter: 200, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.threeToFour}
						filterNumberProp={"3"}
						textProp={ratingKeys.threeToFour}
						liClassProps={"box-shadow-light z-index-1"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.threeToFour &&
			props.currentRatingSelected !== ratingKeys.twoToThree ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 250, enter: 250, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.threeToFour}
						filterNumberProp={"3"}
						textProp={ratingKeys.threeToFour}
						liClassProps={"box-shadow-light z-index-0"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected === ratingKeys.threeToFour ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 250, enter: 250, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.fourToFive}
						filterNumberProp={"4"}
						textProp={ratingKeys.fourToFive}
						liClassProps={"box-shadow-light z-index-0"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected !== ratingKeys.five &&
			props.currentRatingSelected !== ratingKeys.threeToFour ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 300, enter: 300, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.fourToFive}
						filterNumberProp={"4"}
						textProp={ratingKeys.fourToFive}
						liClassProps={"box-shadow-light z-index--1"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected === ratingKeys.five ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 300, enter: 300, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.fourToFive}
						filterNumberProp={"4"}
						textProp={ratingKeys.fourToFive}
						onBlurProp={props.closeRatingFilterDropdown}
						liClassProps={"box-shadow-light z-index--1"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected === ratingKeys.fourToFive &&
			props.currentRatingSelected !== ratingKeys.five ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 300, enter: 300, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.five}
						filterNumberProp={"5"}
						textProp={ratingKeys.five}
						liClassProps={"box-shadow-light z-index--1"}
					/>
				</CSSTransition>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected !== ratingKeys.five ? (
				<CSSTransition
					in={props.isRatingFilterDropdownOpen}
					timeout={{ appear: 350, enter: 350, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateRatingFilter}
						clickEventDataProp={ratingKeys.five}
						filterNumberProp={"5"}
						textProp={ratingKeys.five}
						onBlurProp={props.closeRatingFilterDropdown}
						liClassProps={"box-shadow-light z-index--2"}
					/>
				</CSSTransition>
			) : null}
		</>
	);
};

export default FilterByRating;
