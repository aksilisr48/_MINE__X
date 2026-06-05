import './globals.css';

export const metadata = {
  title: 'OCP · Horizon View',
  description: 'OCP Horizon View dashboard converted from the original HTML project.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
