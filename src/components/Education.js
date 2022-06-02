import { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
	render() {
		return (
			<div className='education mid'>
				<div className='title'>🎓 Education</div>
				<div className='container'>
					<div className='education-item'>
						<div className='date-of-study'>2019 - 2022</div>
						<div className='school-name'>University of Science</div>
						<div className='major'>Major: Information Technology</div>
						<div className='GPA'>GPA: 8.35</div>
					</div>
					<div className='education-item'>
						<div className='date-of-study'>2009 - 2014</div>
						<div className='school-name'>
							Post and Telecommunication Issue of Technology
						</div>
						<div className='major'>Major: Business Administration</div>
						<div className='GPA'>GPA: 7.35</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Education;
