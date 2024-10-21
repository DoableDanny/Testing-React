function ButtonWrapper({ title, ...props }) {
  return <button {...props}>{title}</button>;
}

export default ButtonWrapper;
