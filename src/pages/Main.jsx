import Slider from "../components/Slider";
import BottomNavbar from "../components/BottomNavbar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="h-screen w-screen flex overflow-hidden bg-base-200">
      {/* Sidebar desktop */}
      <div className="hidden lg:block">
        <Slider />
      </div>

      {/* Main content - AÑADE ml-0 lg:ml-80 */}
      <div
        id="main-scroll"
        className="flex-1 h-full overflow-y-auto pb-16 lg:pb-0 lg:ml-80"
        >
        <Outlet />
        </div>

      {/* Bottom navbar mobile */}
      <BottomNavbar />
    </div>
  );
}

export default Main;