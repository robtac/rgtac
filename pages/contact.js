import React from "react";
import Layout from "../components/Layout/layout";
import "../styles.scss";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback
} from "reactstrap";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			validate: {
				emailState: ""
			}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	validateEmail(e) {
		const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { validate } = this.state;
		if (emailRex.test(e.target.value)) {
			validate.emailState = "has-success";
		} else {
			validate.emailState = "has-danger";
		}
		this.setState({ validate });
	}

	handleChange = async event => {
		const { target } = event;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { name } = target;
		await this.setState({
			[name]: value
		});
	};

	submitForm(e) {
		e.preventDefault();
		console.log(`Email: ${this.state.email}`);
	}

	render() {
		const { name, email, message } = this.state;
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Contact Me</h1>
					</div>
					<div className="container">
						<div className="text-left">
							<Form>
								<FormGroup>
									<Label for="name">Name</Label>
									<Input type="text" name="name" id="name" value={name} />
								</FormGroup>
								<FormGroup>
									<Label for="email">Email</Label>
									<Input
										type="email"
										name="email"
										id="email"
										value={email}
										valid={this.state.validate.emailState === "has-success"}
										invalid={this.state.validate.emailState === "has-danger"}
										onChange={e => {
											this.validateEmail(e);
											this.handleChange(e);
										}}
									/>
									<FormFeedback>Please input a correct email.</FormFeedback>
								</FormGroup>
								<FormGroup>
									<Label for="body">Message</Label>
									<Input type="textarea" name="body" id="body" value={message} />
								</FormGroup>
								<Button>Submit</Button>
							</Form>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
