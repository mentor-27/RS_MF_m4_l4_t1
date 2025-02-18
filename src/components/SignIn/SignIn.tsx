import { AtSign, Hash } from 'lucide-react';

import { JDButton, JDFieldSet, JDTextInput } from '../../components/UI';
import { TSubmitFormProps } from '../types';
import styles from './SignIn.module.css';

export const SignIn: React.FC<TSubmitFormProps> = ({ onSubmit }) => {
  return (
    <JDFieldSet legend="Login form">
      <form className={styles.formBlock} onSubmit={onSubmit}>
        <JDTextInput
          type="email"
          name="email"
          placeholder="Email"
          rightSection={<AtSign size={16} />}
          required
        />
        <JDTextInput
          type="password"
          name="password"
          placeholder="Password"
          rightSection={<Hash size={16} />}
          required
        />
        <JDButton type="submit">Sign In</JDButton>
      </form>
    </JDFieldSet>
  );
};
