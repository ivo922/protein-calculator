import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.css';

import calculator from '../../../public/images/calculator.svg';
import compare from '../../../public/images/compare.svg';
import logo from '../../../public/images/logo.svg';
import products from '../../../public/images/products.svg';
import account from '../../../public/images/account.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="header__inner">
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={'/calculator'}>
                <Image
                  priority
                  src={calculator}
                  alt={'Protein calculator icon'}
                />
              </Link>
            </li>

            <li>
              <Link href={'/compare'}>
                <Image priority src={compare} alt={'Compare products icon'} />
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                <Image priority src={logo} alt={'Protein calculator logo'} />
              </Link>
            </li>

            <li>
              <Link href={'/products'}>
                <Image priority src={products} alt={'Products icon'} />
              </Link>
            </li>

            <li>
              <Link href={'/account'}>
                <Image priority src={account} alt={'Account icon'} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
