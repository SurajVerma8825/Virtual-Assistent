import { USER_API } from '@/assets/constrent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log('user:- ', user);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API}/signup`, formData, {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 font-poppins">
      <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-3xl overflow-hidden">
        <form
          className="w-full p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-extrabold text-white text-center tracking-wide font-serif">
            Create Account
          </h1>

          <p className="text-center text-sm text-gray-300 mb-4">
            Welcome to your AI assistant powered by Gemini
          </p>

          <div>
            <Label className="text-white mb-2">Full Name</Label>
            <Input
              className="bg-white/20 text-white placeholder:text-gray-300"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="text-white mb-2">Email</Label>
            <Input
              className="bg-white/20 text-white placeholder:text-gray-300"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="text-white mb-2">Password</Label>
            <Input
              className="bg-white/20 text-white placeholder:text-gray-300"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {loading ? (
            <Button className="bg-[#6A38C2] hover:bg-[#4712a1] text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#6A38C2] cursor-pointer hover:bg-[#4712a1] text-white transition duration-300"
            >
              Sign up
            </Button>
          )}

          <p className="text-sm text-center text-gray-300 mt-2">
            Already have an account?
            <Link
              to="/login"
              className="text-[#a47bff] font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
