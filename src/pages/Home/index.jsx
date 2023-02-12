import Header from 'components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui'
  },
  {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Os melhores jogos estão aqui'
  }

]

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil'
        className={styles.header}
        imagem={relogio}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
