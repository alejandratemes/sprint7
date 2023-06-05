import useCalculator from '../hooks/calculator';
import { Container } from './FormStyled';
import Panel from './Panel'

const Form = () => {
    const { lista, setPrecio, setPaginas, setIdiomas, handleClick } = useCalculator();
    const {
      web: { selected: webSelected },
      seo: { selected: seoSelected },
      ads: { selected: adsSelected },
      total,
    } = lista;
  
    return (
      <Container>
        <h2>¿Qué quieres hacer?</h2>
        <div>
            <input
              id="inputWeb"
              type="checkbox"
              checked={webSelected}
              onChange={(e) => setPrecio("web")}
            />
            Una página web (500€)
            {(lista.web.selected) && (
            <Panel 
              paginas={lista.extras.paginas} 
              idiomas={lista.extras.idiomas} 
              setPaginas={setPaginas} 
              setIdiomas={setIdiomas} 
              handleClick={handleClick}
            />)}
            <input
              id="inputSeo"
              type="checkbox"
              checked={seoSelected}
              onChange={(e) => setPrecio("seo")}
            />
            Una consultoría SEO (300€)
            <input
              id="inputAds"
              type="checkbox"
              checked={adsSelected}
              onChange={(e) => setPrecio("ads")}
            />
            Una campaña de Google Ads (200€)
          <p>Precio:&nbsp;{total}€</p>
        </div>
      </Container>
    );
  };
  
  export default Form;