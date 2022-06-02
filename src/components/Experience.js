import { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
	render() {
		return (
			<div className='experience bot'>
				<div className='title'>☕ Experience</div>
				<div className='container'>
					<div className='experience-item'>
						<div className='date-of-work'>2009 - 2014</div>
						<div className='company'>AC&amp;M Company</div>
						<div className='role'>
							Position: Full-stack Engineer
						</div>
						<div className='desc'>
							Eiusmod irure est labore occaecat cupidatat ea et.
							Officia elit eiusmod proident laborum sunt
							adipisicing. Aliquip laboris sint ut commodo Lorem
							dolore nisi. Adipisicing dolor et amet velit commodo
							enim laboris quis nisi id sunt aute dolor. Excepteur
							ea qui elit aliqua enim commodo anim nostrud do
						</div>
					</div>
					<div className='experience-item'>
						<div className='date-of-work'>2009 - 2014</div>
						<div className='company'>Evil Corp</div>
						<div className='role'>
							Position: Front End Developer
						</div>
						<div className='desc'>GPA: 7.35</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
