import st from './Header.module.scss';

export const Header = () => {
	return (
		<header className={st.header}>
			<div className='container'>
				<nav className={st.nav}>
					<ul className={st.links}>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About Me</a>
						</li>
						<li>
							<a href='#'>Contacts</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
