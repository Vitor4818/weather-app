import styles from './page.module.css'

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

{
  /* <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton> */
}