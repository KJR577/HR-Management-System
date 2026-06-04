import React, { useState } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Candidates from "./Candidates";
import Department from "./Department";
import JobOpenings from "./JobOpenings";
import CandidatesTab from "./CandidatesTab";
import "./Recruitment.css";

const DEPT_COLORS = {
  Engineering: { bg: "#fce7f3", text: "#be185d" },
  Product:     { bg: "#dcfce7", text: "#15803d" },
  Design:      { bg: "#fef9c3", text: "#a16207" },
  Analytics:   { bg: "#fce7f3", text: "#9d174d" },
  HR:          { bg: "#f0fdf4", text: "#166534" },
  Finance:     { bg: "#fef3c7", text: "#92400e" },
  Marketing:   { bg: "#ede9fe", text: "#6d28d9" },
  Sales:       { bg: "#ecfdf5", text: "#065f46" },
  Operations:  { bg: "#fff7ed", text: "#c2410c" },
  Legal:       { bg: "#eff6ff", text: "#1d4ed8" },
};

const initialCandidates = [
  {
    id: 1, rank: 1, initials: "RD", name: "Rohini Das", role: "Product Designer",
    department: "Design", score: 92, status: "Offer", email: "rohini@email.com",
    phone: "9876543210", experience: "3-5 years", location: "Chennai",
    education: "Bachelor's", appliedDate: "2024-05-01", appliedFor: "Product Designer",
    expectedSalary: "INR 12,00,000", skills: ["Figma", "Adobe XD", "Prototyping"],
    about: "Experienced designer with 4 years in product design.",
    avatarBg: "#fde68a", avatarText: "#92400e",
    badgeBg: "#fef9c3", badgeText: "#a16207",
  },
  {
    id: 2, rank: 2, initials: "SI", name: "Snega Iyer", role: "React Developer",
    department: "Engineering", score: 88, status: "Interview", email: "snega@email.com",
    phone: "9123456780", experience: "1-3 years", location: "Bangalore",
    education: "Bachelor's", appliedDate: "2024-05-03", appliedFor: "React Developer",
    expectedSalary: "INR 8,00,000", skills: ["React", "TypeScript", "Node.js"],
    about: "Frontend developer passionate about UI performance.",
    avatarBg: "#bfdbfe", avatarText: "#1e40af",
    badgeBg: "#eff6ff", badgeText: "#1d4ed8",
  },
  {
    id: 3, rank: 3, initials: "PR", name: "Pooja Reddy", role: "Data Scientist",
    department: "Analytics", score: 81, status: "Hired", email: "pooja@email.com",
    phone: "9988776655", experience: "3-5 years", location: "Hyderabad",
    education: "Master's", appliedDate: "2024-04-20", appliedFor: "Data Scientist",
    expectedSalary: "INR 15,00,000", skills: ["Python", "SQL", "ML"],
    about: "Data scientist with expertise in ML models.",
    avatarBg: "#e9d5ff", avatarText: "#6b21a8",
    badgeBg: "#f0fdf4", badgeText: "#15803d",
  },
];

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [jobOpenings, setJobOpenings] = useState([]);
  const [candidates, setCandidates] = useState(initialCandidates);

  // ✅ Stats derived from live data
  const stats = {
    activeOpenings: jobOpenings.filter((j) => j.status === "Active").length,
    totalApplications: candidates.length,
    inInterview: candidates.filter((c) => c.status === "Interview").length,
    hiredThisMonth: candidates.filter((c) => c.status === "Hired").length,
  };

  // ✅ Department counts from live job openings
  const departments = Object.entries(DEPT_COLORS).map(([name, colors]) => ({
    name,
    count: jobOpenings.filter((j) => j.department === name && j.status === "Active").length,
    bg: colors.bg,
    text: colors.text,
  }));

  return (
    <div className="recruitment-wrapper">
      <Header jobOpenings={jobOpenings} setJobOpenings={setJobOpenings} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Overview" && (
        <div className="recruitment-body">
          <Cards stats={stats} />
          <div className="recruitment-mid">
            <Candidates candidates={candidates} />
          </div>
          <Department departments={departments} />
        </div>
      )}
      {activeTab === "Job openings" && (
        <JobOpenings jobOpenings={jobOpenings} setJobOpenings={setJobOpenings} />
      )}
      {activeTab === "Candidates" && (
        <CandidatesTab candidates={candidates} setCandidates={setCandidates} />
      )}
    </div>
  );
};

export default Recruitment;