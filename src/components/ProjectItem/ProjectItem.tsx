import { IProjectItem } from './ProjectItem.interface';
import st from './ProjectItem.module.scss';

export const ProjectItem = ({ imgUrl }: IProjectItem) => {
	return (
		<div className={st.item}>
			<img src={imgUrl} loading='lazy' className={st.img} />
		</div>
	);
};
