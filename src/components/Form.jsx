import useCalculator from '../hooks/calculator';
import { Container } from './FormStyled';

const Form = () => {
    const { lista, setPrecio } = useCalculator();
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