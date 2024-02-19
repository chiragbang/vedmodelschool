import React, { useState } from "react";
import "../styles/Results.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, TextField } from "@mui/material";

const results = () => {
  const [name, setName] = useState("");
  const [RollNumber, setRollNumber] = useState("");
  const [result, setResult] = useState("");
  const [rollNumberError, setRollNumberError] = useState("");

  const [showResult, setShowResult] = useState(false);

  const getResult = async () => {
    // Validate Roll Number
    if (!RollNumber.trim()) {
      setRollNumberError("Roll Number is required");
      return;
    }

    try {
      setRollNumberError("");

      const response = await fetch("https://vedmsss.co.in/api/getResult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, RollNumber }),
      });

      if (!response.ok) {
        setRollNumberError("No record found");
        throw new error("Student not found");
      }

      const data = await response.json();
      setResult(data);

      setShowResult(true);
    } catch (error) {
      setResult(null);
      setShowResult(false);
    }
  };
 
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Results", url: "/results" },
    {
      label: "About Us",
      url: "#",
      dropdownLinks: [
        { label: "Our Vision", url: "/vision" },
        { label: "Our Mission", url: "/mission" },
        { label: "Director Message", url: "/director" },
        { label: "Principal Message", url: "/principal" },
        { label: "Administrator Message", url: "/administrator" },
        { label: "School Introduction", url: "/introduction" },
        { label: "Instructions", url: "/instructions" },
        { label: "International Outreach Programme", url: "/iop" },
      ],
    },
    {
      label: "Academics",
      url: "/",
      dropdownLinks: [
        { label: "Academic Achievement", url: "/achievements" },
        { label: "Examinations", url: "/exams" },
        { label: "Leave Rules", url: "/leaves" },
        { label: "Parent Teachers Meet", url: "/ptm" },
        // Add more dropdown links as needed
      ],
    },
    {
      label: "Admission",
      url: "/",
      dropdownLinks: [
        { label: "Admission Rules", url: "/rules" },
        { label: "Admission Criteria", url: "/criteria" },
        { label: "Admission Procedure", url: "/procedure" },
        { label: "Modernization in Education", url: "/modernization" },
        { label: "News/Event", url: "/admission/events" },
        { label: "School Uniform", url: "/admission/uniform" },
      ],
    },
    {
      label: "Art & Culture",
      url: "/",
      dropdownLinks: [
        { label: "Dance & Music", url: "/art-culture/dance-music" },
        { label: "Activities", url: "/art-culture/activities" },
        { label: "Painting", url: "/art-culture/painting" },
        { label: "Robotics", url: "/art-culture/robotics" },
     
      ],
    },
    {
      label: "CBSE Corner",
      url: "/",
      dropdownLinks: [
        { label: "CBSE Corner", url: "/cbse" },
        {
          label: "Mandatory Public Disclosure",
          url: "https://drive.google.com/file/d/1XAFJIJAK6SGSU3AL3taXYINm7Z5LKxvO/view",
        },
        { label: "SLC Download", url: "/slc" },
        // Add more dropdown links as needed
      ],
    },
    {
      label: "Contact Us",
      url: "/",
      dropdownLinks: [
        { label: "Enquiry", url: "/enquiry" },
        { label: "Reach Us", url: "/reach" },
        // Add more dropdown links as needed
      ],
    },
    {
      label: "Gallery",
      url: "/",
      dropdownLinks: [
        { label: "Video Gallery", url: "/video" },
        { label: "Photo Gallery", url: "/gallery" },
        // Add more dropdown links as needed
      ],
    },
    { label: "Careers", url: "/careers" },
    { label: "Facilities", url: "/" },
  ];

  const studentData = {
    studentName: "John Doe",
    fatherName: "Michael Doe",
    motherName: "Michael Doe",
    contactNo: "9999999999",
    rollNo: "12345",
    obtainedMarks: {
      mathematics: 85,
      science: 78,
      english: 92,
    },
    maximumMarks: {
      mathematics: 100,
      science: 100,
      english: 100,
    },
    rank: 1,
    cashPrize: "$500",
    scholarship: "$1000",
  };

  const totalObtainedMarks = Object.values(studentData.obtainedMarks).reduce(
    (total, marks) => total + marks,
    0
  );
  const totalMaximumMarks = Object.values(studentData.maximumMarks).reduce(
    (total, marks) => total + marks,
    0
  );
  const percentage = (totalObtainedMarks / totalMaximumMarks) * 100;

  return (
    <>
      <div className="header-director">
        <Header navLinks={navLinks} />
      </div>
{showResult==false ? (<div>
  <h1 className="result-heading">Result Page</h1>
      <div className="result-container">
        <div>
          <TextField
            label="Name"
            variant="outlined"
            sx={{ width: "300px" }}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="VMTT Roll No."
            variant="outlined"
            sx={{ width: "300px" }}
            required
            value={RollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            error={!!rollNumberError}
            helperText={rollNumberError}
          />
        </div>
        <Button className="result-button" onClick={getResult}>
          Find Result
        </Button>
      </div>
</div>) : null}
      

      {showResult ? (
        <div className="result-container">
          <div
            style={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
            <img src="/images/logo.webp" alt="School Logo" className="logo" />
            <h1 className="schoolName">Ved Model Sr. Sec. School</h1>
          </div>

          <div
            className="studentInfo"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 style={{ textAlign: "center" }}>Student Information</h2>
            <hr />
            {result && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <p>
                    <strong>Student Name :</strong> {result.name && result.name}
                  </p>
                  <p>
                    <strong>Father's Name :</strong> {result.fatherName}
                  </p>
                  <p>
                    <strong>Mother's Name :</strong> {result.motherName}
                  </p>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p>
                    <strong>Contact No. : </strong> {result.contactNumber}
                  </p>
                  <p>
                    <strong>VMTT Roll No. : </strong> {result.rollNumber}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Table with subject names, marks obtained, and result */}
          {result && (
            <div className="tableContainer">
              <h2>Result as on 15/02/2024</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Obtained Marks</strong>
                    </td>
                    <td>{result.marks}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Maximum Marks</strong>
                    </td>
                    <td>{result.maxMarks}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Percentage</strong>
                    </td>
                    <td>{result.percent}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Rank</strong>
                    </td>
                    <td>{result.rank}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cash Prize</strong>
                    </td>
                    <td>{result.cashPrize && result.cashPrize}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scholarship</strong>
                    </td>
                    <td>{result.scholarship && result.scholarship}</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", padding: "10px" }}>
                This result can be challenged within two days of its
                declaration. Thereafter, revised results shall be published. No
                further challenges shall be entertained. Prize Distribution
                Ceremony will be held on Mother's Day 2024.
              </p>
            </div>
          )}
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default results;
