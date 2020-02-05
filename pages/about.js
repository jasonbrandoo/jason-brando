import React from 'react';
import { Text, Box, Heading, Flex } from 'rebass';
import Layout from '../component/layout';

function About() {
  return (
    <Layout>
      <Box width={4 / 5} mx="auto" my={4}>
        <Heading fontWeight="hairline" lineHeight="loose">
          About Me
        </Heading>
        <Text fontWeight="hairline" lineHeight="loose">
          I'm Jason Brando, a self-taught <b>front end</b> web developer from
          Bekasi, Indonesia. I'd like to try apply my skills to create real
          world web applications. My experience in the digital world is not so
          long but I want to prove that I am able to survive, if you want to
          hire me i will be very happy. Recently I tried to mastering my
          javascript because I want to be good developer.
        </Text>
        <Flex flexDirection={['column', 'row']} mt={2}>
          <Box width={['full', 1 / 2]} mx={[0, 'auto']} pr={4}>
            <Heading fontWeight="hairline" lineHeight="loose">
              Skillset
            </Heading>
            <Text fontWeight="hairline" lineHeight="loose" textAlign="justify">
              <b>Core:</b>HTML5, CSS3, Javascript, Mobile and Responsive Design
              <br />
              <b>Libraries:</b>React js, Bootsrap, Tailwind CSS
            </Text>
          </Box>
          <Box width={['full', 1 / 2]} mx={[0, 'auto']}>
            <Heading fontWeight="hairline" lineHeight="loose">
              Interest
            </Heading>
            <Text fontWeight="hairline" lineHeight="loose" textAlign="justify">
              ArsenalFC, Video Game, YouTube, Kaskus, Twitter.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}

export default About;
