import React, { useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  return (
    <>
      <Sidebar />
      <h2>THis is sidebar</h2>
      {/* <Outlet /> */}
    </>
  );
};

export default Dashboard;
