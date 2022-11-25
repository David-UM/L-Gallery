import { useState } from 'react';
import PhotosGallery from './../components/PhotosGallery';
import TheHeader from './../components/TheHeader';
import PhotosData from './../data/PhotosData.js';
import SearchBar from './../components/SearchBar';

/* Este componente es la pagina de la galeria de foto o videos*/
const Gallery = () => {
	/* Este es el valor que se va a evaluar cuando el SearchBar.jsx este en funcion */
	let [inputsearch, setInputsearch] = useState('');

	/* El numero de fotos que mostramos en la galeria de fotos */
	let [numberphotos, setNumberphotos] = useState(PhotosData.length);

	/* En cada cambio del input del SearchBar.jsx se cambian las fotos que se muestran y tambien el numero */
	const handleOnChange = e => {
		setInputsearch((inputsearch = e.target.value.toLowerCase()));
		setNumberphotos(
			(numberphotos = PhotosData.filter(photo =>
				photo.description.join('-').toLowerCase().includes(inputsearch)
			).length)
		);
	};

	return (
		<>
			<div className='header'>
				<TheHeader />
				<SearchBar handleChange={handleOnChange} number={numberphotos} />
			</div>

			<PhotosGallery input={inputsearch} />
		</>
	);
};

export default Gallery;
