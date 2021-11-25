import { useState } from "react/cjs/react.development";


export const UserForm = ({ user, setUser }) => {
    const [nombre, setNombre] = useState("");
    const [mail1, setMail1] = useState("");
    const [mail2, setMail2] = useState("");
  
    const handleNombre = (e) => setNombre(e.target.value);
    const handleMail1 = (e) => setMail1(e.target.value);
    const handleMail2 = (e) => setMail2(e.target.value);
  
    const verificarEmail = (mail1, mail2, nombre) => {
      if (mail1 === mail2) {
        setUser({
          name: nombre,
          mail: mail1,
        });
      } else {
        alert("Los emails no coinciden");
      }
    };
    return (
        <div className="orderContainer">
          {user.name ? <h3>Bienvenido</h3> : <h3>Logueate para comprar</h3>}
          {user.name ? (
            <div className="userName">{user.name}</div>
          ) : (
            <div className="userForm">
              <input
                type="name"
                placeholder="Nombre"
                onChange={handleNombre}
                value={nombre}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handleMail1}
                value={mail1}
              />
              <input
                type="email"
                placeholder="Repetir Email"
                onChange={handleMail2}
                value={mail2}
              />
              <button
                className="login"
                onClick={() => {
                    verificarEmail(mail1, mail2, nombre);
                }}
              >
                Ingresar
              </button>
            </div>
          )}
        </div>
      );
    };