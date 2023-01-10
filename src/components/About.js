import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  BsCloudDownloadFill,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs';
import React, { Component } from 'react';

import { Link } from 'gatsby';
import SkillsIcons from './SkillsIcons';
import avatar from '../assets/img/avatar.jpg';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';

class About extends Component {
  render() {
    const {
      firstName,
      lastName,
      position,
      kids,
      jobs,
      email,
      socialLinks: { linkedin, github, youtube },
    } = config;
    const currentCompany = jobs[0];
    return (
      <Flex
        id="about"
        align={'center'}
        direction="column"
        pt={{ base: 100, md: 20 }}
      >
        <Box align="center">
          <Text>Hello!, {`I'm`}</Text>

          <Heading>
            {firstName} {lastName}
          </Heading>

          <Image
            borderRadius="full"
            boxSize="150px"
            src={avatar}
            alt={`${firstName} ${lastName}`}
            p={5}
          />
          <Text align="center" p={5} fontSize="1.4em">
            I am a {position} with +{new Date().getFullYear() - 2015} years of
            experience. I work as {currentCompany.position} for{' '}
            <a target="_blank" href={currentCompany.url} rel="noreferrer">
              {currentCompany.company}
            </a>
            .
            <br /> I am looking forward to taking on more work and increase my
            skills as a Web Developer.
            <br /> {`I'm`} married and I have {kids.length} sons{' '}
            {kids.map(
              ({ name }, index) => `${name}${kids[index + 1] ? ',' : ''}`
            )}
          </Text>
        </Box>
        <Box
          width={{
            base: '100%',
            sm: '100%',
            md: '50%',
          }}
        ></Box>
        <Box mt={5}>
          <Link to={github.url} target="_blank">
            <IconButton
              aria-label="BsGithub"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsGithub size="28px" />}
            />
          </Link>
          <Link to={linkedin.url} target="_blank">
            <IconButton
              aria-label="BsLinkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
          <Link to={youtube.url} target="_blank">
            <IconButton
              aria-label="BsYoutube"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsYoutube size="28px" />}
            />
          </Link>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsEnvelope size="28px" />}
            />
          </a>
        </Box>
        <Box mt={5}>
          <a href={resume} download>
            <Button
              bg="orange"
              color="white"
              size="lg"
              _hover={{ bg: 'orange' }}
            >
              <IconButton
                aria-label="BsCloudDownloadFill"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'orange' }}
                icon={<BsCloudDownloadFill size="28px" />}
              />
              Resume
            </Button>
          </a>
        </Box>
        <Box p={{ base: 5, md: 10 }}>
          <SkillsIcons />
        </Box>
      </Flex>
    );
  }
}

export default About;
