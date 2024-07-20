import React, { useContext } from "react";
import "../assets/style/navi.scss";
import DataContext from "../context/DataContext";
import { NavLink, Outlet } from "react-router-dom";

const Navi = () => {
  const { companyName } = useContext(DataContext);
  return (
    <>
      <nav>
        <div className="brand">
          <h3>{companyName}</h3>
        </div>
        <ul className="liste">
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#088395" : "white",
              })}
              to="Header"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="RecipeList">Recipe List</NavLink>
          </li>
          <li>
            <NavLink to="AddRecipe">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="About">About Us</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navi;
