DOM Website Prototype

This project is a simple website prototype built with Next.js (App Router). It visually represents the basic structure of the DOM (Document Object Model) using fundamental components and a grid-based layout.

Key Features

- Navbar – Top navigation bar  
- Sidebar – Left-hand panel with internal links  
- Main container – Central area with forms and image  
- Footer – Bottom section with additional information  

---

DOM Structure (Grid Layout)

The layout uses CSS Grid to divide the page into 4 main areas:

| Area     | Description                                  |
|----------|----------------------------------------------|
| navbar   | Top section for general navigation           |
| sidebar  | Left section for internal navigation links   |
| main     | Central content with form(s) and background image |
| footer   | Bottom area with contact or legal info       |

---

Reusable Components

The form has been modularized into a reusable React component:



src/
├── app/
│   └── page.jsx           # Main page with layout and forms
├── components/
│   └── FormularioRegistro.jsx  # Reusable form component
public/
└── imagen.png             # Image used alongside the main form
