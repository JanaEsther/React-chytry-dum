import Dashboard from '../../components/Dashboard';
import Header from '../../components/Header';
import './style.css';
import 'smartHomeData';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Dashboard/>
      {/* ↓↓↓ Zde z komponent poskládej svůj chytrý dům ↓↓↓ */}
    </div>
  );
};
