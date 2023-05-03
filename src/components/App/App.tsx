import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import Projects from '../Projects';
import st from './App.module.scss';
import Form from '../Form';

export const App = () => {
	return (
		<>
			<Header />
			<main className={st.app}>
				<Promo />
				<About />
				<Projects />
				<Form />
			</main>
		</>
	);
};
