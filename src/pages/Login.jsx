import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔐 تسجيل الدخول</h1>
      <form>
        <input type="email" placeholder="البريد الإلكتروني" style={{ padding: '8px', width: '200px' }} />
        <br /><br />
        <input type="password" placeholder="كلمة المرور" style={{ padding: '8px', width: '200px' }} />
        <br /><br />
        <button style={{ padding: '8px 20px', cursor: 'pointer' }}>دخول</button>
      </form>
      <p>ليس لديك حساب؟ <Link to="/register">سجل الآن</Link></p>
    </div>
  );
}

export default Login;