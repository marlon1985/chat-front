// root-layout.js o root-layout.tsx

export const metadata = {
  title: "Chat app",
  description: "Aplicación de chat en tiempo real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Título de la página y descripción definidos en metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}

