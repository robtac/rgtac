import React from "react";
import Router from 'next/router';
import Layout from "../components/layout";
import { sendContactMail } from "../components/mail-api";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Modal,
	ModalBody,
	ModalFooter
} from "reactstrap";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			succModal: false,
			failModal: false,
			name: "",
			email: "",
			body: "",
			validate: {
				emailState: ""
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.toggleSuccModal = this.toggleSuccModal.bind(this);
		this.toggleFailModal = this.toggleFailModal.bind(this);
	}

	toggleSuccModal() {
		const modal = this.state.succModal;
		this.setState({ succModal: !modal });
	}

	toggleFailModal() {
		const modal = this.state.failModal;
		this.setState({ failModal: !modal });
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

	async submitForm(e) {
		e.preventDefault();

		const recipientMail = "contact@rgtac.com"
		const { name, email, body } = this.state

		const res = await sendContactMail(recipientMail, name, email, body)
		if (res.status < 300) {
			this.setState({
				name: "",
				email: "",
				body: "",
				succModal: true
			})
		} else {
			this.toggleFailModal();
		}
	}

	render() {
		const { name, email, message } = this.state;
		return (
			<Layout>
				<Modal isOpen={this.state.succModal} toggle={this.toggleModal}>
					<ModalBody>Thank you for the message. I will be in contact shortly.</ModalBody>
					<ModalFooter><Button color="secondary" onClick={Router.reload}>Ok</Button></ModalFooter>
				</Modal>
				<Modal isOpen={this.state.failModal} toggle={this.toggleFailModal}>
					<ModalBody>An error has occurred. Please try again.</ModalBody>
					<ModalFooter><Button color="secondary" onClick={this.toggleFailModal}>Ok</Button></ModalFooter>
				</Modal>
				<section className="text-center">
					<div className="container">
						<h1>Contact Me</h1>
					</div>
					<div className="container">
						<div className="text-left">
							<Form>
								<FormGroup>
									<Label for="name">Name</Label>
									<Input type="text" name="name" id="name" value={name} onChange={e => this.handleChange(e)} />
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
									<Input type="textarea" name="body" id="body" value={message} onChange={e => this.handleChange(e)} />
								</FormGroup>
								<Button onClick={e => this.submitForm(e)}>Submit</Button>
							</Form>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
