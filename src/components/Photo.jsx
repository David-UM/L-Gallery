import './../styles/photo.css';
import { useState } from 'react';

/* Componente que renderiza cada foto y recibe dos propiedades que vienen del componente PhotoGallery.jsx */
const Photo = ({ index, description }) => {
	let [containerclass, setContainerclass] = useState('Photo-container');
	let [imageclass, setImageclass] = useState('Photo');

	const handleClickOpen = () => {
		setContainerclass((containerclass = 'grow-container'));
		setImageclass((imageclass = 'grow-photo'));
		document.body.style.overflow = 'hidden';
	};

	const handleClickClose = () => {
		setContainerclass((containerclass = 'Photo-container'));
		setImageclass((imageclass = 'Photo'));
		document.body.style.overflow = 'visible';
	};
	return (
		<div className={containerclass}>
			<img
				src={`https://raw.githubusercontent.com/David-UM/L-Gallery/main/src/assets/Photos/Photo-${index}.jpeg`}
				alt={description}
				key={index}
				className={imageclass}
			/>
			<button className='photo-buttonOpen' onClick={handleClickOpen}>
				See full photo
			</button>
			<button className='photo-buttonClose' onClick={handleClickClose}>
				X
			</button>
		</div>
	);
};

export default Photo;
