import { Link } from 'react-router-dom';
import { PersonCircle, BoxArrowRight } from 'react-bootstrap-icons';
import { useAuth } from '../context/AuthContext';
import "../css/FloatingLogin.css"

function FloatingLogin() {
  const { usuario, estaAutenticado, logout } = useAuth();

  if (estaAutenticado) {
    const inicial = usuario?.nombre?.charAt(0).toUpperCase() ?? '?';

    return (
      <div className="floating-login-wrapper">
        <div className="floating-avatar" title={usuario?.nombre}>
          <span className="floating-login-initial">{inicial}</span>

          <button
            onClick={logout}
            className="floating-logout-btn"
            title="Cerrar sesión"
          >
            <BoxArrowRight />
          </button>
        </div>
        <span className="floating-login-initial">{`${usuario?.nombre}`}</span>
      </div>
    );
  }

  return (
    <div className="floating-login-wrapper">
      <Link to="/login" className="floating-login-link" title="Iniciar Sesión">
        <span className="floating-login-label">Iniciar sesión</span>
        <span className="floating-login-btn">
          <PersonCircle size={32} />
        </span>
      </Link>
    </div>
  );
}

export default FloatingLogin;