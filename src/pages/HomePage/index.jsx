import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import smartHomeData from '../../smartHomeData';
import './style.css';
/* ↓↓↓ Zde z komponent poskládej svůj chytrý dům ↓↓↓ */
export const HomePage = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  );
};
