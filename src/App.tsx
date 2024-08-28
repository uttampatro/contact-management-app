import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import Layout from './components/Layout';
import ChartsMaps from './pages/ChartsMaps';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/create" element={<CreateContact />} />
                    <Route path="/edit/:id" element={<EditContact />} />
                    <Route path="/charts-maps" element={<ChartsMaps />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
