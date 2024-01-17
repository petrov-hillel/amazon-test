import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Accounts from "./components/Accounts/AccountsTable";
import Profiles from './components/Profiles/ProfilesTable';
import Campaigns from './components/Campaigns/CampaignsTable';
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accounts/" element={<Accounts />} />
                <Route path="/profiles/:id" element={<Profiles />} />
                <Route path="/campaigns/:id" element={<Campaigns />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;