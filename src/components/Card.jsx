import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id }) {
   //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
   return (
      <div>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}


export default Card;
