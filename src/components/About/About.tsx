import cn from 'classnames';
import st from './About.module.scss';
import svg from '../../assets/man-sit.svg';
import bg from '../../assets/doodle.svg';

export const About = () => {
	return (
		<section className={st.abt}>
			<div className='container'>
				<div className={st.wrapper}>
					<div className={st.wrap}>
						<h2 className={cn(st.header, 'title')}>
							About <span className='colored'>me</span>
						</h2>
						<p className={st.text}>
							Hey, I'm <strong>Javlon</strong>, a frontend developer with over 2 years of experience in React, Redux, Webpack, Node.js, and other
							popular frontend technologies. My focus is on creating visually appealing and seamless user interfaces while keeping up with the latest
							trends and best practices. I value collaboration and communication, and am always looking for creative solutions to new challenges.
							<br />
							Thanks for stopping by!
						</p>
					</div>
					<div className={st.man} style={{ backgroundImage: `url(${bg})` }}>
						<img src={svg} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};
