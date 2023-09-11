import logo from './assets/nodeflair-logo.jpg';
import "./assets/fontawesome/all.min.js";
import './App.css';
import { useState } from 'react';

function JobCard({ job, onSelect, isSelected }) {
  const cardStyle = isSelected ? { borderColor: 'rgba(29, 199, 105)', borderWidth: '2px', borderStyle: 'solid' } : {};

  return (
    <div className="card mb-3" onClick={() => onSelect(job)} style={cardStyle}>
      <div className="row no-gutters">
        {/* Company Logo */}
        <div className="col-3">
          <img src={job.logo} alt="Company Logo" className="card-img" />
        </div>

        {/* Job Details */}
        <div className="col-6">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <small className="text-muted me-3">{job.company}</small>
                <span className="rating">{job.rating}★</span>
              </div>
            </div>
            <div className="row">
              <h5 className="card-title">{job.position}</h5>
            </div>
            <div className="row">
              <p className="card-text">
                <small className="date-posted text-muted me-3">{job.datePosted}</small>
                <span className="fas fa-location-dot me-1 text-muted" />
                <small className="text-muted">{job.location}</small>
                <div className="salary">{job.salary}</div>
              </p>
            </div>
          </div>
        </div>

        {/* Job Tag */}
        <div className="col-3 d-flex align-items-center justify-content-center">
          <span className="job-tag fs-6 font-weight-bold mt-3 me-3">{job.tag}</span>
        </div>
      </div>
      {/* Skill Tags */}
      <div className="card-footer bg-white overflow-hidden">
        <div className="tags-container">
          {job.skills.map(skill => (
            <span key={skill} className="skill-tag me-2">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = job => {
    console.log("Job selected:", job);
    setSelectedJob(job);
  };

  const jobs = [
    {
      id: 1,
      logo: logo,
      company: "Google",
      rating: 4.3,
      position: "Data Scientist",
      datePosted: "15 days ago",
      location: "Singapore",
      salary: "S$12,000 - S$16,000 / mth",
      tag: "Data",
      skills: ["Python", "Java"]
    },
    {
      id: 2,
      logo: logo,
      company: "Facebook",
      rating: 3.9,
      position: "Backend Developer",
      datePosted: "8 days ago",
      location: "London",
      salary: "S$7,000 - S$13,000 / mth",
      tag: "Backend",
      skills: ["Ruby", "Go", "Rust", "Rest API", "Javascript", "CSS", "Web"]
    },
    {
      id: 3,
      logo: logo,
      company: "Netflix",
      rating: 4.8,
      position: "UI/UX Designer",
      datePosted: "3 days ago",
      location: "San Francisco",
      salary: "S$8,000 - S$15,000 / mth",
      tag: "Frontend",
      skills: ["HTML", "CSS"]
    },
    {
      id: 4,
      logo: logo,
      company: "Spotify",
      rating: 3.6,
      position: "Frontend Developer",
      datePosted: "19 days ago",
      location: "Berlin",
      salary: "S$9,000 - S$18,000 / mth",
      tag: "Frontend",
      skills: ["React", "TypeScript"]
    },
    {
      id: 5,
      logo: logo,
      company: "Tesla",
      rating: 4.5,
      position: "DevOps Engineer",
      datePosted: "22 days ago",
      location: "Tokyo",
      salary: "S$10,000 - S$14,000 / mth",
      tag: "Backend",
      skills: ["Rest", "Django"]
    },
    {
      id: 6,
      logo: logo,
      company: "Slack",
      rating: 4.1,
      position: "Software Engineer",
      datePosted: "6 days ago",
      location: "Toronto",
      salary: "S$11,000 - S$17,000 / mth",
      tag: "Fullstack",
      skills: ["Python", "React", "HTML", "CSS"]
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mt-3 d-block">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onSelect={() => handleJobSelect(job)} isSelected={selectedJob && job.id === selectedJob.id}>
            </JobCard>
          ))}
        </div>

        <div className="col-md-7 mt-3 d-none d-md-block">
          <div className="card h-100 pt-3 ps-3">
            {selectedJob ? (
              <div>
                <h4>{selectedJob.position}</h4>
              </div>
            ) : (
              <div>
                <p>
                  Select a job to view details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
