import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }}>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>🔐 تسجيل الدخول</Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>📝 إنشاء حساب</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>ℹ️ معلومات</Link>
    </nav>
  );
}

export default Navbar;