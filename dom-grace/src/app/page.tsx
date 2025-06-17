'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: '',
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    console.log(formData);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateAreas: `"navbar navbar"
                          "sidebar main"
                          "footer footer"`,
      gridTemplateColumns: "200px 1fr",
      gridTemplateRows: "auto 1fr auto",
      height: "100vh"
    }}>
      <nav style={{
        gridArea: "navbar",
        backgroundColor: "#1C1C1C",
        color: "white",
        padding: "1rem"
      }}>
        MyPage
      </nav>

      <aside style={{
        gridArea: "sidebar",
        backgroundColor: "#F4F4F4",
        padding: "2rem",
        color: "#838383",
      }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>About Us</li>
          <li style={{ marginBottom: "1rem" }}>Blog</li>
          <li>Contact Us</li>
        </ul>
      </aside>

      <main style={{
        gridArea: "main",
        padding: "2rem",
        backgroundColor: "#ffffff",
        color: "#333",
        overflowY: "auto"
      }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Formulario de Registro</h1>

        <div style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#F9F9F9",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "450px",
              flex: "1"
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: ".5rem" }}>
                Nombre:
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: ".5rem" }}>
                Correo Electrónico:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: ".5rem" }}>
                Selecciona tu país:
              </label>
              <select
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }}
              >
                <option value="">Selecciona</option>
                <option value="mx">México</option>
                <option value="us">Estados Unidos</option>
              </select>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>
                <input
                  type="checkbox"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={handleCheckboxChange}
                  style={{ marginRight: ".5rem" }}
                />
                ¿Aceptas los términos?
              </label>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#1C1C1C",
                color: "#fff",
                padding: ".75rem 1.5rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Enviar
            </button>
          </form>

          <div
            style={{
              backgroundImage: "url('/imagen.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "450px",
              height: "350px",
              flex: "1",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          ></div>
        </div>
      </main>

      <footer style={{
        gridArea: "footer",
        backgroundColor: "#555555",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        Footer - Contact info or copyright
      </footer>
    </div>
  );
}
