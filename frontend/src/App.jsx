import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FetchConfig from './pages/FetchConfig';
import UpdateRemark from './pages/UpdateRemark';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>FullStack Assignment</h1>
      <nav>
        <Link to="/">Fetch Config</Link> |{" "}
        <Link to="/update">Update Remark</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FetchConfig />} />
        <Route path="/update" element={<UpdateRemark />} />
      </Routes>
    </div>
  );
}
