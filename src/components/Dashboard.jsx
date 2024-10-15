import Lights from './Lights';
import Climate from './Climate';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Lights />
      <Climate />
    </main>
  );
};

export default Dashboard;
