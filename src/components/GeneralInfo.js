import { Component } from 'react';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
	render() {
		return (
			<div className='side general-info'>
				<img className='avatar' alt='avatar' src='./avatar.jpg' />
				<div className='info' onMouseEnter={() => alert('info')}>
					<label htmlFor='email'>Email</label>
					<p className='email'>thisisme@tothebest.com</p>
					<hr />
					<label htmlFor='phone'>Phone number</label>
					<p className='phone'>0988000000</p>
					<hr />
					<label htmlFor='address'>Address</label>
					<p className='address'>Solar System, Milky Way, Laniakea</p>
					<hr />
					<label htmlFor='website'>Website</label>
					<p className='website'>bestDeveloper.com</p>
				</div>
			</div>
		);
	}
}
export default GeneralInfo;
