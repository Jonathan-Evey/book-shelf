import { ratingKeys } from "../../filterKeyObjs";
import FilterSubOptionBtn from "./FilterSubOptionBtn";

const FilterByRating = (props) => {
	return (
		<>
			{props.currentRatingSelected !== ratingKeys.all ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.all}
					filterNumberProp={ratingKeys.all}
					textProp={ratingKeys.all}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.zeroToOne ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.zeroToOne}
					filterNumberProp={"0"}
					textProp={ratingKeys.zeroToOne}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.oneToTwo ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.oneToTwo}
					filterNumberProp={"1"}
					textProp={ratingKeys.oneToTwo}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.twoToThree ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.twoToThree}
					filterNumberProp={"2"}
					textProp={ratingKeys.twoToThree}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.threeToFour ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.threeToFour}
					filterNumberProp={"3"}
					textProp={ratingKeys.threeToFour}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected === ratingKeys.five ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.fourToFive}
					filterNumberProp={"4"}
					textProp={ratingKeys.fourToFive}
					onBlurProp={props.closeRatingFilterDropdown}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.fourToFive &&
			props.currentRatingSelected !== ratingKeys.five ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.fourToFive}
					filterNumberProp={"4"}
					textProp={ratingKeys.fourToFive}
				/>
			) : null}
			{props.currentRatingSelected !== ratingKeys.five ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateRatingFilter}
					clickEventDataProp={ratingKeys.five}
					filterNumberProp={"5"}
					textProp={ratingKeys.five}
					onBlurProp={props.closeRatingFilterDropdown}
					classProps={"last-option"}
					liClassProps={"last-option"}
				/>
			) : null}
		</>
	);
};

export default FilterByRating;
