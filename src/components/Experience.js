import { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.editBtnClicked = this.editBtnClicked.bind(this);
		this.applyBtnClicked = this.applyBtnClicked.bind(this);
		this.addBtnClicked = this.addBtnClicked.bind(this);
		this.deleteBtnClicked = this.deleteBtnClicked.bind(this);
		this.btnHover = this.btnHover.bind(this);
		this.btnMouseLeave = this.btnMouseLeave.bind(this);
		this.yearOnChange = this.yearOnChange.bind(this);
		this.companyOnChange = this.companyOnChange.bind(this);
		this.positionOnChange = this.positionOnChange.bind(this);
		this.descOnChange = this.descOnChange.bind(this);
		this.state = {
			experienceItem: {
				year: '',
				school: '',
				major: '',
				GPA: '',
			},
			experienceArray: [
				{
					year: '2019-2022',
					company: 'Evil Corp',
					position: 'Full-stack eveloper',
					desc: 'Eiusmod irure est labore occaecat cupidatat ea et. Officia elit eiusmod proident laborum sunt adipisicing. Aliquip laboris sint ut commodo Lorem dolore nisi. Adipisicing dolor et amet velit commodo enim laboris quis nisi id sunt aute dolor. Excepteur ea qui elit aliqua enim commodo anim nostrud do',
				},
				{
					year: '2014-2022',
					company: 'AC&M Company',
					position: 'Front-end devoloper',
					desc: 'Eiusmod irure est labore occaecat cupidatat ea et. Officia elit eiusmod proident laborum sunt adipisicing. Excepteur ea qui elit aliqua enim commodo anim nostrud do',
				},
			],
			edit: false,
		};
	}
	btnHover() {
		if (this.state.edit) {
			const applyBtn = document.querySelector('#experience-apply-btn');
			applyBtn.style.display = 'block';
			const addBtn = document.querySelector('#experience-add-btn');
			addBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#experience-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	btnMouseLeave() {
		if (!this.state.edit) {
			const editBtn = document.querySelector('#experience-edit-btn');
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

	addBtnClicked(e) {
		let experienceArrClone = [...this.state.experienceArray];
		const blankexperienceItem = {
			year: '',
			company: '',
			position: '',
			desc: '',
		};
		experienceArrClone.push(blankexperienceItem);
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	yearOnChange(e) {
		let experienceArrClone = [...this.state.experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].year = e.target.value;
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	companyOnChange(e) {
		let experienceArrClone = [...this.state.experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].company = e.target.value;
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	descOnChange(e) {
		let experienceArrClone = [...this.state.experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].desc = e.target.value;
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	positionOnChange(e) {
		let experienceArrClone = [...this.state.experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].position = e.target.value;
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	deleteBtnClicked(e) {
		const index = e.target.parentElement.getAttribute('data-index');
		console.log(index);
		let experienceArrClone = [...this.state.experienceArray];
		experienceArrClone.splice(index, 1);
		this.setState({
			experienceArray: experienceArrClone,
		});
	}
	render() {
		const defaultView = (
			<div>
				<button
					className='edit btn'
					id='experience-edit-btn'
					onClick={this.editBtnClicked}
				>
					Edit
				</button>
				<div className='title'>☕ Experience</div>
				<div className='container'></div>
				{this.state.experienceArray.map((item, index) => {
					return (
						<div className='experience-item' key={index}>
							<div className='date-of-work'>{item.year}</div>
							<div className='company'>{item.company}</div>
							<div className='role'>{item.position}</div>
							<div className='desc'>{item.desc}</div>
						</div>
					);
				})}
			</div>
		);
		const editView = (
			<div>
				<button
					className='apply btn'
					id='experience-apply-btn'
					onClick={this.applyBtnClicked}
				>
					Apply
				</button>
				<div className='title'>☕ Experience</div>
				<div className='container'></div>
				{this.state.experienceArray.map((item, index) => {
					return (
						<div
							className='experience-item'
							data-index={index}
							key={index}
						>
							<div className='date-of-work'>
								<input
									type='text'
									value={item.year}
									onChange={this.yearOnChange}
								/>
							</div>
							<div className='company'>
								<input
									type='text'
									value={item.company}
									onChange={this.companyOnChange}
								/>
							</div>
							<div className='role'>
								<input
									type='text'
									value={item.position}
									onChange={this.positionOnChange}
								/>
							</div>
							<div className='desc'>
								<textarea
									value={item.desc}
									cols='80'
									rows='7'
									onChange={this.descOnChange}
								/>
							</div>
							<button
								className='delete btn'
								id='experience-delete-btn'
								onClick={this.deleteBtnClicked}
							>
								x
							</button>
						</div>
					);
				})}
				<button
					className='add btn'
					id='experience-add-btn'
					onClick={this.addBtnClicked}
				>
					Add +
				</button>
			</div>
		);
		return (
			<div
				className='experience bot'
				onMouseEnter={this.btnHover}
				onMouseLeave={this.btnMouseLeave}
			>
				{!this.state.edit ? defaultView : editView}
			</div>
		);
	}
}

export default Experience;
