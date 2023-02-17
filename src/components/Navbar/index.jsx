import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'

import styles from './Navbar.module.scss';
import Busca from 'components/Busca';

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <div>
          <Link to="/" className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            <LogoSvg className={styles.logo}  />
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}
