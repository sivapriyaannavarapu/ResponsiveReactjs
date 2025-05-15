
// import React, { useState, useEffect } from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import TopBar from './Components/Topbar';
// import Sidebar from './Components/Sidebar';
// import Student from './Components/Students';
// import State from './Components/State';
// import AddField from './Components/AddField';

// import './App.css';

// function App() {
//   // State for managing all "states" (initially empty)
//   const [states, setStates] = useState(() => {
//     const storedStates = localStorage.getItem('states');
//     return storedStates ? JSON.parse(storedStates) : [
//       { id: 1, name: "ADIT 1", country: "Adithya", status: "Residential", date: "126" },
//       { id: 2, name: "ADIT 2", country: "Adithya", status: "Residential", date: "126" },
//     ];
//   });

//   const handleAddState = (newState) => {
//     setStates(prevStates => [...prevStates, newState]);
//   };

//   // Update localStorage whenever states change
//   useEffect(() => {
//     localStorage.setItem('states', JSON.stringify(states));
//   }, [states]);

//   return (
//     <BrowserRouter>
//       <div className="app">
//         <TopBar />
//         <div className="content">
//           <div className="sidebar-container">
//             <Sidebar />
//           </div>
//           <div className="main-content">
//             <Routes>
//               <Route path="/students" element={<Student />} />
//               <Route path="/state" element={<State states={states} />} />
//               <Route path="/add-field" element={<AddField onAddState={handleAddState} />} />

//               {/* Add other routes here if needed */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Student from './Components/Students';
import State from './Components/State';
import AddField from './Components/AddField';
import Footer from './Components/Footer';

import './App.css';

function App() {
  // State for managing "states" data
  const [states, setStates] = useState(() => {
    const storedStates = localStorage.getItem('states');
    return storedStates ? JSON.parse(storedStates) : [];
  });
  // Add a new state and update the state list
  const handleAddState = (newState) => {
    setStates((prevStates) => [...prevStates, newState]);
  };

  // Keep states synchronized with localStorage
  useEffect(() => {
    localStorage.setItem('states', JSON.stringify(states));
  }, [states]);

  return (
    <BrowserRouter>
      <div className="app">
        {/* Top Navigation Bar */}
        <TopBar />
        <div className="content">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="main-content">
            <Routes>
              {/* Route for Students Page */}
              <Route path="/students" element={<Student />} />

              {/* Route for State Page */}
              <Route path="/state" element={<State states={states} />} />

              {/* Route for Add Field Page */}
              <Route path="/add-field" element={<AddField onAddState={handleAddState} />} />

              {/* Additional routes can be added here */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;