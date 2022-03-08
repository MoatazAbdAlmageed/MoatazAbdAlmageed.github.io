import { Grid, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import { FiTerminal } from 'react-icons/fi';
import config from '../../config';
import Project from './Project';
import Wrapper from './Wrapper';

class Projects extends Component {
  render() {
    const { projects } = config;
    return (
      <Wrapper id="projects" bg="#F7FAFC">
        <Stack spacing={0} align={'center'}>
          <Heading>
            {' '}
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={FiTerminal}
            />{' '}
            Projects
          </Heading>
          <Text>My projects</Text>

          <Link
              to="https://www.linkedin.com/in/moatazabdelmageed/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-globe" aria-hidden="true"></i>
              &nbsp; @linkedin
            </Link>
        </Stack>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
        >
          {projects
            .filter(({ show }) => show == true)
            .sort((a, b) => b.year - a.year)
            .map((project) => (
              <Project key={project.url} project={project} />
            ))}
        </Grid>
      </Wrapper>
    );
  }
}

export default Projects;
