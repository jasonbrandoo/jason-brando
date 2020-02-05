import React from 'react';
import { Text, Box, Heading, Flex, Link } from 'rebass';
import Layout from '../component/layout';

function Portfolio() {
  return (
    <Layout>
      <Box width={4 / 5} mx="auto" my={4}>
        <Heading fontWeight="hairline" lineHeight="loose">
          Portfolio
        </Heading>
        <Flex flexDirection="column">
          <Box my={2}>
            <Text fontSize={2} fontWeight="hairline" lineHeight="loose">
              Cashier
            </Text>
            <Box display="inline-block">
              <Link href="https://salesreciept.netlify.com/" variant="styles.a">
                Demo
              </Link>
              /
              <Link
                href="https://github.com/jasonbrandoo/sales-reciepts"
                variant="styles.a"
              >
                Repository
              </Link>
            </Box>
            <Text fontWeight="hairline" lineHeight="loose">
              Simple cashier app based on{' '}
              <Link
                href="https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Sales-DB-App.md"
                variant="styles.a"
              >
                App Ideas Github
              </Link>
            </Text>
            <Text lineHeight="loose">
              Tech: React js, IndexedDB, Tailwind CSS
            </Text>
          </Box>
          <Box my={2}>
            <Text fontSize={2} fontWeight="hairline" lineHeight="loose">
              Hacker News Clone
            </Text>
            <Box display="inline-block">
              <Link
                href="https://github.com/jasonbrandoo/hn-clone"
                variant="styles.a"
              >
                Repository
              </Link>
            </Box>
            <Text fontWeight="hairline" lineHeight="loose">
              Just simple hacker news clone
            </Text>
            <Text lineHeight="loose">Tech: React js, Webpack</Text>
          </Box>
          <Box my={2}>
            <Text fontSize={2} fontWeight="hairline" lineHeight="loose">
              Bible App
            </Text>
            <Box display="inline-block">
              <Link href="https://bibleapp.netlify.com/" variant="styles.a">
                Demo
              </Link>
              /
              <Link
                href="https://github.com/jasonbrandoo/bible-app-react"
                variant="styles.a"
              >
                Repository
              </Link>
            </Box>
            <Text fontWeight="hairline" lineHeight="loose">
              Bible App with private API
            </Text>
            <Text lineHeight="loose">Tech: React js, Styled-Component</Text>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Portfolio;
