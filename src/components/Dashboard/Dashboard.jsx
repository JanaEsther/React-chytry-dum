import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Lights />
      <Climate />
      <Blinds />
      <Energy />
    </main>
  );
};

export default Dashboard;
