import { USER_API } from '@/assets/constrent';
import { Button } from '@/components/ui/button';
import { setAuthUser } from '@/Redux/Slices/authSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${USER_API}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        toast.success(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between text-white font-poppins">
        <Link to="/" className="text-2xl font-bold font-serif tracking-wide">
          Gemini AI
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            {/* Profile Circle */}
            <Avatar className="bg-[#6A38C2] rounded-full text-white font-semibold w-10 h-10 shadow-md hover:shadow-[#caa8ff]/50 transition-shadow duration-300">
              <AvatarImage src="" alt={user?.name} />
              <AvatarFallback className="uppercase text-white font-bold flex items-center justify-center w-full h-full cursor-pointer">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* Logout Button */}
            <Button
              variant="outline"
              className="border-white/40 text-black hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
              onClick={handleLogout}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Please wait...</span>
                </>
              ) : (
                'Logout'
              )}
            </Button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/signup">
              <Button
                variant="outline"
                className="border-white/40 text-black hover:bg-white/10 hover:text-white cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-[#6A38C2] hover:bg-[#4712a1] text-white cursor-pointer">
                Login
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
