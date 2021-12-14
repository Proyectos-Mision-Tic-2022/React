import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "layouts/Layout";
import Bordercollie from "pages/bordercollie";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/rhodesian" exact>
              <RhodesianInfoPage />
            </Route>
            <Route path="/bordercollie" exact>
              <Bordercollie />
            </Route>
            <Route path="/" exact>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
