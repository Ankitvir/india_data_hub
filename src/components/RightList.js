import React from "react";
import "../RightList.css"; // Add custom styles here
import { response1 } from "../response1";

const RightList = () => {
  return (
    <div className="right-list">
      <h3>New Releases</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>New Releases</th>
              <th>Frequency</th>
              <th>Database</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {(response1?.frequent || []).map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.freq}</td>
                <td>{item.db}</td>
                <td>{item.cat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightList;
