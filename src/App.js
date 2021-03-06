import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactSession } from "react-client-session";
// import 'bootstrap/dist/css/bootstrap.css';
import './resources/css/custom.css';
import ListAll from "./list-all-nft/ListAll";
import GetDetails from "./list-all-nft/GetDetails";
import CustomLogin from "./login-with-nft/CustomLogin";
import SamplePage from "./login-with-nft/SamplePage";
import Create from "./create-nft/Create";
import CheckNft from "./check-nft/CheckNft";
import LandingPage from "./LandingPage";
import CreateToken from "./create-tokens/CreateToken";
import MintToken from "./mint-tokens/MintToken";

function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/list-all" element={<ListAll />} />
          <Route exact path="/get-details" element={<GetDetails />} />
          <Route exact path="/nft-login" element={<CustomLogin />} />
          <Route exact path="/sample-page" element={<SamplePage />} />
          <Route exact path="/create-new" element={<Create />} />
          <Route exact path="/check" element={<CheckNft />} />
          <Route exact path="/create-token" element={<CreateToken />} />
          <Route exact path="/mint-token" element={<MintToken />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
