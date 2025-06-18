import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header className="p-4 bg-gray-200">My App Header</header>
      <main className="p-6">
        <Outlet /> {/* Yeh jagah pe child routes render honge */}
      </main>
    </div>
  );
};

export default App;
