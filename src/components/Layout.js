import React, { useState } from 'react';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {

  const [isactive, setIsactive] = useState(false);

  return (
    <>
      <SideMenu onCollapse={(isactive)=>{setIsactive(isactive)}} />
      <div className={`container-dashboard ${(isactive) ? "isactive" : ""}`}> 
        {children}
      </div>
    </>
  )
}

export default Layout;
