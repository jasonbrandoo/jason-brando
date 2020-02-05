import React from 'react';
import { Text, Box, Heading } from 'rebass';
import Layout from '../component/layout';

function HomePage() {
  return (
    <Layout>
      <Box width={4 / 5} mx="auto" mt={5}>
        <Heading fontWeight="hairline" mb={1}>
          Good Day
        </Heading>
        <Text fontWeight="hairline" lineHeight="loose">
          My name is <b>Jason Brando</b> a front end developer for hire. I love
          to make web app that help people to solve their problem.
        </Text>
      </Box>
    </Layout>
  );
}

export default HomePage;
