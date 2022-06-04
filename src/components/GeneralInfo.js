import { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
	const [info, setInfo] = useState({
		email: 'thisismy@email.com',
		phone: '0988000000',
		address: 'Solar System, Milky Way, Laniakea',
		website: 'bestdeveloper.com',
	});
	const [editMode, setEditMode] = useState(false);
	function editBtnClicked() {
		setEditMode(true);
	}
	const applyBtnClicked = () => {
		console.dir(info);
		setEditMode(false);
	};
	function btnHover() {
		if (editMode) {
			const applyBtn = document.querySelector('.apply.btn');
			applyBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('.edit.btn');
			editBtn.style.display = 'block';
		}
	}
	function btnMouseLeave() {
		if (!editMode) {
			const editBtn = document.querySelector('.edit.btn');
			editBtn.style.display = 'none';
		}
	}
	function emailOnChange(e) {
		const emailInput = e.target.value;
		setInfo({
			email: emailInput,
			phone: info.phone,
			address: info.address,
			website: info.website,
		});
	}
	function phoneOnChange(e) {
		const phoneInput = e.target.value;
		setInfo({
			email: info.email,
			phone: phoneInput,
			address: info.address,
			website: info.website,
		});
	}
	function addressOnChange(e) {
		const addressInput = e.target.value;
		setInfo({
			email: info.email,
			phone: info.phone,
			address: addressInput,
			website: info.website,
		});
	}
	function websiteOnChange(e) {
		const websiteInput = e.target.value;
		setInfo({
			email: info.email,
			phone: info.email,
			address: info.address,
			website: websiteInput,
		});
	}
	const defaultView = (
		<div>
			<button className='edit btn' onClick={editBtnClicked}>
				Edit
			</button>
			<label htmlFor='email'>Email</label>
			<p className='email'>{info.email}</p>
			<hr />
			<label htmlFor='phone'>Phone number</label>
			<p className='phone'>{info.phone}</p>
			<hr />
			<label htmlFor='address'>Address</label>
			<p className='address'>{info.address}</p>
			<hr />
			<label htmlFor='website'>Website</label>
			<p className='website'>{info.website}</p>
		</div>
	);
	const editView = (
		<div>
			<button className='apply btn' onClick={applyBtnClicked}>
				Apply
			</button>
			<label htmlFor='email'>Email</label>
			<p className='email'>
				<input
					className='email'
					value={info.email}
					onChange={emailOnChange}
				/>
			</p>

			<hr />
			<label htmlFor='phone'>Phone number</label>
			<p className='phone'>
				<input value={info.phone} onChange={phoneOnChange} />
			</p>
			<hr />
			<label htmlFor='address'>Address</label>
			<p className='address'>
				<input defaultValue={info.address} onChange={addressOnChange} />
			</p>
			<hr />
			<label htmlFor='website'>Website</label>
			<p className='website'>
				<input defaultValue={info.website} onChange={websiteOnChange} />
			</p>
		</div>
	);
	return (
		<div className='side general-info'>
			<img className='avatar' alt='avatar' src='./avatar.jpg' />
			<div
				className='info'
				onMouseEnter={btnHover}
				onMouseLeave={btnMouseLeave}
			>
				{!editMode ? defaultView : editView}
			</div>
		</div>
	);
}

export default GeneralInfo;
