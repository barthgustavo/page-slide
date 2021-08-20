import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Select from './pages/Select/Select';
import Result from './pages/Result/Result';
import Upload from './pages/Upload/Upload';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result/:videoId">
          <Result />
        </Route>
        <Route path="/select/:videoId">
          <Select />
        </Route>
        <Route path="/">
          <Upload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
