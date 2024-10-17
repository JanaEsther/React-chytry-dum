import Dashboard from '../../components/Dashboard';
import Header from '../../components/Header/Header';
import smartHomeData from '../../smartHomeData';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Dashboard data={smartHomeData} />
      /* ↓↓↓ Zde z komponent poskládej svůj chytrý dům ↓↓↓ */
    </div>
  );
};
