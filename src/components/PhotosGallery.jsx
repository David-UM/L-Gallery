import Photo from './Photo';
import PhotosData from '../data/PhotosData.js';
import NoResults from './NoResults';
import './../styles/PhotosGallery.css';

/* Este componente se encarga de mostrar las FOTOS de la galeria y recibe el input de la Pagina-Componente Gallery.jsx que es lo que se escribe en SearchBar.jsx*/
const PhotosGallery = ({ input }) => {
	return (
		<>
			<div className='PhotosGallery-container'>
				{/* 
					Para mostrar las fotos uso operadores ternarios, primero verifico se verifica que se haya escrito algo, si no se ha escrito algo se presentaran todas las fotos
					Si es que hay algo que no fuera un string vacio pero no coincide con ninguna descripcion de alguna foto, devuelve el componente NoResults.jsx
					si no es ninguno de los casos anteriores pasa un filtro que solo deja a las fotos que tienen alguna coincidencia con el input

				 */}
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
