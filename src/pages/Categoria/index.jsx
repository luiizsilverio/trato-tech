import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "components/Header";

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const categoria = useSelector(state => state.categorias.find(c => c.id === nomeCategoria));

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  )
}
