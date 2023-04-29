import Header from '../Header';
import Promo from '../Promo';
import st from './App.module.scss';

export const App = () => {
	return (
		<>
			<Header />
			<main className={st.app}>
				<Promo />
			</main>
		</>
	);
};
