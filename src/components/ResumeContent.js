import React from 'react'

export default function Resume_content() {
  return (
    <div>
      <div className="resume">
      <div className="personal-info">
        <h1>Rajat Jha</h1>
        <p>8428254096<br />
          rajatjha1398@gmail.com<br />
          <a href="www.linkedin.com/in/rajat-jha-130298" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </div>
      
      <div className="section">
        <h2>Objective</h2>
        <p>
          [Write a brief statement that outlines your career goals and what you're looking to achieve in your next role.]
        </p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <p>
          [Degree Earned] in [Field of Study]<br />
          [University Name], [Location]<br />
          Month Year of Graduation<br />
          [GPA - Optional]
        </p>
      </div>

      <div className="section">
        <h2>Relevant Courses</h2>
        <ul>
          <li>[List any relevant courses that showcase your skills and knowledge.]</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>[Skill 1]</li>
          <li>[Skill 2]</li>
          <li>[Skill 3]</li>
          {/* ... More skills */}
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Job Title</h3>
          <p>[Company/Organization Name], [City, State]<br />
            [Start Date] - [End Date]</p>
          <ul>
            <li>[Bullet points describing your responsibilities and achievements in this role. Start each bullet point with an action verb.]</li>
          </ul>
        </div>
        {/* ... More experience items */}
      </div>

      <div className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Title</h3>
          <p>[Description of the project and your contributions.]</p>
        </div>
        {/* ... More projects */}
      </div>

      <div className="section">
        <h2>Volunteer Experience</h2>
        <div className="volunteer-role">
          <h3>Role</h3>
          <p>[Organization Name], [City, State]<br />
            [Start Date] - [End Date]</p>
          <ul>
            <li>[Bullet points describing your responsibilities and achievements in this volunteer role.]</li>
          </ul>
        </div>
        {/* ... More volunteer roles */}
      </div>

      <div className="section">
        <h2>References</h2>
        <p>Available upon request.</p>
      </div>
    </div>
    </div>
  )
}
