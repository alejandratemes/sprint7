import { getStorage } from "./localStorage";

export const formInicial = {
  web: {
    selected: getStorage("webSelected") ?? false,
    precio: 500,
  },
  seo: {
    selected: getStorage("seoSelected") ?? false,
    precio: 300,
  },
  ads: {
    selected: getStorage("adsSelected") ?? false,
    precio: 200,
  },
  extras: {
    paginas: getStorage("paginasWeb") ?? 0,
    idiomas: getStorage("idiomasWeb") ?? 0,
  },
  total: getStorage("total") ?? 0,
};