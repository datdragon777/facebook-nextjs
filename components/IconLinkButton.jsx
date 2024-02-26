'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const IconLinkButton = ({
  linkButtonStyles,
  linkStyles,
  iconImage,
  iconName,
  iconPath,
  iconStyles,
}) => {
  return (
    <Button className={linkButtonStyles}>
      <Link
        className={linkStyles ? linkStyles : 'flex w-full items-center'}
        href={iconPath}
      >
        <div className={iconStyles}>{iconImage}</div>
        {iconName}
      </Link>
    </Button>
  );
};

export default IconLinkButton;
