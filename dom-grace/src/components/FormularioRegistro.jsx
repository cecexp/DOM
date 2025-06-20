'use client';

export default function FormularioRegistro({ formData, handleChange, handleCheckboxChange, handleSubmit }) {
  return (
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
        <label style={{ display: "block", marginBottom: ".5rem" }}>Nombre:</label>
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
        <label style={{ display: "block", marginBottom: ".5rem" }}>Correo Electrónico:</label>
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
        <label style={{ display: "block", marginBottom: ".5rem" }}>Selecciona tu país:</label>
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
  );
}
