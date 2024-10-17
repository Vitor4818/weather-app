import styles from './page.module.css'

interface InputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  id,
  name,
  label,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        {...rest}
      />
    </>
  );
};