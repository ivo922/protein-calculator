import styles from './page.module.css';
import Heading from '@/components/heading/heading';
import ProteinCalculator from '@/components/protein-calculator/protein-calculator';

export default function Page() {
  return (
    <>
      <Heading>
        <h1>Protein<br />Calculator</h1>
      </Heading>

      <ProteinCalculator />
    </>
  );
}
