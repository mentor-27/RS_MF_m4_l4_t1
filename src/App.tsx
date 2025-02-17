import { FormEvent, useEffect, useState } from 'react';

import { SignIn, SignUp } from './components';

import styles from './App.module.css';

function App() {
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if (formData.has('confirmPassword')) {
      if (formData.get('password') !== formData.get('confirmPassword')) {
        setError(true);
        return;
      }
    }
    setFields(Object.fromEntries(formData));
    (e.target as HTMLFormElement).reset();
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <div className={styles.wrapper}>
      <h1>What's up? 🙂</h1>
      <div className={styles.block}>
        <SignIn onSubmit={onSubmit} />
        <SignUp onSubmit={onSubmit} error={error} setError={setError} />
      </div>
    </div>
  );
}

export default App;
