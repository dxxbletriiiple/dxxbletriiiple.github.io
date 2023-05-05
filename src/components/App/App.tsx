import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import Projects from '../Projects';
import Form from '../Form';
import Footer from '../Footer';
import st from './App.module.scss';

export const App = () => {
	return (
		<>
			<Header />
			<main className={st.app}>
				<Promo />
				{/*<About />
				<Projects />
				<Form />
				*/}
			</main>
			{/*<Footer />*/}
		</>
	);
};
