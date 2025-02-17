import { AtSign, Glasses, Hash, User, VenusAndMars } from 'lucide-react';

import { JDButton, JDFieldSet, JDRadio, JDTextInput } from '../UI';
import { TSubmitFormProps } from '../types.ts';
import styles from './SignUp.module.css';

export const SignUp: React.FC<TSubmitFormProps> = ({
  onSubmit,
  error,
  setError,
}) => {
  return (
    <JDFieldSet legend="Registration form">
      <form className={styles.formBlock} onSubmit={onSubmit}>
        <JDTextInput
          type="text"
          name="name"
          placeholder="Name"
          rightSection={<User size={16} />}
          required
        />
        <JDTextInput
          type="text"
          name="nickname"
          placeholder="Nickname"
          rightSection={<Glasses size={16} />}
          required
        />
        <JDTextInput
          type="email"
          name="email"
          placeholder="Email"
          rightSection={<AtSign size={16} />}
          required
        />
        <JDFieldSet
          className={styles.radioBlock}
          legend={<VenusAndMars size={16} />}
        >
          <JDRadio value="male" label="Male" name="gender" defaultChecked />
          <JDRadio value="female" label="Female" name="gender" />
        </JDFieldSet>
        <JDTextInput
          type="password"
          name="password"
          placeholder="Password"
          rightSection={<Hash size={16} />}
          error={error}
          required
          onChange={() => setError?.(false)}
        />
        <JDTextInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          rightSection={<Hash size={16} />}
          error={error}
          required
          onChange={() => setError?.(false)}
        />
        <JDButton type="submit">Sign Up</JDButton>
      </form>
    </JDFieldSet>
  );
};
