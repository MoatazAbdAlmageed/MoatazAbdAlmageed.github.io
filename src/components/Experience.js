import React, { Component } from 'react';

import config from '../../config';

class Experience extends Component {
  render() {
    const { jobs } = config;

    return (
      <section
        className="resume-section p-3  d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-briefcase" /> Experience
          </h2>

          {jobs.map(job => {
            const {
              company,
              url,
              occupation,
              description,
              period,
              responsibilities,
              projects,
            } = job;
            return (
              <div
                key={url}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <div className="row">
                    <div className="col-10">
                      <h3 className="mb-0">{occupation}</h3>
                      <div className="subheading mb-3">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          @{company}
                        </a>
                      </div>
                      <h5>Responsibilities</h5>
                      <ul>
                        {responsibilities.map(responsibility => {
                          return <li key={Math.random()}>{responsibility}</li>;
                        })}
                      </ul>
                      {projects.length ? (
                        <div>
                          <h5>Projects</h5>
                          <ol className="projects">
                            {projects.map(project => {
                              return (
                                <li key={Math.random()}>
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i
                                      className="fa fa-globe"
                                      aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                    {project.name}
                                  </a>

                                  <ul className="technologies">
                                    {project.technologies.map(tech => {
                                      return (
                                        <li key={Math.random()}>
                                          <span className="badge badge-secondary">
                                            {tech}
                                          </span>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      ) : (
                        ''
                      )}
                      <p>{description}</p>
                    </div>
                    <div className="col-2">
                      <span className="badge badge-secondary badge badge-secondary-primary">
                        {period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Experience;
