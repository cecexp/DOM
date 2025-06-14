export default function Home() {
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
        Navbar
      </nav>

      <aside style={{
        gridArea: "sidebar",
        backgroundColor: "#F4F4F4",
        padding: "2rem",
        color: "#838383",
      }}>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact US</li>
        </ul>
      </aside>

      <main style={{
        gridArea: "main",
        padding: "1rem",
        backgroundColor: "white",
        color: "black",
      }}>
        <h1>Main Content</h1>
        <p>This area shows the primary content of the page.</p>
        <div className="bg-[url('/imagen.png')] bg-cover bg-center w-full h-screen"></div>
      </main>

      <footer style={{
        gridArea: "footer",
        backgroundColor: "#555555",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        fontWeight: "bold",
      }}>
        Footer - Contact info or copyright
      </footer>
    </div>
  );
}
