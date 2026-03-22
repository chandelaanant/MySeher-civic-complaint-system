








import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [issues, setIssues] = useState([]);
    useEffect(() => {
    axios
      .get("http://localhost:3001/issues")
      .then((res) => setIssues(res.data))
      .catch((err) => {
        console.error("Backend not ready, using mock data:", err);
        setIssues([
          {
            _id: "1",
            title: "Sample Issue",
            location: "N/A",
            status: "Open",
            urgency: "Low",
            upvotes: 0,
          },
        ]);
      });
  }, []);


//   useEffect(() => {
    
//     axios
//       .get("http://localhost:3001/issues") 
//       .then((res) => setIssues(res.data))
//       .catch((err) => console.error("Error fetching issues:", err));
//   }, []);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>🛠️ Civic Issue Dashboard</h1>
        <p>Live tracking of citizen-reported issues</p>
      </header>

      {/* Issue Table */}
      <section className="issues-section">
        <h2>📍 Reported Issues</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Issue</th>
              <th>Location</th>
              <th>Status</th>
              <th>Urgency</th>
              <th>Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 ? (
              issues.map((issue) => (
                <tr key={issue._id}>
                  <td>{issue.title}</td>
                  <td>{issue.location || "N/A"}</td>
                  <td>
                    <span
                      className={`badge ${
                        issue.status === "Resolved"
                          ? "bg-success"
                          : issue.status === "In-Progress"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        issue.urgency === "High"
                          ? "bg-danger"
                          : issue.urgency === "Medium"
                          ? "bg-warning"
                          : "bg-info"
                      }`}
                    >
                      {issue.urgency}
                    </span>
                  </td>
                  <td>👍 {issue.upvotes || 0}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No issues reported yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
