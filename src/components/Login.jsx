import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarDatos = (e) => {
    e.preventDefault();

    setError('');
    setExito('');

    if (!email.trim() || !password.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('El email no tiene un formato valido');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setExito('Login exitoso!');
  };

  return (
    <>
      <form onSubmit={validarDatos}>
        {error ? <div className="alert alert-danger">{error}</div> : null}
        {exito ? <div className="alert alert-success">{exito}</div> : null}

        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login;