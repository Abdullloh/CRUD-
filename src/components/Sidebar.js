import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer } from "../styles/sidebarStyle";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavLink to="/post-list">Post List</NavLink>
      <NavLink to="/add-post">Add Post</NavLink>
    </SidebarContainer>
  );
}
