import cn from 'classnames';
import { IButton } from './Button.interface';
import st from './Button.module.scss';

export const Button = ({ text, className, onClick }: IButton) => {
	return (
		<button className={cn(st.btn, st[className])} onClick={onClick}>
			{text}
		</button>
	);
};
