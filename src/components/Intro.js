import { Component } from 'react';
import '../styles/Intro.css';
class Intro extends Component {
	constructor(props) {
		super(props);
		this.editBtnClicked = this.editBtnClicked.bind(this);
		this.editBtnClicked = this.editBtnClicked.bind(this);
		this.applyBtnClicked = this.applyBtnClicked.bind(this);
		this.btnHover = this.btnHover.bind(this);
		this.btnMouseLeave = this.btnMouseLeave.bind(this);
		this.nameOnChange = this.nameOnChange.bind(this);
		this.positionOnChange = this.positionOnChange.bind(this);
		this.introOnChange = this.introOnChange.bind(this);
		this.state = {
			info: {
				name: 'Jason Tran',
				position: 'Full-stack Web Developer',
				intro: 'Excepteur ea proident proident veniam quis ipsum id id eu aliqua elit esse nisi amet. Sint laboris consectetur est non nostrud deserunt excepteur eu labore ipsum. Incididunt ex ad amet adipisicing ea amet ex nostrud exercitation esse sit do. Ipsum voluptate anim velit sit nisi mollit cillum fugiat enim fugiat nostrud aliqua sunt.',
			},
			edit: false,
		};
	}
	btnHover() {
		if (this.state.edit) {
			const applyBtn = document.querySelector('#intro-apply-btn');
			applyBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#intro-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	btnMouseLeave() {
		if (!this.state.edit) {
			const editBtn = document.querySelector('#intro-edit-btn');
			editBtn.style.display = 'none';
		}
	}
	editBtnClicked(e) {
		this.setState({
			edit: true,
		});
	}
	applyBtnClicked(e) {
		this.setState({
			edit: false,
		});
	}
	nameOnChange(e) {
		const nameInput = e.target.value;
		this.setState({
			info: {
				name: nameInput,
				position: this.state.info.position,
				intro: this.state.info.intro,
			},
		});
	}
	positionOnChange(e) {
		const positionInput = e.target.value;
		this.setState({
			info: {
				name: this.state.info.name,
				position: positionInput,
				intro: this.state.info.intro,
			},
		});
	}
	introOnChange(e) {
		const introInput = e.target.value;
		this.setState({
			info: {
				name: this.state.info.name,
				position: this.state.info.position,
				intro: introInput,
			},
		});
	}
	render() {
		const defaultView = (
			<div>
				<button
					className='edit btn'
					id='intro-edit-btn'
					onClick={this.editBtnClicked}
				>
					Edit
				</button>
				<p className='name'>{this.state.info.name}</p>
				<p className='position'>{this.state.info.position}</p>
				<p className='brief-intro'>{this.state.info.intro}</p>
			</div>
		);
		const editView = (
			<div>
				<button
					className='apply btn'
					id='intro-apply-btn'
					onClick={this.applyBtnClicked}
				>
					Apply
				</button>
				<p className='name'>
					<input
						type='text'
						value={this.state.info.name}
						onChange={this.nameOnChange}
					/>
				</p>
				<p className='position'>
					<input
						type='text'
						value={this.state.info.position}
						onChange={this.positionOnChange}
					/>
				</p>
				<p className='brief-intro'>
					<textarea
						onChange={this.introOnChange}
						value={this.state.info.intro}
						cols='80'
						rows='7'
					/>
				</p>
			</div>
		);
		return (
			<div
				className='intro top'
				onMouseEnter={this.btnHover}
				onMouseLeave={this.btnMouseLeave}
			>
				{!this.state.edit ? defaultView : editView}
			</div>
		);
	}
}

export default Intro;
