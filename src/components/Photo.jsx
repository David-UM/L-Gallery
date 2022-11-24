import './../styles/photo.css';

const Photo = ({ index, description }) => {
	return (
		<div className='Photo-container'>
			<img
				src={`https://raw.githubusercontent.com/David-UM/L-Gallery/main/src/assets/Photos/Photo-${index}.jpeg`}
				alt={description}
				key={index}
				className='Photo'
			/>
		</div>
	);
};

export default Photo;
