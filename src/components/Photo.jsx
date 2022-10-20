


const Photo = ({number, mood}) => {
    return (
        <>
            <img src={`https://cdn.freecodecamp.org/curriculum/css-photo-gallery/${number}.jpg`} alt={mood} key={number} className="Photo"/>
        </>
    );
}

export default Photo;