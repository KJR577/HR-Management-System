import React, { useState } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Pipeline from "./Pipeline";
import Candidates from "./Candidates";
import Department from "./Department";
import JobOpenings from "./JobOpenings";
import CandidatesTab from "./CandidatesTab";
import "./Recruitment.css";

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="recruitment-wrapper">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Overview" && (
        <div className="recruitment-body">
          <Cards />
          <div className="recruitment-mid">
            <Pipeline summary={true} />   {/* ← ONLY CHANGE */}
            <Candidates />
          </div>
          <Department />
        </div>
      )}

      {activeTab === "Job openings" && <JobOpenings />}
      {activeTab === "Candidates" && <CandidatesTab />}
      {activeTab === "Pipelines" && <Pipeline />}

    </div>
  );
};

export default Recruitment;