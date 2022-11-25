import './../styles/SearchBar.css';
import NoResults from './NoResults';

/* Este componente maneja el flujo de busqueda de fotos y recibe 3 parametros que son:
	handleChange: funcion que permite controlar el cambio del input para mostrar las fotos y el numero de las mismas
	number: es el numero de fotos mostradas en tiempo real que funciona por el handleChange
*/
const SearchBar = ({ handleChange, number }) => {
	return (
		<>
			<div className='SearchBar-container'>
				<input
					className='SearchBar-bar'
					type='text'
					onChange={handleChange}
					placeholder='Search...'
				/>
			</div>
			{/* Aqui se ve si no hay ninguna coincidencia se devuelve el componente NoResults.jsx, 
			pero si es que hay alguna coincidencia se mustra el texto con la cantidad de imagenes */}
			{number === 0 ? (
				<NoResults></NoResults>
			) : (
				<p className='SearchBar-result'>Number of images found: {number}</p>
			)}
		</>
	);
};

export default SearchBar;
