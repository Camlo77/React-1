import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { getProfile, logout } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => logout());
  }, []);

  return (
    <div className="text-center mt-5">
      <h2>Mi perfil</h2>
      <p>Email: {profile ? profile.email : "Cargando..."}</p>
      <button className="btn btn-success" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;