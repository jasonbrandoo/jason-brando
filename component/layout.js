import React, { useState, useEffect } from 'react';
import { Flex, Link, Box } from 'rebass';
import ActiveLink from '../component/activeLink';
import { MenuButton } from 'theme-ui';

function layout({ children }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    function listeResize() {
      const innerWidth = window.innerWidth;
      if (innerWidth < 640) {
        setOpen((prevState) => !prevState);
      }
    }
    window.addEventListener('resize', listeResize);
    return () => {
      window.removeEventListener('resize', listeResize);
    };
  });

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  return (
    <Flex height="screenHeight" maxHeight="screenHeight">
      <Box display={open ? 'block' : 'none'} bg="black" width={[3 / 4, 1 / 5]}>
        {open && (
          <MenuButton
            onClick={handleClick}
            p={3}
            sx={{ width: 'auto', height: 'auto', position: 'absolute' }}
          />
        )}
        <Box width={9 / 12} mx="auto">
          <Flex flexDirection="column">
            <ActiveLink href="/" passHref>
              <Link
                variant="styles.a"
                fontSize={4}
                my={5}
                color="white"
                sx={{
                  fontWeight: 'hairline',
                  lineHeight: 'tight',
                  letterSpacing: 'widest',
                }}
              >
                Jason Brando
              </Link>
            </ActiveLink>
            <ActiveLink href="/about" passHref>
              <Link variant="styles.a" mb={2} color="white">
                About
              </Link>
            </ActiveLink>
            <ActiveLink href="/portfolio" passHref>
              <Link variant="styles.a" mb={2} color="white">
                Portfolio
              </Link>
            </ActiveLink>
            <ActiveLink href="/contact" passHref>
              <Link variant="styles.a" mb={2} color="white">
                Contact
              </Link>
            </ActiveLink>
          </Flex>
        </Box>
      </Box>
      <Box width={['full', 4 / 5]} overflowY="auto">
        {!open && (
          <MenuButton
            onClick={handleClick}
            p={3}
            sx={{ width: 'auto', height: 'auto', position: 'absolute' }}
          />
        )}
        {children}
      </Box>
    </Flex>
  );
}

export default layout;
