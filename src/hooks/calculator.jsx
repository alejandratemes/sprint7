import {useState} from "react";

const useCalculator = () => {
    const [lista, setLista] = useState({
        web: {
          selected: false,
          precio: 500,
        },
        seo: {
          selected: false,
          precio: 300,
        },
        ads: {
          selected: false,
          precio: 200,
        },
        extras: {
          paginas: 0,
          idiomas:0,
        },
        total: 0,
      });
    
      const calcularExtras = (valor, numero) => {
        let extras = 0;
        if (lista.web.selected) extras += lista.web.precio;
        if (lista.seo.selected) extras += lista.seo.precio;
        if (lista.ads.selected) extras += lista.ads.precio;
        valor === "paginas"
          ? (extras += numero * 30 + lista.extras.idiomas * 30)
          : (extras += lista.extras.paginas * 30 + numero * 30);
        return extras;
      };

      const calcularTotal = (valor, numero) => {
        switch (valor) {
          case "web": {
            return lista.web.selected 
              ? lista.total - lista.web.precio
              : lista.total + lista.web.precio;
          }
          case "seo": {
            return lista.seo.selected 
              ? lista.total - lista.seo.precio
              : lista.total + lista.seo.precio;
          }
          case "ads": {
            return lista.ads.selected 
              ? lista.total - lista.ads.precio
              : lista.total + lista.ads.precio;
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

      return { lista, setPrecio, setPaginas, setIdiomas };
    };

export default useCalculator;
