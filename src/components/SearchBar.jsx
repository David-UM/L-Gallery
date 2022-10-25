import './../styles/SearchBar.css';
import PhotosData from '../data/PhotosData';

const SearchBar = ({ handle, number, input }) => {
	return (
		<>
			<div className='SearchBar-container'>
				<input
					className='SearchBar-bar'
					type='text'
					onChange={handle}
					placeholder='Search...'
				/>
			</div>
			{PhotosData.filter(photo =>
				photo.description.join('-').toLowerCase().includes(input)
			).length === 0 ? (
				<></>
			) : (
				<p className='SearchBar-result'>Number of images found: {number}</p>
			)}
		</>
	);
};

export default SearchBar;
