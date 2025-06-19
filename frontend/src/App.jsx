import { Outlet } from 'react-router-dom';
import { Navbar } from './Index';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar />
      <main className="p-">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
