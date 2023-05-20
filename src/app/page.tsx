import Image from 'next/image';
import styles from './page.module.css';
import Tile from '@/components/tile/tile';

import calculator from '../../public/images/tile-calculator.png';
import compare from '../../public/images/tile-compare.png';
import products from '../../public/images/tile-products.png';
import account from '../../public/images/tile-account.png';
import logo from '../../public/images/logo-white.svg';

export default function Page() {
  return (
    <>
      <div className={styles.heading}>
        <Image src={logo} alt="Logo" />
      </div>

      <div className={styles['page-links']}>
        <Tile
          image={{ src: calculator, alt: 'Calculator' }}
          label={'Calculator'}
          url={'/calculator'}
        />

        <Tile
          image={{ src: compare, alt: 'Compare' }}
          label={'Compare'}
          url={'/compare'}
        />

        <Tile
          image={{ src: products, alt: 'Products' }}
          label={'Products'}
          url={'/products'}
        />

        <Tile
          image={{ src: account, alt: 'Account' }}
          label={'Account'}
          url={'/account'}
        />
      </div>
    </>
  );
}
