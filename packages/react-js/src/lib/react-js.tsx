import { clientJs } from '@palico-ai/client-js-alpha';
import styles from './react-js.module.css';

/* eslint-disable-next-line */
export interface ReactJsProps {}

export function ReactJs(props: ReactJsProps) {
  const client = clientJs();
  console.log(client);

  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactJs!</h1>
    </div>
  );
}

export default ReactJs;