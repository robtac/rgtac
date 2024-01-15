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
					<div className="d-md-flex mx-auto">
						<NavbarBrand href="/">Robert Tacescu</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink href="/" className="click">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/profile" className="click">Profile</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Projects
									</DropdownToggle>
									<DropdownMenu end className="bg-info">
										<Link href="/safecopter">
											<DropdownItem className="text-white blue-hover">
												Safecopter
											</DropdownItem>
										</Link>
										<DropdownItem divider />
										<Link href="/hackumass2019">
											<DropdownItem className="text-white blue-hover">
												HackUMass 2019
											</DropdownItem>
										</Link>
										<DropdownItem divider />
										<Link href="/ai">
											<DropdownItem className="text-white blue-hover">
												Bear Image Classifier
											</DropdownItem>
										</Link>
										<DropdownItem divider />
										<Link href="/motion-detect">
											<DropdownItem className="text-white blue-hover">
												Python Motion Detection
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
									<DropdownMenu end className="bg-info text-white">
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
								{/* <NavItem>
									<NavLink href="/contact" className="click">Contact Me</NavLink>
								</NavItem> */}
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
