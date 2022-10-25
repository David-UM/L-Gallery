import { useState } from 'react';
import PhotosGallery from './../components/PhotosGallery';
import TheHeader from './../components/TheHeader';
import PhotosData from './../data/PhotosData.js';

import SearchBar from './../components/SearchBar';

const Gallery = () => {
	let [input, setInput] = useState('');

	let [number, setNumber] = useState(PhotosData.length);

	const handleOnChange = e => {
		setInput((input = e.target.value.toLowerCase()));
		setNumber(
			(number = PhotosData.filter(photo =>
				photo.description.join('-').toLowerCase().includes(input)
			).length)
		);
	};
	return (
		<>
			<div className='header'>
				<TheHeader />
				<SearchBar handle={handleOnChange} number={number} input={input} />
			</div>

			<PhotosGallery input={input} />
		</>
	);
};

export default Gallery;
