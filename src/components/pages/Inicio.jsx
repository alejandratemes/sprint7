import{Link} from "react-router-dom";

const Enunciado = () => (
    <>
      <p>
        ¡Hola! A través de esta aplicación, podrás calcular y registrar un presupuesto. Puedes elegir estos servicios:
      </p>
      <ul>
        <li>Páginas web (con posibilidad de ajustar el número de páginas e idiomas)</li>
        <li>Consultorías SEO</li>
        <li>Campañas con Google Ads</li>
      </ul>
      <ul>
        <li>
          <span>¿Vamos a ello? presiona&nbsp;</span>
          <Link className="link" to="presupuesto">
            aquí
          </Link>
        </li>
      </ul>
    </>
  );
  
  export default Enunciado;