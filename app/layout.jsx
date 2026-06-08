import './globals.css';

export const metadata = {
  title: 'OCP - MINE X',
  description: 'MINE X dashboard converted from the original HTML project.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
