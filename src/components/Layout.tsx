import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:w-1/4 bg-gray-800 text-white p-4 md:min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/charts-maps" className="hover:text-gray-400">
                Charts and Maps
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white bg-gray-800 p-2 absolute top-4 left-4"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar for mobile screens */}
      <aside
        className={`fixed inset-0 bg-gray-800 text-white p-4 md:hidden transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-white absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400"
                onClick={handleLinkClick}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/charts-maps"
                className="hover:text-gray-400"
                onClick={handleLinkClick}
              >
                Charts and Maps
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={`flex-1 p-8 ${isSidebarOpen ? "hidden md:block" : ""}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
