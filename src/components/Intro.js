import { useState } from 'react';
import '../styles/Intro.css';

function Intro() {
	const [info, setInfo] = useState({
		name: 'Jason Tran',
		position: 'Full-stack Web Developer',
		intro: 'Excepteur ea proident proident veniam quis ipsum id id eu aliqua elit esse nisi amet. Sint laboris consectetur est non nostrud deserunt excepteur eu labore ipsum. Incididunt ex ad amet adipisicing ea amet ex nostrud exercitation esse sit do. Ipsum voluptate anim velit sit nisi mollit cillum fugiat enim fugiat nostrud aliqua sunt.',
	});
	const [editMode, setEditMode] = useState();
	function btnHover() {
		if (editMode) {
			const applyBtn = document.querySelector('#intro-apply-btn');
			applyBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('#intro-edit-btn');
			editBtn.style.display = 'block';
		}
	}
	function btnMouseLeave() {
		if (!editMode) {
			const editBtn = document.querySelector('#intro-edit-btn');
			editBtn.style.display = 'none';
		}
	}
	function nameOnChange(e) {
		const nameInput = e.target.value;
		setInfo({
			name: nameInput,
			position: info.position,
			intro: info.intro,
		});
	}
	function positionOnChange(e) {
		const positionInput = e.target.value;
		setInfo({
			name: info.name,
			position: positionInput,
			intro: info.intro,
		});
	}
	function introOnChange(e) {
		const introInput = e.target.value;
		setInfo({
			name: info.name,
			position: info.position,
			intro: introInput,
		});
	}
	const defaultView = (
		<div>
			<button
				className='edit btn'
				id='intro-edit-btn'
				onClick={() => setEditMode(true)}
			>
				Edit
			</button>
			<p className='name'>{info.name}</p>
			<p className='position'>{info.position}</p>
			<p className='brief-intro'>{info.intro}</p>
		</div>
	);
	const editView = (
		<div>
			<button
				className='apply btn'
				id='intro-apply-btn'
				onClick={() => setEditMode(false)}
			>
				Apply
			</button>
			<p className='name'>
				<input type='text' value={info.name} onChange={nameOnChange} />
			</p>
			<p className='position'>
				<input
					type='text'
					value={info.position}
					onChange={positionOnChange}
				/>
			</p>
			<p className='brief-intro'>
				<textarea
					onChange={introOnChange}
					value={info.intro}
					cols='80'
					rows='7'
				/>
			</p>
		</div>
	);
	return (
		<div
			className='intro top'
			onMouseEnter={btnHover}
			onMouseLeave={btnMouseLeave}
		>
			{!editMode ? defaultView : editView}
		</div>
	);
}

export default Intro;
