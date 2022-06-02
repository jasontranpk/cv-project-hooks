import { Component } from 'react';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
	constructor(props) {
		super(props);
		this.editBtnClicked = this.editBtnClicked.bind(this);
		this.applyBtnClicked = this.applyBtnClicked.bind(this);
		this.btnHover = this.btnHover.bind(this);
		this.btnMouseLeave = this.btnMouseLeave.bind(this);
		this.emailOnChange = this.emailOnChange.bind(this);
		this.phoneOnChange = this.phoneOnChange.bind(this);
		this.addressOnChange = this.addressOnChange.bind(this);
		this.websiteOnChange = this.websiteOnChange.bind(this);
		this.state = {
			info: {
				email: 'thisismy@email.com',
				phone: '0988000000',
				address: 'Solar System, Milky Way, Laniakea',
				website: 'bestdeveloper.com',
			},
			edit: false,
		};
	}
	btnHover() {
		if (this.state.edit) {
			const applyBtn = document.querySelector('.apply.btn');
			applyBtn.style.display = 'block';
		} else {
			const editBtn = document.querySelector('.edit.btn');
			editBtn.style.display = 'block';
		}
	}
	btnMouseLeave() {
		if (!this.state.edit) {
			const editBtn = document.querySelector('.edit.btn');
			editBtn.style.display = 'none';
		}
	}
	editBtnClicked(e) {
		console.log('edit clicked');
		this.setState({
			edit: true,
		});
	}
	applyBtnClicked(e) {
		console.log('apply clicked');
		this.setState({
			edit: false,
		});
	}
	emailOnChange(e) {
		const emailInput = e.target.value;
		this.setState({
			info: {
				email: emailInput,
				phone: this.state.info.phone,
				address: this.state.info.address,
				website: this.state.info.website,
			},
		});
	}
	phoneOnChange(e) {
		const phoneInput = e.target.value;
		this.setState({
			info: {
				email: this.state.info.email,
				phone: phoneInput,
				address: this.state.info.address,
				website: this.state.info.website,
			},
		});
	}
	addressOnChange(e) {
		const addressInput = e.target.value;
		this.setState({
			info: {
				email: this.state.info.email,
				phone:  this.state.info.phone,
				address: addressInput,
				website: this.state.info.website,
			},
		});
	}
	websiteOnChange(e) {
		const websiteInput= e.target.value;
		this.setState({
			info: {
				email: this.state.info.email,
				phone:  this.state.info.email,
				address: this.state.info.address,
				website: websiteInput,
			},
		});
	}
	render() {
		const defaultView = (
			<div>
				<button className='edit btn' onClick={this.editBtnClicked}>
					Edit
				</button>
				<label htmlFor='email'>Email</label>
				<p className='email'>{this.state.info.email}</p>
				<hr />
				<label htmlFor='phone'>Phone number</label>
				<p className='phone'>{this.state.info.phone}</p>
				<hr />
				<label htmlFor='address'>Address</label>
				<p className='address'>{this.state.info.address}</p>
				<hr />
				<label htmlFor='website'>Website</label>
				<p className='website'>{this.state.info.website}</p>
			</div>
		);
		const editView = (
			<div>
				<button className='apply btn' onClick={this.applyBtnClicked}>
					Apply
				</button>
				<label htmlFor='email'>Email</label>
				<p className='email'>
					<input
						className='email'
						value={this.state.info.email}
						onChange={this.emailOnChange}
					/>
				</p>

				<hr />
				<label htmlFor='phone'>Phone number</label>
				<p className='phone'>
					<input
						value={this.state.info.phone}
						onChange={this.phoneOnChange}
					/>
				</p>
				<hr />
				<label htmlFor='address'>Address</label>
				<p className='address'>
					<input defaultValue={this.state.info.address} onChange={this.addressOnChange} />
				</p>
				<hr />
				<label htmlFor='website'>Website</label>
				<p className='website'>
					<input defaultValue={this.state.info.website} onChange={this.websiteOnChange} />
				</p>
			</div>
		);
		return (
			<div className='side general-info'>
				<img className='avatar' alt='avatar' src='./avatar.jpg' />
				<div
					className='info'
					onMouseEnter={this.btnHover}
					onMouseLeave={this.btnMouseLeave}
				>
					{!this.state.edit ? defaultView : editView}
				</div>
			</div>
		);
	}
}
export default GeneralInfo;
