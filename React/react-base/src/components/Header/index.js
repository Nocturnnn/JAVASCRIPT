import { FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.exampleReducer.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaSignOutAlt size={24} />
      </Link>
      {botaoClicado ? (
        <p style={{ color: 'red' }}>Botão clicado</p>
      ) : (
        <p style={{ color: 'red' }}>Botão não clicado</p>
      )}
    </Nav>
  );
}
