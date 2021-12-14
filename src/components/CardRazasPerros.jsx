import { Link } from "react-router-dom";

function CardRazasPerros({ nombreRaza, imagen, color }) {
  return (
    <li className="breedCard">
      <Link to="/rhodesian">
        <div className={color}>
          <div className="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
        </div>
      </Link>
      <span className="breedTitle">{nombreRaza} </span>
    </li>
  );
}
export default CardRazasPerros;
