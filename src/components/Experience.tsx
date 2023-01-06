import {
  Box,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/icons';
import { Link } from 'gatsby';
import { MdCheckCircle } from 'react-icons/md';
import React from 'react';
import { TiStarburst } from 'react-icons/ti';
import Wrapper from './Wrapper';
import config from '../../config';

function Experience() {
  const { jobs } = config;

  return (
    <Wrapper id="experience">
      <Stack spacing={0} align={'center'}>
        <Heading pt={20}>
          {' '}
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={TiStarburst}
          />{' '}
          Experience
        </Heading>
      </Stack>

      <Grid
        gap={2}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
      >
        {jobs.map((job) => {
          const {
            company,
            url,
            occupation,
            description,
            period,
            responsibilities,
            technologies,
            projects,
          } = job;
          return (
            <Stack
              key={url}
              overflow="hidden"
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}
              _hover={{ bg: 'gray.800', color: '#ffffff' }}
              p={10}
            >
              <Box>
                <Box>
                  <Heading size="md" color="orange">
                    {occupation}
                  </Heading>
                  <Link to={url}> @{company} </Link>
                  <h4> {period}</h4>
                </Box>

                <Box pt={5}>
                  <Heading size="sm">Responsibilities</Heading>
                  <List>
                    {responsibilities.map((responsibility) => {
                      return (
                        <ListItem key={Math.random()}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {responsibility}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <Box pt={5}>
                  <Heading size="sm">Technologies</Heading>
                  <List>
                    {technologies.map((technology) => {
                      return (
                        <ListItem key={Math.random()}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {technology}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <Box pt={5}>
                  <Heading size="sm"> Projects</Heading>
                  <List>
                    {projects.map((project) => {
                      return (
                        <ListItem key={Math.random()}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          <Link
                            to={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            &nbsp;
                            {project.name}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <p>{description}</p>
              </Box>
            </Stack>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default Experience;
