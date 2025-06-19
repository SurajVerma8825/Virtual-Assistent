import { USER_API } from '@/assets/constrent';
import { setAuthUser } from '@/Redux/Slices/authSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${USER_API}/getUser`, {
        withCredentials: true,
      });
      dispatch(setAuthUser(res.data.user));
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>User not found or not logged in</div>;

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <p>Name: {user.name }</p>
      </div>
    </div>
  );
};

export default Home;
