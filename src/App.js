import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Feed, Channels, Search, VideoDetails } from "./components";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<Channels />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
