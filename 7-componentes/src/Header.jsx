export function Header({ text, children }) {
  return (
    <header>
      <h1>{text}</h1>
      {children}
    </header>
  );
}
