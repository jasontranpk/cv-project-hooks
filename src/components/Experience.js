import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
	const [editMode, setEditMode] = useState(false);
	const [experienceArray, setExperienceArray] = useState([
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
	]);
	function btnHover() {
		if (editMode) {
			const applyBtn = document.querySelector('#experience-apply-btn');
			applyBtn.style.display = 'block';
			const addBtn = document.querySelector('#experience-add-btn');
			addBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#experience-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	function btnMouseLeave() {
		if (!editMode) {
			const editBtn = document.querySelector('#experience-edit-btn');
			editBtn.style.display = 'none';
		}
	}
	function addBtnClicked(e) {
		let experienceArrClone = [...experienceArray];
		const blankexperienceItem = {
			year: '',
			company: '',
			position: '',
			desc: '',
		};
		experienceArrClone.push(blankexperienceItem);
		setExperienceArray(experienceArrClone);
	}
	function yearOnChange(e) {
		let experienceArrClone = [...experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].year = e.target.value;
		setExperienceArray(experienceArrClone);
	}
	function companyOnChange(e) {
		let experienceArrClone = [...experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].company = e.target.value;
		setExperienceArray(experienceArrClone);
	}
	function descOnChange(e) {
		let experienceArrClone = [...experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].desc = e.target.value;
		setExperienceArray(experienceArrClone);
	}
	function positionOnChange(e) {
		let experienceArrClone = [...experienceArray];
		const index =
			e.target.parentElement.parentElement.getAttribute('data-index');
		experienceArrClone[index].position = e.target.value;
		setExperienceArray(experienceArrClone);
	}
	function deleteBtnClicked(e) {
		const index = e.target.parentElement.getAttribute('data-index');
		console.log(index);
		let experienceArrClone = [...experienceArray];
		experienceArrClone.splice(index, 1);
		setExperienceArray(experienceArrClone);
	}

	const defaultView = (
		<div>
			<button
				className='edit btn'
				id='experience-edit-btn'
				onClick={() => setEditMode(true)}
			>
				Edit
			</button>
			<div className='title'>☕ Experience</div>
			<div className='container'></div>
			{experienceArray.map((item, index) => {
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
				onClick={() => setEditMode(false)}
			>
				Apply
			</button>
			<div className='title'>☕ Experience</div>
			<div className='container'></div>
			{experienceArray.map((item, index) => {
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
								onChange={yearOnChange}
							/>
						</div>
						<div className='company'>
							<input
								type='text'
								value={item.company}
								onChange={companyOnChange}
							/>
						</div>
						<div className='role'>
							<input
								type='text'
								value={item.position}
								onChange={positionOnChange}
							/>
						</div>
						<div className='desc'>
							<textarea
								value={item.desc}
								cols='80'
								rows='7'
								onChange={descOnChange}
							/>
						</div>
						<button
							className='delete btn'
							id='experience-delete-btn'
							onClick={deleteBtnClicked}
						>
							x
						</button>
					</div>
				);
			})}
			<button
				className='add btn'
				id='experience-add-btn'
				onClick={addBtnClicked}
			>
				Add +
			</button>
		</div>
	);
	return (
		<div
			className='experience bot'
			onMouseEnter={btnHover}
			onMouseLeave={btnMouseLeave}
		>
			{!editMode ? defaultView : editView}
		</div>
	);
}

export default Experience;
