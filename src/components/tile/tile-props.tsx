import { ImageProps } from 'next/image';

export default interface TileProps {
  image: ImageProps;
  label: string;
  url: string;
}
