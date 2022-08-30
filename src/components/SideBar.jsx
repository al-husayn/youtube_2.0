import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

const activeCategory = "New";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overFlowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}>
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.activeCategory === activeCategory && "#FC1503",
            color: "#fff",
          }}
          key={category.name}>
          <span style={{color: category.name === activeCategory ? '#fff': 'red', marginRight: '15px'}}>{category.icon}</span>
          <span style={{opacity: category.name === activeCategory ? '1': '0.9'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
