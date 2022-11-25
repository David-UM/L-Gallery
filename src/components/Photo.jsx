import './../styles/photo.css';
/* Componente que renderiza cada foto y recibe dos propiedades que vienen del componente PhotoGallery.jsx */
const Photo = ({ index, description }) => {
	return (
		<div className='Photo-container'>
			<img
				src={`https://raw.githubusercontent.com/David-UM/L-Gallery/main/src/assets/Photos/Photo-${index}.jpeg`}
				alt={description}
				key={index}
				className='Photo'
			/>
			<button className='photo-button hidden'>See full photo</button>
		</div>
	);
};

export default Photo;
