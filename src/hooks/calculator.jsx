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
        total: 0,
      });
    
      const calcularTotal = (valor) => {
        switch (valor) {
          case "web": {
            if (lista.web.selected) return lista.total - lista.web.precio;
            return lista.total + lista.web.precio;
          }
          case "seo": {
            if (lista.seo.selected) return lista.total - lista.seo.precio;
            return lista.total + lista.seo.precio;
          }
          case "ads": {
            if (lista.ads.selected) return lista.total - lista.ads.precio;
            return lista.total + lista.ads.precio;
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
    
      return { lista, setPrecio };
    };

export default useCalculator;
