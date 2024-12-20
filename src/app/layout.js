import Sidebar from "./components/Sidebar";
import "./globals.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex">
          <ToastContainer />
          <Sidebar />
          <div className="flex-1 h-screen p-4">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}
