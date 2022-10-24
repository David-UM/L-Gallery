import './../styles/SearchBar.css';

const SearchBar = ({ handle, number }) => {
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
			<p className='SearchBar-result'>Number of images found: {number}</p>
		</>
	);
};

export default SearchBar;
