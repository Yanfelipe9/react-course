import { Link } from "./Link"

export const Header = () => {
  return (
    <ul>
      <Link text='Home' href='/'/>
      <Link text='Produtos' href='/produtos'/>
    </ul>
  )
}
