export type TSubmitFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset?: () => void;
  error?: boolean;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
};
