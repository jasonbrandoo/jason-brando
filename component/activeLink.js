import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function activeLink({ href, passHref, children }) {
  const router = useRouter();

  let style = children.props.style || {};
  if (router.pathname === href) {
    style = {
      color: '#718096',
    };
  }

  return (
    <Link href={href} passHref={passHref}>
      {React.cloneElement(children, { style })}
    </Link>
  );
}

export default activeLink;
