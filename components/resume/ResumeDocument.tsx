import { resume, type ResumeEducation, type ResumeJob } from "@/content/resume";

function Job({ org, title, dates, href, blurb, bullets }: ResumeJob) {
  return (
    <article className="resume-job">
      <div className="resume-row">
        <p className="resume-job-title">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer">
              {org}
            </a>
          ) : (
            org
          )}
          {" | "}
          {title}
        </p>
        <p className="resume-job-dates">{dates}</p>
      </div>
      {blurb ? <p className="resume-job-blurb">{blurb}</p> : null}
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function School({ left, dates, bullets }: ResumeEducation) {
  return (
    <article className="resume-job">
      <div className="resume-row">
        <p className="resume-job-title">
          {left.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
        <p className="resume-job-dates">{dates}</p>
      </div>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export function ResumeDocument() {
  return (
    <article className="resume-page">
      <p className="resume-name">{resume.name}</p>
      <p className="resume-contact">
        <a href={`mailto:${resume.email}`}>{resume.email}</a>
        {" | "}
        <a href={resume.linkedin} target="_blank" rel="noreferrer">
          {resume.linkedin}
        </a>
        {" | "}
        {resume.location}
      </p>
      <p className="resume-summary">{resume.summary}</p>

      <h2>Technical Skills</h2>
      {resume.skills.map((group) => (
        <p key={group.label} className="resume-skill">
          <strong>{group.label}:</strong> {group.items}
        </p>
      ))}

      <h2>Work Experience</h2>
      {resume.experience.map((job) => (
        <Job key={`${job.org}-${job.title}`} {...job} />
      ))}

      <h2>Education</h2>
      {resume.education.map((school) => (
        <School key={school.dates} {...school} />
      ))}

      <p className="resume-interests">
        <strong>Interests:</strong> {resume.interests}
      </p>
    </article>
  );
}
