import './App.css';
import {
	BackTop,
	Become,
	Button,
	Circles,
	Design,
	Footer,
	Header,
	Navbar,
	Services,
	Testimonial,
} from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRef } from 'react';

function App() {
	const becomeRef = useRef();
	const servicesRef = useRef();
	const topRef = useRef();

	return (
		<Router>
			<div className="bg-section">
				<Navbar
					button={
						<div className="be-a-peacemaker">
							<Button
							text1="Be a"
							text2="Peacemaker"
							onClick={() => becomeRef.current.scrollIntoView()}
						/>
						</div>
					}
				/>
				<Header servicesRef={servicesRef} ref={topRef} />
			</div>
			<Services
				ref={servicesRef}
				button={
					<Button
						text1="Sign up"
						text2=""
						onClick={() => alert('You clicked button')}
					/>
				}
			/>
			<Testimonial
				design={
					<Design
						style={{
							left: '48%',
							right: '0',
							top: '-150px',
							transform: 'rotate(240deg)',
						}}
					/>
				}
				circles={<Circles />}
			/>
			<Become
				ref={becomeRef}
				button={
					<Button
						text1="Join community of interdisciplinary"
						text2=""
						onClick={() => alert('You clicked button!')}
					/>
				}
				design={
					<Design
						style={{
							left: '0',
							right: '0',
							top: '180px',
							transform: 'rotate(70deg)',
						}}
					/>
				}
				circles={
					<Circles
						style={{
							top: '82%',
							left: '9%',
							transformOrigin: 'center top',
							transform: 'rotate(180deg)',
						}}
					/>
				}
			/>
			<Footer
				button={
					<Button
						text1="Book an"
						text2="Interpreter"
						onClick={() => alert('You clicked button')}
					/>
				}
			/>
			<BackTop topRef={topRef} />
		</Router>
	);
}

export default App;
