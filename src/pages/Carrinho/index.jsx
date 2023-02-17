import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import { useSelector } from 'react-redux';
import Item from 'components/Item';

export default function Carrinho() {
  const carrinho = useSelector(state => {
    const itens = state.carrinho.reduce((acc, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      acc.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      })
      return acc;
    }, []);
    return itens;
  })

  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>
        {
          carrinho.map(item => (
            <Item key={item.id} {...item} carrinho={true} />
          ))
        }
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ 0.00</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
