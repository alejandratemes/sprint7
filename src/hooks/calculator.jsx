import {useState} from "react";
import {formInicial} from "../components/FormInicial"

const useCalculator = () => {
    const [lista, setLista] = useState(formInicial);
    
    const {
      web: { selected: webSelected, precio: webPrecio},
      seo: { selected: seoSelected, precio: seoPrecio},
      ads: { selected: adsSelected, precio: adsPrecio},
      extras: {paginas, idiomas},
      total,
    } = lista;

      const calcularExtras = (valor, numero) => {
        let totalExtras = 0;
        if(seoSelected) totalExtras += seoPrecio
        if(adsSelected) totalExtras += adsPrecio
        if(webSelected) totalExtras += webPrecio
        valor === "paginas"
          ? (totalExtras += numero * 30 + idiomas * 30)
          : (totalExtras += paginas * 30 + numero * 30);
        return totalExtras;
      };

      const calcularTotal = (valor, numero) => {
        switch (valor) {
          case "web": {
            return webSelected 
              ? total - webPrecio - paginas * 30 - idiomas * 30
              : total + webPrecio + paginas * 30 + idiomas * 30;
          }
          case "seo": {
            return seoSelected ? total - seoPrecio : total + seoPrecio;
          }
          case "ads": {
            return adsSelected ? total - adsPrecio : total + adsPrecio;
          }
          case "paginas": {
            return calcularExtras("paginas", numero);
          }
          case "idiomas": {
            return calcularExtras("idiomas", numero);
          }
          default:
            break;
        }
      };
    
      const setPrecio = (valor) => {
        setLista((prev) => ({
          ...prev,
          [valor]: { selected: !prev[valor].selected, precio: prev[valor].precio },
          total: calcularTotal(valor),
        }));
      };
    
      const setPaginas = (numeroPaginas) => {
        if (numeroPaginas < 0 || isNaN(numeroPaginas)) return;
        setLista((prev) => ({
          ...prev,
          extras: { paginas: numeroPaginas, idiomas: prev.extras.idiomas },
          total: calcularTotal("paginas", numeroPaginas),
        }));
      };
    
      const setIdiomas = (numeroIdiomas) => {
        if (numeroIdiomas < 0 || isNaN(numeroIdiomas)) return;
        setLista((prev) => ({
          ...prev,
          extras: { paginas: prev.extras.paginas, idiomas: numeroIdiomas },
          total: calcularTotal("idiomas", numeroIdiomas),
        }));
      };

      const handleClick = (id) => {
        switch (id) {
          case "paginasAdd":
            setPaginas(paginas ? paginas + 1 : 1);
            break;
          case "paginasRemove":
            setPaginas(paginas - 1);
            break;
          case "idiomasAdd":
            setIdiomas(idiomas ? idiomas + 1 : 1);
            break;
          case "idiomasRemove":
            setIdiomas(idiomas - 1);
            break;
          default:
            return;
        }
      };

      return { lista, setLista, setPrecio, setPaginas, setIdiomas, handleClick };
    };

export default useCalculator;
