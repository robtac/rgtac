import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import Link from "next/link";
import "../styles.scss";

export default class Navi extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar
					color="primary"
					dark
					expand="md"
					className="d-md-flex justify-content-center"
				>
					<div className="d-md-flex">
						<NavbarBrand href="/">Robbie Tacescu</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav navbar>
								<NavItem>
									<Link href="/">
										<NavLink className="click">Home</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href="/profile">
										<NavLink className="click">Profile</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href="/ai">
										<NavLink className="click">AI Projects</NavLink>
									</Link>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Projects
									</DropdownToggle>
									<DropdownMenu right className="bg-info">
										<Link href="/safecopter">
											<DropdownItem className="text-white blue-hover">
												Safecopter
											</DropdownItem>
										</Link>
										<DropdownItem divider />
										<Link href="/frc">
											<DropdownItem className="text-white blue-hover">
												FRC Robotics
											</DropdownItem>
										</Link>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Accomplishments
									</DropdownToggle>
									<DropdownMenu right className="bg-info text-white">
										<Link href="/awards">
											<DropdownItem className="text-white blue-hover">
												Awards
											</DropdownItem>
										</Link>
										<DropdownItem divider />
										<Link href="/certifications">
											<DropdownItem className="text-white blue-hover">
												Certifications
											</DropdownItem>
										</Link>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<Link href="/contact">
										<NavLink className="click">Contact Me</NavLink>
									</Link>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
