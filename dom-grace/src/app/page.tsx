'use client';

import { useState } from 'react';
import FormularioRegistro from '../components/FormularioRegistro';

export default function Home() {
  const [formData1, setFormData1] = useState({
    nombre: '',
    email: '',
    pais: '',
    terminos: false
  });

  const [formData2, setFormData2] = useState({
    nombre: 'Empresa S.A.',
    email: 'contacto@empresa.com',
    pais: 'mx',
    terminos: true
  });

  const makeHandlers = (formData, setFormData, nombreFormulario) => ({
    handleChange: (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    handleCheckboxChange: (e) => {
      const { name, checked } = e.target;
      setFormData(prev => ({ ...prev, [name]: checked }));
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Error en la solicitud');

        const result = await response.json();
        console.log(`✔️ Formulario "${nombreFormulario}" enviado:`, result);
        alert(`✔️ Formulario "${nombreFormulario}" enviado correctamente`);
      } catch (error) {
        console.error(`❌ Error al enviar el formulario "${nombreFormulario}":`, error);
        alert(`❌ Error al enviar el formulario "${nombreFormulario}"`);
      }
    }
  });

  const handlers1 = makeHandlers(formData1, setFormData1, 'Usuario');
  const handlers2 = makeHandlers(formData2, setFormData2, 'Empresa');

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

        {/* Primer formulario con imagen */}
        <div style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: "4rem"
        }}>
          <FormularioRegistro
            formData={formData1}
            {...handlers1}
          />

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

        {/* Segundo formulario sin imagen, con datos distintos */}
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Registro Empresarial</h2>
          <FormularioRegistro
            formData={formData2}
            {...handlers2}
          />
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
