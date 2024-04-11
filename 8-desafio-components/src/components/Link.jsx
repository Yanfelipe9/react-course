export const Link = ({ text, href }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};
