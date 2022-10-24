import Photo from './Photo';
import PhotosData from '../data/PhotosData.js';
import './../styles/PhotosGallery.css';

const PhotosGallery = ({ input }) => {
	return (
		<>
			<div className='PhotosGallery-container'>
				{input === ''
					? PhotosData.map(photo => (
							<Photo
								index={photo.index.toString()}
								description={photo.description}
								key={photo.index.toString()}
							/>
					  ))
					: PhotosData.filter(photo =>
							photo.description.join('-').toLowerCase().includes(input)
					  ).map(photo => (
							<Photo
								index={photo.index.toString()}
								description={photo.description}
								key={photo.index.toString()}
							/>
					  ))}
			</div>
		</>
	);
};

export default PhotosGallery;
