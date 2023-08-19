// // App.js
// import React from 'react';
// import TodoApp from './todoapp';
// import WeatherApp from './weatherapp';

// function App() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1 }}>
//         <TodoApp />
//       </div>
//       <div style={{ flex: 1 }}>
//         <WeatherApp />
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import TodoApp from './todoapp';
import WeatherApp from './weatherapp';
import './App.css'; // Import the CSS 
import SarufiChatbox from "react-sarufi-chatbox"
  
// usage

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">All Purpose App</h1>
      <div className="apps-wrapper">
        <div className="app">
          <TodoApp />
          {/* <TodoApp /> */}
        </div>
        <div className="app">
          <WeatherApp />
          <SarufiChatbox botId={1985} />
        </div>
      </div>
    </div>
  );
}

export default App;

