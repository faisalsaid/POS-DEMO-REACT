import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Main = ({ children }) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default Main;
