import React from 'react';
import ParentCard from "./components/ParentCard";


let App  = () => {
  return (
    <React.Fragment>
     <nav className="navbar navbar-dark bg-dark navbar-expand-md">
         <div className="container">
         <a href="/" className="navbar-brand font-weight-bold">React Component Interaction</a>
         </div></nav>
        <ParentCard />
     </React.Fragment>
  );
}

export default App;
