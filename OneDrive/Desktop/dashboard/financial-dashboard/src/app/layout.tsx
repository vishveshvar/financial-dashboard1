import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/layout.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
