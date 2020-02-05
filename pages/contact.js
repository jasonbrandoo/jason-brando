import React from 'react';
import { Text, Box, Heading, Link, Flex } from 'rebass';
import Layout from '../component/layout';

function Contact() {
  return (
    <Layout>
      <Box width={4 / 5} mx="auto" mt={4}>
        <Flex flexDirection="column">
          <Heading fontWeight="hairline" lineHeight="loose">
            Contact
          </Heading>
          <Link href="https://wa.me/6289605295830" variant="styles.a">
            Phone: +6289605295830
          </Link>
          <Link
            href="mailto:jasonbrandoo@gmail.com?subject=Good Day"
            variant="styles.a"
          >
            Email: jasonbrandoo@gmail.com
          </Link>
          <Link href="https://twitter.com/jasonbrandoo" variant="styles.a">
            Twitter: jasonbrandoo
          </Link>
          <Link href="https://github.com/jasonbrandoo" variant="styles.a">
            Github: jasonbrandoo
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Contact;
