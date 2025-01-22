import { Box } from '@chakra-ui/react';
import React from 'react';
import { Animate } from 'react-simple-animate';
import About from '../components/About';
import Awards from '../components/Awards';
import Divider from '../components/Divider';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Animate
        play={true}
        end={{ opacity: 1, transform: 'translateY(0)' }}
        start={{ opacity: 1, transform: 'translateY(-100px)' }}
      >
        <Box bgGradient="linear(to-r, gray.100, gray.300)">
          <About />
          <Projects />
          <Experience />
          <Awards />
        </Box>
        <Footer />
        <Divider />
      </Animate>
    </Layout>
  );
};

export default IndexPage;
