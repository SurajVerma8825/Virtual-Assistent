import { USER_API } from '@/assets/constrent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        // dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 font-poppins">
      <div className="w-full max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 space-y-6">
        <div>
          <h1 className="text-4xl font-serif font-extrabold text-white text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-300 text-center">
            Log in to your Gemini AI assistant
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-[#caa8ff] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {loading ? (
            <Button className="bg-[#6A38C2] hover:bg-[#4712a1] w-full text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#6A38C2] cursor-pointer hover:bg-[#4712a1] w-full text-white"
            >
              Login
            </Button>
          )}

          <p className="text-sm text-center text-gray-300">
            Don’t have an account?
            <Link
              to="/signup"
              className="text-[#a47bff] cursor-pointer font-semibold ml-2 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
