import React, { useState } from "react";
import { response1 } from "../response1";
import "../LeftList.css";

const LeftList = () => {
  const [expanded, setExpanded] = useState({});
  const categories = Object.keys(response1.categories || {});

  const toggleCategory = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderList = (obj, parentKey = "") => {
    return (
      <ul className="nested-list">
        {Object.keys(obj).map((key) => {
          const hasChildren = obj[key] && Object.keys(obj[key]).length > 0;
          return (
            <li key={`${parentKey}-${key}`}>
              <div
                className="list-item"
                onClick={() => hasChildren && toggleCategory(`${parentKey}-${key}`)}
              >
                {key}
                {hasChildren && (
                  <span className="dropdown-icon">
                    {expanded[`${parentKey}-${key}`] ? "-" : "+"}
                  </span>
                )}
              </div>
              {hasChildren &&
                expanded[`${parentKey}-${key}`] &&
                renderList(obj[key], `${parentKey}-${key}`)}
            </li>
          );
        })}
      </ul>
    );
  };


  return (
    <div className="left-list">
      <h3>Categories</h3>
      {categories.length > 0 ? (
        <ul className="nested-list">
          {categories.map((category) => (
            <li key={category}>
              <div
                className="list-item"
                onClick={() => toggleCategory(category)}
              >
                {category}
                {response1.categories[category] &&
                  Object.keys(response1.categories[category]).length > 0 && (
                    <span className="dropdown-icon">
                      {expanded[category] ? "-" : "+"}
                    </span>
                  )}
              </div>
              {expanded[category] &&
                renderList(response1.categories[category], category)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default LeftList;
