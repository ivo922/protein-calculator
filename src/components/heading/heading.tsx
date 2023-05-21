import React from 'react';
import styles from './heading.module.css';
import HeadingProps from './heading-props';

const Heading = ({ children }: HeadingProps) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
