import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeeup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/NewMeetup">
            <NewMeeup />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
