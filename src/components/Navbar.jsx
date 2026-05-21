import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px 15px 30px 15px',
      backgroundColor: '#0f0512',
      backgroundImage: 'linear-gradient(to bottom, #0f0512 70%, #2b1233 92%, #1c0a21 100%)',
      borderBottom: '1px solid #2d1336',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
      <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>🏠 الرئيسية</Link>
      <Link to="/login" style={{ color: '#e5daf0', textDecoration: 'none', fontSize: '18px' }}>🔐 تسجيل الدخول</Link>
      <Link to="/register" style={{ color: '#e5daf0', textDecoration: 'none', fontSize: '18px' }}>📝 إنشاء حساب</Link>
      <Link to="/about" style={{ color: '#e5daf0', textDecoration: 'none', fontSize: '18px' }}>ℹ️ معلومات</Link>
    </nav>
  );
}

export default Navbar;