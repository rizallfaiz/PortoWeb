import React from 'react';
import { useQuery } from 'react-query';
import * as api from '../../api';
import ProjectCard from '../../components/ProjectCard/';
import styles from '../../styles/pages/projects.module.scss';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const { data, error, isLoading } = useQuery('repositories', api.getRepos);
  const ownerURL = 'https://github.com/rizallfaiz/';
  const sortItems = (a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Projects I've built</h2>
          <a href={ownerURL} target="_blank" rel="noopener noreferrer">
            See more
            <span>
              <RiArrowRightUpLine />
            </span>
          </a>
        </div>
        <ul>
          {isLoading && <p> Loading.. </p>}
          {error && <p>Projects couldn't loaded.</p>}
          {data
            ?.filter(
              x =>
                x.id === 465865340 ||
                x.id === 505756019 ||
                x.id === 509946666 ||
                x.id === 393867030,
            )
            .sort(sortItems)
            .map(repos => (
              <Fade bottom key={repos.id}>
                <li>
                  <ProjectCard repos={repos} />
                </li>
              </Fade>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
