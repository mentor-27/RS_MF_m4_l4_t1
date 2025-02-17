import { TJDRadioProps } from '../types.ts';

import styles from './JDRadio.module.css';

export const JDRadio: React.FC<TJDRadioProps> = ({
  id = 'jd-radio_'.concat(Math.random().toString().slice(2)),
  name,
  value,
  label,
  defaultChecked,
}) => {
  return (
    <div className={styles.radioRoot}>
      <div className={styles.radioBody}>
        <input
          className={styles.radioElem}
          id={id}
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 5 5"
          aria-hidden="true"
          className={styles.radioELemDot}
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"></circle>
        </svg>
      </div>
      <div className={styles.radioLabelWrapper}>
        {label && (
          <label className={styles.radioLabel} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};
