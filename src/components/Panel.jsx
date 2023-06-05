import { Container } from "./PanelStyled";

const Panel = ({ paginas, idiomas, setPaginas, setIdiomas }) => (
  <Container>
    <div>
      <label>Número de págines</label>
      <div>
        <input
          type="number"
          placeholder="Escribe un número"
          value={paginas}
          onChange={(e) => setPaginas(e.target.value)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="idiomes">Número de idiomas</label>
      <div>
        <input
          type="number"
          placeholder="Escribe un número"
          value={idiomas}
          onChange={(e) => setIdiomas(e.target.value)}
        />
      </div>
    </div>
  </Container>
);

export default Panel;