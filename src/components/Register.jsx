import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarDatos = (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("El email no tiene un formato válido");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setExito("¡Registro exitoso!");
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

        <label>Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};
export default Register;