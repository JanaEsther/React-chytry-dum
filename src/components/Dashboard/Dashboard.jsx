import React from 'react';
import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';
import Blinds from '../Blinds/Blinds';
import Energy from '../Energy/Energy';
import './Dashboard.css';

const Dashboard = ({ data }) => {
  console.log('Dashboard data:', data);

  return (
    <main className="dashboard">
      <Lights data={data.lights} />
      <Climate data={data.climate} />
      <Blinds data={data.blinds} />
      <Energy data={data.energyConsumption} />
    </main>
  );
};

export default Dashboard;
