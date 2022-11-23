import { readStatusKeys } from "../../filterKeyObjs";
import FilterSubOptionBtn from "./FilterSubOptionBtn";

const FilterByReadState = (props) => {
	return (
		<>
			{props.readStatusFilter !== readStatusKeys.all ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateReadStatusFilter}
					clickEventDataProp={readStatusKeys.all}
					textProp={readStatusKeys.all}
					filterNumberProp={false}
				/>
			) : null}
			{props.readStatusFilter !== readStatusKeys.unread ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateReadStatusFilter}
					clickEventDataProp={readStatusKeys.unread}
					textProp={readStatusKeys.unread}
					filterNumberProp={false}
				/>
			) : null}
			{props.readStatusFilter !== readStatusKeys.reading &&
			props.readStatusFilter === readStatusKeys.read ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateReadStatusFilter}
					clickEventDataProp={readStatusKeys.reading}
					onBlurProp={props.toggleReadStatusDropdown}
					textProp={readStatusKeys.reading}
					filterNumberProp={false}
				/>
			) : null}
			{props.readStatusFilter !== readStatusKeys.reading &&
			props.readStatusFilter !== readStatusKeys.read ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateReadStatusFilter}
					clickEventDataProp={readStatusKeys.reading}
					textProp={readStatusKeys.reading}
					filterNumberProp={false}
				/>
			) : null}
			{props.readStatusFilter !== readStatusKeys.read ? (
				<FilterSubOptionBtn
					clickEventProp={props.updateReadStatusFilter}
					clickEventDataProp={readStatusKeys.read}
					onBlurProp={props.toggleReadStatusDropdown}
					textProp={readStatusKeys.read}
					filterNumberProp={false}
				/>
			) : null}
		</>
	);
};

export default FilterByReadState;
