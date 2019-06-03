import Navi from "../Navi";
import "../../animate.scss";
import "./styles.scss";

export default function Layout(props) {
	return (
		<div>
			<Navi />
			{props.children}
		</div>
	);
}
