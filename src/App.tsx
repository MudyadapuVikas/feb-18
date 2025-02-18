import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteStudent from "./componets/DeleteStudent";
import AddStudent from "./componets/AddStudent";
import SearchStudent from "./componets/SearchStudent";
import DisplayAll from "./componets/DisplayAll";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/s-add" element={<AddStudent />} />
          <Route path="/del" element={<DeleteStudent />} />
          <Route path="/search" element={<SearchStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}