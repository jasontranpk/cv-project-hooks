import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Intro from './components/Intro';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
	return (
		<div className='App'>
			<GeneralInfo />
			<main>
				<Intro />
				<Education />
				<Experience />
			</main>
		</div>
	);
}

export default App;
