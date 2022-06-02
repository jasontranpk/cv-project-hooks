import { Component } from 'react';
import '../styles/Education.css'

class Education extends Component {
	render() {
		return (
            <div class='education mid'>
            <div class='title'>🎓 Education</div>
            <div class='container'>
                <div class='education-item'>
                    <div class='date-of-study'>2019 - 2022</div>
                    <div class='school-name'>University of Science</div>
                    <div class='major'>
                        Major: Information Technology
                    </div>
                    <div class='GPA'>GPA: 8.35</div>
                </div>
                <div class='education-item'>
                    <div class='date-of-study'>2009 - 2014</div>
                    <div class='school-name'>
                        Post and Telecommunication Issue of Technology
                    </div>
                    <div class='major'>
                        Major: Business Administration
                    </div>
                    <div class='GPA'>GPA: 7.35</div>
                </div>
            </div>
        </div>
		);
	}
}
export default Education;
