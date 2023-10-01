import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
    const {user}=useAuthContext()
    const {logout}=useLogout()
    const handleClick=()=>{
        logout()
    }
  return (
    <header>
      <div className="container">
        <h2>Workout Body</h2>

        <nav>
           {user && <div>

            <span>{user.email}</span>
            
                <button onClick={handleClick}>Log Out</button>
           
            </div>
            }
            

          {!user && (<div>
            <Link to="/login">Login</Link>
            <Link to="/Signup">Sign up</Link>
          </div>)}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
