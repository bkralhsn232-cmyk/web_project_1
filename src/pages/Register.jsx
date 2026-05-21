import { Link } from 'react-router-dom';

function Register() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>📝 إنشاء حساب</h1>
      <form>
        <input type="text" placeholder="الاسم الكامل" style={{ padding: '8px', width: '200px' }} />
        <br /><br />
        <input type="email" placeholder="البريد الإلكتروني" style={{ padding: '8px', width: '200px' }} />
        <br /><br />
        <input type="password" placeholder="كلمة المرور" style={{ padding: '8px', width: '200px' }} />
        <br /><br />
        <button style={{ padding: '8px 20px', cursor: 'pointer' }}>تسجيل</button>
      </form>
      <p>لديك حساب؟ <Link to="/login">تسجيل الدخول</Link></p>
    </div>
  );
}

export default Register;