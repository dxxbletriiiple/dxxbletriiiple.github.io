import Button from '../Buttons';
import st from './Form.module.scss';
import svg from '../../assets/up.svg';

export const Form = () => {
	const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('qqq');
	};
	return (
		<section className={st.form}>
			<div className='container'>
				<div className={st.wrapper}>
					<div className={st.img}>
						<h2 className='title'>
							Got a project in
							<span className='colored'> mind?</span>
						</h2>
						<img src={svg} />
					</div>
					<form className={st.feedback}>
						<label htmlFor='name' className={st.label}>
							Your name
							<input type='text' name='name' placeholder='Name' className={st.name} />
						</label>
						<label htmlFor='email' className={st.label}>
							Your email
							<input type='email' name='email' placeholder='Email' className={st.email} />
						</label>
						<label htmlFor='text' className={st.label}>
							Your Message
							<textarea name='text' id='' placeholder='Message' className={st.text}></textarea>
						</label>
						<Button text='Send Message' className='active' onClick={handler} />
					</form>
				</div>
			</div>
		</section>
	);
};
