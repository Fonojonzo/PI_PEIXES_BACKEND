import React from "react";
import "./app.css";
import { FlexboxGrid,  } from "rsuite";
import HeaderCard from "../header/Header";

const Dashboard = () => {
  return (
    <div className="App">
      <HeaderCard />
      <div className="card-container">
        <FlexboxGrid style={{ marginTop: "1rem" }}>
          <iframe
            title="Dashboard PI"
            width="950"
            height="600px"
            src="https://app.powerbi.com/view?r=eyJrIjoiYzBjNjkxNTgtOTQxMC00ZTQxLWJhZDgtNTljNmJlZjBiMDc0IiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
            frameborder="0"
            allowFullScreen="true"
          />
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default Dashboard;
