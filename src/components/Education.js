import { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
	constructor(props) {
		super(props);
		this.editBtnClicked = this.editBtnClicked.bind(this);
		this.applyBtnClicked = this.applyBtnClicked.bind(this);
		this.addBtnClicked = this.addBtnClicked.bind(this);
		this.deleteBtnClicked = this.deleteBtnClicked.bind(this);
		this.btnHover = this.btnHover.bind(this);
		this.btnMouseLeave = this.btnMouseLeave.bind(this);
		this.yearOnChange = this.yearOnChange.bind(this);
		this.majorOnChange = this.majorOnChange.bind(this);
		this.schoolOnChange = this.schoolOnChange.bind(this);
		this.GPAOnChange = this.GPAOnChange.bind(this);
		this.state = {
			educationItem: {
				year: '2019-2022',
				school: 'University of Science',
				major: 'Information Technology',
				GPA: 8.5,
			},
			educationArray: [
				{
					year: '2019-2022',
					school: 'University of Science',
					major: 'Information Technology',
					GPA: 8.5,
				},
				{
					year: '2009-2014',
					school: 'Post and Telecommunication Issue of Technology',
					major: 'Business Administration',
					GPA: 7.35,
				},
			],
			edit: false,
		};
	}
	btnHover() {
		if (this.state.edit) {
			const applyBtn = document.querySelector('#education-apply-btn');
			applyBtn.style.display = 'block';
			const addBtn = document.querySelector('#education-add-btn');
			addBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#education-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	btnMouseLeave() {
		if (!this.state.edit) {
			const editBtn = document.querySelector('#education-edit-btn');
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
		let educationArrClone = [...this.state.educationArray];
		const blankEducationItem = {
			year: '',
			school: '',
			major: '',
			GPA: '',
		};
		educationArrClone.push(blankEducationItem);
		this.setState({
			educationArray: educationArrClone,
		});
	}
	deleteBtnClicked(e) {
		const index =
		e.target.parentElement.getAttribute('data-index');
		console.log(index);
		let educationArrClone = [...this.state.educationArray];
		educationArrClone.splice(index, 1);
		this.setState({
			educationArray: educationArrClone,
		});
	}
	yearOnChange(e) {
		let educationArrClone = [...this.state.educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].year = e.target.value;
		this.setState({
			educationArray: educationArrClone,
		});
	}
	GPAOnChange(e) {
		let educationArrClone = [...this.state.educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].GPA = e.target.value;
		this.setState({
			educationArray: educationArrClone,
		});
	}
	majorOnChange(e) {
		let educationArrClone = [...this.state.educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].major = e.target.value;
		this.setState({
			educationArray: educationArrClone,
		});
	}
	schoolOnChange(e) {
		let educationArrClone = [...this.state.educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].school = e.target.value;
		this.setState({
			educationArray: educationArrClone,
		});
	}
	render() {
		const defaultView = (
			<div>
				<button
					className='edit btn'
					id='education-edit-btn'
					onClick={this.editBtnClicked}
				>
					Edit
				</button>
				<div className='title'>🎓 Education</div>
				<div className='container'>
					{this.state.educationArray.map((item, index) => {
						return (
							<div className='education-item' key={index}>
								<div className='date-of-study'>{item.year}</div>
								<div className='school-name'>{item.school}</div>
								<div className='major'>Major: {item.major}</div>
								<div className='GPA'>GPA: {item.GPA}</div>
							</div>
						);
					})}
				</div>
			</div>
		);
		const editView = (
			<div>
				<button
					className='apply btn'
					id='education-apply-btn'
					onClick={this.applyBtnClicked}
				>
					Apply
				</button>
				<div className='title'>🎓 Education</div>
				<div className='container'>
					{this.state.educationArray.map((item, index) => {
						return (
							<div
								className='education-item'
								data-index={index}
								key={index}
							>
								<div className='date-of-study'>
									<input
										onChange={this.yearOnChange}
										value={item.year}
									/>
								</div>
								<div className='school-name'>
									<input
										onChange={this.schoolOnChange}
										value={item.school}
									/>
								</div>
								<div className='major'>
									Major:{' '}
									<input
										onChange={this.majorOnChange}
										value={item.major}
									/>{' '}
								</div>
								<div className='GPA'>
									GPA:{' '}
									<input
										onChange={this.GPAOnChange}
										value={item.GPA}
									/>{' '}
								</div>
								<button
									className='delete btn'
									id='education-delete-btn'
									onClick={this.deleteBtnClicked}
								>
									x
								</button>
							</div>
						);
					})}
				</div>
				<button
					className='add btn'
					id='education-add-btn'
					onClick={this.addBtnClicked}
				>
					Add +
				</button>
			</div>
		);
		return (
			<div
				className='education mid'
				onMouseEnter={this.btnHover}
				onMouseLeave={this.btnMouseLeave}
			>
				{!this.state.edit ? defaultView : editView}
			</div>
		);
	}
}
export default Education;
