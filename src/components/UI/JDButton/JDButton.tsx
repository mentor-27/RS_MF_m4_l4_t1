import { TJDButtonProps } from '../types.ts';

import styles from './JDButton.module.css';

export const JDButton: React.FC<TJDButtonProps> = ({
  className,
  children,
  type,
}) => {
  return (
    <button type={type} className={className + ' ' + styles.buttonRoot}>
      <span className={styles.buttonInner}>
        <span className={styles.buttonLabel}>{children}</span>
      </span>
    </button>
  );
};
