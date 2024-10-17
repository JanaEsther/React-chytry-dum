import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';
import Blinds from '../Blinds/Blinds';
import Energy from '../Energy';
import './Dashboard.css';

const Dashboard = ({data}) => {
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
