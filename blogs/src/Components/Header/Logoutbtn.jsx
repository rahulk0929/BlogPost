import React from "react";
import { logout } from "../../store/Authslice.js";
import authService from "../../Appwrite/Auth.js";
import { useDispatch } from "react-redux";

function Logoutbtn() {
    const dispatch=useDispatch()
    const handleLogout =async()=>{
        try {
            await authService.logout();
            dispatch(logout())
        } catch (error) {
             console.error("Logout failed:", error);
        }
    }
  return (
 
      <button
        onClick={handleLogout}
        className="block py-2 px-3 rounded md:p-0 text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400"
      >
        Logout
      </button>
 
  );
}

export default Logoutbtn;
