


const Photo = ({number, mood}) => {
    return (
        <>
            <img src={`https://raw.githubusercontent.com/David-UM/L-Gallery/main/src/assets/Photos/Photo-${number}.jpeg`} alt={mood} key={number} className="Photo"/>
        </>
    );
}

export default Photo;