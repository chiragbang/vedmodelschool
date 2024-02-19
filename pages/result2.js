


import "../styles/Result2.css"

export default function Home() {
       

    // Sample student data
    const studentData = {
        studentName: 'John Doe',
        fatherName: 'Michael Doe',
        motherName: 'Michael Doe',
        contactNo: '9999999999',
        rollNo: '12345',
        obtainedMarks: {
            mathematics: 85,
            science: 78,
            english: 92
        },
        maximumMarks: {
            mathematics: 100,
            science: 100,
            english: 100
        },
        rank: 1,
        cashPrize: '$500',
        scholarship: '$1000'
    };

    // Calculate total obtained marks
    const totalObtainedMarks = Object.values(studentData.obtainedMarks).reduce((total, marks) => total + marks, 0);
    // Calculate total maximum marks
    const totalMaximumMarks = Object.values(studentData.maximumMarks).reduce((total, marks) => total + marks, 0);
    // Calculate percentage
    const percentage = (totalObtainedMarks / totalMaximumMarks) * 100;

    return (
        <>
           
            <div className="result-container">
                {/* School logo and name */}
                <div  style={{display: "flex", alignItems: "center", padding: "20px"}}>

                <img src="/images/logo.webp" alt="School Logo" className="logo" />
                <h1 className="schoolName">Ved Model Sr. Sec. School</h1>
                </div>

               
<div className="studentInfo" style={{ display: "flex", flexDirection: "column" }}>
    <h2 style={{textAlign:"center"}}>Student Information</h2>
    <hr />
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ textAlign: "left" }}>
            <p><strong>Student Name :</strong> {studentData.studentName}</p>
            <p><strong>Father's Name :</strong> {studentData.fatherName}</p>
            <p><strong>Mother's Name :</strong> {studentData.motherName}</p>
        </div>
        <div style={{ textAlign: "left" }}>
            <p><strong>Contact No. : </strong> {studentData.contactNo}</p>
            <p><strong>VMTT Roll No. : </strong> {studentData.rollNo}</p>
        </div>
    </div>
</div>


                {/* Table with subject names, marks obtained, and result */}
                <div className="tableContainer">
                    <h2>Result as on 15/02/2024</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><strong>Obtained Marks</strong></td>
                                <td>{totalObtainedMarks}</td>
                            </tr>
                            <tr>
                                <td><strong>Maximum Marks</strong></td>
                                <td>{totalMaximumMarks}</td>
                            </tr>
                            <tr>
                                <td><strong>Percentage</strong></td>
                                <td>{percentage.toFixed(2)}%</td>
                            </tr>
                            <tr>
                                <td><strong>Rank</strong></td>
                                <td>{studentData.rank}</td>
                            </tr>
                            <tr>
                                <td><strong>Cash Prize</strong></td>
                                <td>{studentData.cashPrize}</td>
                            </tr>
                            <tr>
                                <td><strong>Scholarship</strong></td>
                                <td>{studentData.scholarship}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{textAlign:"center", padding:"10px"}}>This result can be challenged within two days of its declaration. Thereafter, revised results shall be published. No further challenges shall be entertained. Prize Distribution Ceremony will be held on Mother's Day 2024.</p>
                </div>
            </div>
        </>
    );
}
