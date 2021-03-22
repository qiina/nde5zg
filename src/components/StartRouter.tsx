import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import Index from './pages/Index'
  
  export function StartRouters() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
        </div>
      </Router>
    );
  }