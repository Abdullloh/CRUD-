import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer } from "../styles/sidebarStyle";

export default function Sidebar({setOpen}) {
  return (
    <SidebarContainer>
      <NavLink onClick={()=>setOpen(false)} to="/post-list">Post List</NavLink>
      <NavLink onClick={()=>setOpen(false)} to="/add-post">Add Post</NavLink>
    </SidebarContainer>
  );
}
