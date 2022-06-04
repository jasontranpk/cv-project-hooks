import { useState } from 'react';
import '../styles/Education.css';

function Education() {
	const [educationArray, setEducationArray] = useState([
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
	]);
	const [editMode, setEditMode] = useState(false);

	function btnHover() {
		if (editMode) {
			const applyBtn = document.querySelector('#education-apply-btn');
			applyBtn.style.display = 'block';
			const addBtn = document.querySelector('#education-add-btn');
			addBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#education-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	function btnMouseLeave() {
		if (!editMode) {
			const editBtn = document.querySelector('#education-edit-btn');
			editBtn.style.display = 'none';
		}
	}
	function addBtnClicked(e) {
		let educationArrClone = [...educationArray];
		const blankEducationItem = {
			year: '',
			school: '',
			major: '',
			GPA: '',
		};
		educationArrClone.push(blankEducationItem);
		setEducationArray(educationArrClone);
	}
	function deleteBtnClicked(e) {
		const index = e.target.parentElement.getAttribute('data-index');
		console.log(index);
		let educationArrClone = [...educationArray];
		educationArrClone.splice(index, 1);
		setEducationArray(educationArrClone);
	}
	function yearOnChange(e) {
		let educationArrClone = [...educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].year = e.target.value;
		setEducationArray(educationArrClone);
	}
	function GPAOnChange(e) {
		let educationArrClone = [...educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].GPA = e.target.value;
		setEducationArray(educationArrClone);
	}
	function majorOnChange(e) {
		let educationArrClone = [...educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].major = e.target.value;
		setEducationArray(educationArrClone);
	}
	function schoolOnChange(e) {
		let educationArrClone = [...educationArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		educationArrClone[index].school = e.target.value;
		setEducationArray(educationArrClone);
	}

	const defaultView = (
		<div>
			<button
				className='edit btn'
				id='education-edit-btn'
				onClick={() => setEditMode(true)}
			>
				Edit
			</button>
			<div className='title'>🎓 Education</div>
			<div className='container'>
				{educationArray.map((item, index) => {
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
				onClick={() => setEditMode(false)}
			>
				Apply
			</button>
			<div className='title'>🎓 Education</div>
			<div className='container'>
				{educationArray.map((item, index) => {
					return (
						<div
							className='education-item'
							data-index={index}
							key={index}
						>
							<div className='date-of-study'>
								<input
									onChange={yearOnChange}
									value={item.year}
								/>
							</div>
							<div className='school-name'>
								<input
									onChange={schoolOnChange}
									value={item.school}
								/>
							</div>
							<div className='major'>
								Major:{' '}
								<input
									onChange={majorOnChange}
									value={item.major}
								/>{' '}
							</div>
							<div className='GPA'>
								GPA:{' '}
								<input
									onChange={GPAOnChange}
									value={item.GPA}
								/>{' '}
							</div>
							<button
								className='delete btn'
								id='education-delete-btn'
								onClick={deleteBtnClicked}
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
				onClick={addBtnClicked}
			>
				Add +
			</button>
		</div>
	);
	return (
		<div
			className='education mid'
			onMouseEnter={btnHover}
			onMouseLeave={btnMouseLeave}
		>
			{!editMode ? defaultView : editView}
		</div>
	);
}
export default Education;
