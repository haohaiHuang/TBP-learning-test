import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, User, Target } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isCaseStudy = location.pathname === "/comprehensive-test";
  const isProfile = location.pathname === "/profile";
  
  const showBottomNav = isHome || isCaseStudy || isProfile;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl overflow-hidden flex flex-col font-sans">
      <div className={`flex-1 overflow-y-auto ${showBottomNav ? 'pb-[68px]' : ''}`}>
        <Outlet />
      </div>

      {showBottomNav && (
        <div className="absolute bottom-0 w-full h-[68px] bg-white border-t border-gray-100 flex items-center justify-around z-50 pb-2 pt-1">
          <button
            onClick={() => navigate("/")}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              isHome ? "text-primary" : "text-gray-400 hover:text-primary"
            }`}
          >
            <Home size={22} strokeWidth={isHome ? 2.5 : 2} />
            <span className="text-[10px] font-medium">学习</span>
          </button>
          
          <button
            onClick={() => navigate("/comprehensive-test")}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              isCaseStudy ? "text-orange-500" : "text-gray-400 hover:text-orange-500"
            }`}
          >
            <Target size={22} strokeWidth={isCaseStudy ? 2.5 : 2} />
            <span className="text-[10px] font-medium">实战</span>
          </button>

          <button
            onClick={() => navigate("/profile")}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              isProfile ? "text-primary" : "text-gray-400 hover:text-primary"
            }`}
          >
            <User size={22} strokeWidth={isProfile ? 2.5 : 2} />
            <span className="text-[10px] font-medium">我的</span>
          </button>
        </div>
      )}
    </div>
  );
}
