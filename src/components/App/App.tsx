import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import st from './App.module.scss';

export const App = () => {
	return (
		<>
			<Header />
			<main className={st.app}>
				<Promo />
				<About />
			</main>
		</>
	);
};
