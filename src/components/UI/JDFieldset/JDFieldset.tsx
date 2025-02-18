import { TJDFieldsetProps } from '../types';

import styles from './JDFieldset.module.css';

export const JDFieldSet: React.FC<TJDFieldsetProps> = ({
  className,
  children,
  legend,
}) => {
  return (
    <fieldset className={className + ' ' + styles.fieldsetRoot}>
      {legend && <legend className={styles.fieldsetLegend}>{legend}</legend>}
      {children}
    </fieldset>
  );
};
