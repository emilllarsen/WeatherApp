import { Outlet } from "react-router";
import { Navbar } from "../components/NavBar/Navbar";
export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
