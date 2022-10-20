import Photo from "./Photo"
import FakeData from "./../data/FakeData.js"
import "./../styles/MyGallery.css"

const MyGallery = ({estado}) => {
    return (
        <>
            <div className="MyGallery-container">
            {
                estado === ""?FakeData.map((photo) => 
                <Photo number={photo.img.toString()} alt={photo.mood} key={photo.img.toString()}/>
                )
                :FakeData.filter(photo => photo.mood === estado).map((photo) => 
                <Photo number={photo.img.toString()} alt={photo.mood} key={photo.img.toString()}/>
                )  
            }    
            </div>
        </>
    );
}

export default MyGallery;