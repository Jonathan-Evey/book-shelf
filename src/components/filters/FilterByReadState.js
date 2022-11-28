import { readStatusKeys } from "../../filterKeyObjs";
import { CSSTransition } from "react-transition-group";
import FilterSubOptionBtn from "./FilterSubOptionBtn";

const FilterByReadState = (props) => {
	return (
		<>
			{props.readStatusFilter !== readStatusKeys.all ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 150, enter: 150, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.all}
						textProp={readStatusKeys.all}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-8"}
					/>
				</CSSTransition>
			) : null}
			{props.readStatusFilter !== readStatusKeys.unread &&
			props.readStatusFilter !== readStatusKeys.all ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 300, enter: 300, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.unread}
						textProp={readStatusKeys.unread}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-7"}
					/>
				</CSSTransition>
			) : null}
			{props.readStatusFilter !== readStatusKeys.unread &&
			props.readStatusFilter === readStatusKeys.all ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 150, enter: 150, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.unread}
						textProp={readStatusKeys.unread}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-8"}
					/>
				</CSSTransition>
			) : null}
			{props.readStatusFilter !== readStatusKeys.reading &&
			props.readStatusFilter === readStatusKeys.read ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 450, enter: 450, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.reading}
						onBlurProp={props.toggleReadStatusDropdown}
						textProp={readStatusKeys.reading}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-6"}
					/>
				</CSSTransition>
			) : null}
			{props.readStatusFilter !== readStatusKeys.reading &&
			props.readStatusFilter !== readStatusKeys.read ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 300, enter: 300, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.reading}
						textProp={readStatusKeys.reading}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-7"}
					/>
				</CSSTransition>
			) : null}
			{props.readStatusFilter !== readStatusKeys.read ? (
				<CSSTransition
					in={props.isReadStatusDropdownOpen}
					timeout={{ appear: 450, enter: 450, exit: 300 }}
					classNames="aside-menu-animation"
					appear
					unmountOnExit
				>
					<FilterSubOptionBtn
						clickEventProp={props.updateReadStatusFilter}
						clickEventDataProp={readStatusKeys.read}
						onBlurProp={props.toggleReadStatusDropdown}
						textProp={readStatusKeys.read}
						filterNumberProp={false}
						liClassProps={"box-shadow-light z-index-6"}
					/>
				</CSSTransition>
			) : null}
		</>
	);
};

export default FilterByReadState;
