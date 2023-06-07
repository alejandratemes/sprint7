import { Container } from "./PanelStyled";
import Boton from "./Button";

const Panel = ({ paginas, idiomas, setPaginas, setIdiomas, handleClick }) => (
  <Container>
    <div>
      <label>Número de págines</label>
      <div>
        <Boton id="paginasAdd" value="+" onClick={(e) => handleClick(e.target.id)}/>
        <input
          type="text"
          value={paginas}
          onChange={(e) => setPaginas(+e.target.value)}
        />
        <Boton id="paginasRemove" value="-" onClick={(e) => handleClick(e.target.id)}/>
      </div>
    </div>
    <div>
      <label>Número de idiomas</label>
      <div>
        <Boton id="idiomasAdd" value="+" onClick={(e) => handleClick(e.target.id)}/>
        <input
          type="text"
          value={idiomas}
          onChange={(e) => setIdiomas(+e.target.value)}
        />
        <Boton id="idiomasRemove" value="-" onClick={(e) => handleClick(e.target.id)}/>
      </div>
    </div>
  </Container>
);

export default Panel;