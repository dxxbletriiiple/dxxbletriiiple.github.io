import { useState } from 'react';
import Button from '../Buttons';
import st from './Projects.module.scss';
import bg from '../../assets/doodle-3.svg';
import { ProjectItem } from '../ProjectItem/ProjectItem';

export const Projects = () => {
	const [active, setActive] = useState(0);

	const x = ['All', 'UI', 'UX', 'Web Design'];
	const z = ['https://placekitten.com/265/158', 'https://placekitten.com/265/158', 'https://placekitten.com/265/158'];

	return (
		<section className={st.projects} style={{ backgroundImage: `url(${bg})` }}>
			<div className='container'>
				<div className={st.wrapper}>
					<h2 className='title'>
						My recent <span className='colored'>works</span>
					</h2>
					<div className={st.btns}>
						{x.map((el, i) =>
							i === active ? (
								<Button text={el} className='active' onClick={() => setActive(i)} key={crypto.randomUUID()} />
							) : (
								<Button text={el} className='proj' onClick={() => setActive(i)} key={crypto.randomUUID()} />
							)
						)}
					</div>
					<div className={st.row}>
						{z.map((el) => (
							<a href='#' key={crypto.randomUUID()}>
								<ProjectItem imgUrl={el} />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
