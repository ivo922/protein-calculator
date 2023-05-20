import styles from './tile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TileProps from './tile-props';

const Tile = (props: TileProps) => {
  return (
    <Link className={styles['tile']} href={props.url}>
      <div className={styles['image']}>
        <Image
          priority
          src={props.image.src}
          alt={props.image.alt}
          width="140"
          height="140"
        />
      </div>

      <p className={styles['label']}>{props.label}</p>
    </Link>
  );
};

export default Tile;
