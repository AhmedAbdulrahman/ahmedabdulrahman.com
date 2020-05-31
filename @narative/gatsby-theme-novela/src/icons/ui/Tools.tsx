import React from 'react';
import { useThemeUI } from 'theme-ui';

import { Icon } from '@types';

const Workshop: Icon = ({ fill }) => {
  const { theme } = useThemeUI();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
      <defs />
      <path
        fill={theme.colors.accent}
        fillRule="evenodd"
        d="M621.8 498.2c-1.6 23.6-33.6 35.9-53 40.9 4-23.1 9-47.1 5.8-70.6a426.2 426.2 0 00-5.5-31.5c-.1-.7-1.2-3.7-.9-4.4.7-1.2 6-1 7.5-1 3.5.2 7 1 10.3 2.5 6.8 3 12.6 8.1 17.4 13.8a75.1 75.1 0 0118.4 50.3zm-37-160.2c-18.6 11-41 16.9-62.1 19.8-32.3 4.4-65.2-.7-96.8-7.7-7.7-1.7-15.5-3.5-23-5.7a109 109 0 0018.1 62.2c10.2 15.5 23.4 28.3 35 42.6 10.8 13.3 19.5 28.3 20 45.8.1 7.4-.5 14-6.6 18.8a46.8 46.8 0 01-22 7.6 193.4 193.4 0 01-68.3-3.8c-4-1-5.5-2-9 1a44.6 44.6 0 00-12.3 26c-3.1 17.8-2 38.5 2.4 56 4.4 17 24.8 26.3 40 30.4 45.7 12.3 96.2-4.7 131.2-35l2.3-2c2.5 5.2 5.2 10.3 8.2 15.2 2 3.4 4.2 6.9 6.8 10 1 1 2 2.5 3.4 3.3 2.4 1.3 4.8.3 7.5-.2 20-3.4 40-8 59-15.2 29-11 55-29 68.7-57.5 7-14.4 10.5-30.1 12.3-46a140 140 0 00-2.7-54.4c-9.3-32.4-33.2-58.7-59.4-79a259.6 259.6 0 00-52.7-32.2z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="M912 123.3a44.4 44.4 0 01-13.3 2.4c-3.5.3-6.3 1.7-9.6 1.8-9.3.2-18.6.6-27.8 2-9.3 1.4-17.8-.4-25.1 6.5-2.6 2.5-6 5.4-4.3 9.4.7 1.8 1.7 3.1 2.3 5a50 50 0 002.5 6.5c1.8 4 11.2 19.2 3.6 21-8.2 2-19.4-.3-27.3-2.6-4.7-1.4-9.2-3-13.8-4.5-3.6-1.2-8.3-1.9-11.7-3.8-2.2-1.3-2.6-3.4-4-5.5-2.7-3.7-5.2-7-8.7-10a90.2 90.2 0 00-24.7-14.8c-.6-.2-1.6-.8-2.2-.9-.7 0-1.4.7-1.9.6-1.1-.3-1.5-1-2.8-1.7-1.7-1-8.8-4.2-10-1.7 1.2-3.3 2-2.4 5.1-1.9 1.4.2 2.3-.4 3.5-.3 1.2 0 1.6.7 2.6.8 1.7.4 3.3.1 5.1.1.5-1 1.2-1 2 0l1.6.5c1.8.5 3.7.4 5.6.6 2.7.2 10 3.6 11.3.1 1.5-3.6-3-4.5-3.7-7-.8-2.6 2.7-4 4-5.5 1.6-1.8 2.6-3.3 4.4-4.8 1-.9 2.5-1.7 3.3-2.9.7-1 .7-2.8 1.7-3.7 1-1.1 1.3-.4 2.3-.9 2-1 1.1-1 2.3-2.4 1-1.2 1.8-1.1 3.2-2 2-1.4 2.6-4 4.5-5.5 1.4-1 3.6-1 4.9-2.1.7-.7.5-1.7 1-2.3 1.3-1.2 2.1-.7 3.6-1.1 2.5-.7 3.3-2 5.2-3.7 1.7-1.4 2.8-1.4 4.9-2 2.9-.9 4.8-3 7.4-4.3 2.4-1.3 5-2.1 7.5-3.4 1.8-1 3.5-1.5 5.2-2.4.5-.4.6-1.5 1.3-1.7.8-.2 1.5 1.2 2.3 1.3 1.9.1 4-2 5.2-3.1.5-.5 1.2-1.9 1.9-2.2 1.4-.6 2.2.6 3.5.1 1.7-.6 1-2.5 2.1-3.6 1-1 3-.9 4.6-.6 6.8 1.2-3.7 6-5.7 7-3.3 1.6-27.5 13.4-21.9 19.3 3 3.1 10.3.8 13.6 0 5.7-1.5 11.6-4.3 17.5-5 .7 0 2.9.5 3.5.3 1.3-.5 1-1.5 2-2 1.7-.9 5-.8 6.6-.6 1.3 0 2.7.9 4 .8 1.5-.2 2.9-1 4.3-1.3 2.5-.4 5-.2 7.5-.1 3.6 0 10.7.6 5.5 5.3-4.2 3.9-11.4 5.5-16.7 7.2-7.8 2.5-15.5 4.7-23.2 7.6-5.3 1.9-16.5 5.2-10.3 12.4l1.9-1.7c.7.7 1.5 2.2 2.7 2.2 1 0 .6-1 1.5-1.3 2.9-1 6.8-1 9.9-1.2 7.6-.5 15.3-1.5 23-1.8 7.1-.3 14.4.1 21.5 1.6 1.8.4 18.7 4.8 12.2 7.5zm-62.5 73.9c.4 3.2-1 5.8-1.5 9-.4 3.7 0 7-1.1 10.7-2.1 7.2-3.6 14.6-5.8 21.8-4 12.8-10.2 24-16.7 35.5-3.4 6-8.3 10.8-13 15.7-4.6 5-8.3 10-14 14.1a134.4 134.4 0 01-36.4 20.2 118.4 118.4 0 01-42.9 5.5c-6.5-.3-13.3.3-19.6-.7-6.8-1.1-14.1-2.5-20.7-4.1-12.2-3-24-8.1-35.9-12.7a231 231 0 01-37.3-19c-3.2-1.9-6.6-2.8-9.6-5.1-2.6-2-5-3.9-7.7-5.7-3-2-6-4.4-9.1-6.3-1.9-1.2-4.5-2.4-5.5-4.5-1.4-3 .3-6.6 1.1-9.5 1.1-3.7 2.3-7.3 3.6-11 2.2-6.1 7.9-15.6 4.8-22.1-6.6 4-9.5 12-12.3 18.8a76.3 76.3 0 00-6.2 25.1c-1 17.7 2 36.4 8.4 53 1 2.4 2.6 5 1.4 7.7-1.3 2.7-4.8 5-7.5 6.3-8.6 3.7-17.2 4.8-26 6.9-2.5.6-5.2 2.3-7.5 2.5-1.5.1-2.8-.4-4.5-.4-1.8 0-3.2 1-4.8 1.2-1.4 0-2.6-.8-3.9-.7-3 .2-3.5 5.2-5 .8-.2.2-1.7 1.8-1.9 1.8-.4 0-1.1-1.2-1.5-1.4-.8-.5-1.8-.5-2.7-.6-1.9-.2-4-.3-5.8.2-3.5.8-7 .4-10 .4-.7 0-1.2.5-2 .5-.4 0-1-.7-1.4-.8-2.4-.6-4.8-.2-7.2-.3-5.7-.3-11.1-.5-16.6-1.7-11.4-2.6-22.9-3-34.2-5.4-5.8-1.2-11.5-1.9-17.2-3.4-2-.6-4-.9-5.8-1.6-1.7-.7-1-1.7-3.7.2-1.1-2.9-1.3-2.6-4.1-3.5-1.1-.4-3.7-1.3-4.5-2l-2-5c-.7-2.7-.1-5.7.2-8.4.7-6 1.7-11.9 1.7-17.9 0-2.6.5-2.7 1.4-4.7.2-.6 1-.6 1-1.5.1-1.3-1.2-2.2-1-3.6.2-2 2.1-4 2.8-5.9.9-2.2.9-4.5 1.4-6.8.6-3 2-6 2.6-9 .5-2.6.6-4.7 2-6.9s1-4 2-6.3c1-2 2.3-2.7 3-5.2 1.7-6 4.3-11.8 7.9-16.8 3.2 12.6 6.5 25.6 15.4 35.6 3.6 4.1 8.3 8.3 13.8 9.5 6.2 1.4 11.2-2.2 15.2-6.6a52.7 52.7 0 0014.3-35.9v-10.4c0-1.6-.8-5.6.3-6.9 1.2-1.4 4.5-.5 6.2-1.5 2.1-1.1 4.5-4.2 3.5-6.8 5.7 2.6 11.1 6 17.4 6.7 2.5.3 5.2-.2 7.4-.3l1.9.4c.4-.5.9-.6 1.4-.4.5 0 .8.3 1 .8 9 .9 18-3.6 25.8-8.3 4.5-2.7 9.4-6.8 10.7-12.2.4-1.9 0-3.7 2-4.7 1.6-.8 4.7.4 6.4.5 6 .5 11.8-.1 17.7 1.7 3.5 1 9.7 8.6 12.2 3.3 1 1 .5 2.8 1.6 3.8 1 .8 4.4 1.4 5.7 2.2 2.2 1.1 3.4 2.6 5.3 4 2.3 1.6 4.7 1.8 7 3.7 7.6 6.8 16.6 11.8 25.2 17.4 10.2 6.7 19.3 14.6 30.2 20 11.2 5.6 22 10.3 34.3 13.2 5.5 1.3 11.2 2.4 16.9 2.8 2.7.2 5.2 0 7.8.9 1.6.5 2.1.7 3.7.8.9 0 2.2-.5 3.3-.5 2.3 0 3.4 0 5.5.7 2.3.8 4.2 1.4 6.9 1.4 3 .1 4.8-1 7.6-1.8 2.2-.6 4.2-.3 6.2-1.5a56 56 0 0020.7-22.9 99 99 0 0010.3-35.7c.5-6.8-1-13.5-3.6-19.8-.8-1.8-5.2-9.3-3.8-10.7 1.5-1.6 6.6 2 8 2.8 4.5 2.5 12.7 3.3 15.9 7.4.8-1.6 5.3.7 6.8 1.4 1.1.5 1.5 1.5 3 1.6 1.4.1 2.9-1 4.2-1.4-1 2.7 2.2 2.8 4.4 3 1.6 0 3.3-.2 4.7-.3 2.7-.2 2.7-.8 5.2-2.2-.1 1 0 2 .3 3 1.6-2.3 4.6-.7 6.7-1.7-1.5-2.4 5-3 6.6-2.5 3.9 1.2 1.2 6.2 1.6 9zM547.4 358l7.6-2.2c-2 1.8-4 5-6.7 5.5-3.3.6-4.6-2.2-1-3.3zm-125.7 1.2c4.3.6 9 .2 12.7 2.7-1.8 2.1-3 4.3-6 3.1-2.6-1-4.8-4-6.7-5.8zm143.2 115.4c-2.8-2.6-2.5-3.7-1.1-7 .5-1.4 1.4-5.7 3.6-4.4.7.4 1.6 5.2 1.8 6.1.3 2.2-1 8.2-4.3 5.3zm15.8-14.7c-1-3.6-1-7.6-1.9-11.4-1-4-2.3-7.9-2.7-12 15 2.7 23.4 17.4 29.8 29.7a75.5 75.5 0 018 21.1c1.3 7.2-.9 12.6-3.4 19-1.3 3.2-3.4 4.3-6 6.4-2.1 2-3 5.1-5.3 6.8-1.7 1.3-3.9 2-5.7 3.2a141 141 0 01-5.3 3.7c-2 1.4-8.3 6.2-11.1 5.2-2.1-.8-1.2-3.3-.6-5 1-3.4 1.9-6.6 2.5-10.2 1.9-9.4 2.9-18.8 3.3-28.4.5-9.4 1-19-1.6-28zm-12.4 42.6c.2.5 1.2 4.4-1 3.6-1.4-.6.8-2.9 1-3.6zm8.8-157.4c1.7-.7 2.4 1.5 4 1.5 2 .1 2.4-2.2 4.6-2.2 5.3-.2 12.9 4.9 17.1 7.5-2 2.7-3 5.4-1.9 8.6 1 2.9 4.4 6.1 4.3 9.2-.1 3-4 5-5 7.7-1.2 2.5-1.6 7.4 1.8 8.5 5.7 2 7-8.9 11.4-9 1.9 0 4.3 3.5 5.7 4.6 3 2.5 6.4 4.3 9.9 5.9 2.3 1 5.6 3.2 7.4.3 1.4-2.4.2-6.1-1.1-8.1-1.6-2.4-15.6-13-14.8-14 .5-.5 4 .9 4.5 1.3 1.1 1 1.5 2.5 2.7 3.5 1.7 1.5 3.9 2.2 6 2.9 4.4 1.4 7.2 6.7 11.5 9.1 2.4 1.4 4 4 6 6.2 2.8 2.7 5.6 5.6 5.1 9.6-.2 2.8-.7 9.2-2.2 11.6-1.7 2.5-4.6 1.6-7.2 2.2-2.9.6-5.2 3-4.6 6.2.6 3.4 3.3 3.6 6 3.7 8 .2 5.1 5.3 8 10.9 1.4 3 4 4.2 5.7.6 1.4-2.8-1.1-7.3.4-9.7 1.8-3 11.7-2.2 13.8.1 1.5 1.8 2.4 4.2 4 6 2.3 2.8 3.3 6.6 4.7 10 1.5 3.6 2.8 7.3 4 11 .8 2.6 2.5 6.8-1.7 4.6-2.9-1.6-5-5.1-8.8-5.2-3.7-.2-5.8 3.7-4.7 7 1 3.2 5.8 4.6 6.3 7.8.6 3.6-5.5 7.2-7.3 9.8-4.3 6-.7 12.8 6.3 7.7 2.5-1.8 5-5.4 7.8-6.6 4.4-1.8 4.4 5 6.5 7.4 1.2 1.3 1.6 0 1 2-.3.7-1.6 1-1.7 1.8-.1.7.5 1 .5 1.6 0 1.7 0 2-.3 3.9-.5 2-.3 4.7-.4 6.8-.4 5-.4 9.6-1 14.5-.2 2.7-.8 8.3 2.4 9.6-1.1 1.8-2.7 6.8-5 6.4.3 1.2.2 2.7 1.3 3.5l.8-2.2c.7 1.7.1 1.9 0 3 .1-1.4-1.2 2-.5 1.5-.6.5-1.4.8-2.3 1.4-1.3 1-2 2.2-3 3.5-1.7 2.2-1.6 4.4-3.1 6.8-2.3 3.3-5.1 6.5-7.4 9.8-2 2.7-5.5 4.2-7 7.1-1 1.9-1.4 4-3 5.3-2.4 1.8-5.6 3.6-8.1 5.5-1.7 1.2-2.9 2.9-4.5 4-.8.6-3.3 1.2-3.3 2.4-3-.9-5.3-4-7.7-6-1.6-1.2-5.5-2.9-5.2-5.5.2-2 3.1-4.7 3.8-6.9.6-1.9 1.4-5.3-.2-7-3.4-3.3-7.2 3.9-9 5.8-3.8 4-5.4 0-8.5-2.9-5-4.6-8 .2-6.3 5.9.9 2.9 4.3 5.5 4.5 8.4.2 3.2-3.3 4.9-4.7 7.5-1.3 2.4-2 6.7.6 8.7 2.7 2.2 5-.4 6.8-2.5 1.4-1.6 3-5 5.2-5.3 2.8-.2 7.4 4.9 9.5 6.5-3.2.9-5.2 3.6-8 5.4-3.5 2.2-8.4 2.7-12.4 4.3-3.7 1.4-7 2.6-10.6 4.4-4.2 2.2-9.4 2.7-13.9 4.3-4 1.4-7.8 3.3-11.8 4.5-4.6 1.2-9.4 2-14 3.2-4 1-8.6 2-12.7 2s-4-2.6-5.4-6c-1.5-4-4.1-7.6-5.8-11.5-1.6-3.8.8-5.2 3-8s1.7-3.2 4.4-1.3c3.7 2.5 6.1.8 9-2 2.5-2.6 3.4-4.8 7-3 3.7 1.8 7.1 4.7 11 5.9 3.1.9 5.4.2 6-3.2.5-3.6-1.6-6.2-4.2-8.4-2-1.6-6.3-3.6-7-6.2-.8-2.8 3.2-7 3.6-10 .6-4-1.1-7-4.9-4.2-2.7 2-4.5 6.3-8.3 6.6 1-4.5 3.3-8.4 5.3-12.4 1.6-3.4 3-7.3 7.4-7.6 1.5-.2 2.4 0 3.8-.3 1.8-.3 4.2-.5 6.1-1 4.6-1.2 8.6-4.7 12.7-6.7 1 2.6 2.7 10 6.6 5.6 2.9-3.1-.3-8.6 2.3-12 5.5-7.4 17.4-2 24.6-5.8 3.1-1.6 5.7-6.8 1.3-8.4-2.6-.9-10 2.5-11.6 0-1.1-1.8 3.5-8.7 4-10.6 1.8-6 1.5-12.2 1.5-18.3 3.5 1.5 8 4.8 11.7 5.3 4 .4 4.6-4.1 3.6-7.1-1.4-4.1-6-7.5-9.3-10.2-1.4-1.1-5-3-5.9-4.8-.8-1.8.4-2.7 1.3-4.3 1.4-2.5 4.8-9 1-11.3-3.3-2.1-5.2 3.9-7.4 5.2-3.6 2.2-4.9-2.9-6.4-5.4-2.6-4.6-6.3-8.8-9.6-13-3-3.7-4.8-6.3-5.3-11.1-.3-3.7-1-6.5 3.3-7.4 7.6-1.4 18.8 2.2 25-4 3.3-3.3 1-6.7-3.1-6.5-5.4.2-10.6.5-16 0-3-.2-9 .5-10.4-2.5-2-3.8 1.3-10-2.2-13.3-4.4-4.3-5.5 5.4-5.6 8-.1 2 .4 5-.9 6.7-1 1.6-3.2 1.5-4.8 2.1-4.3 1.4-6.4 6.6-.8 7.7 1.8.4 4.5-.1 6 1.3 1.7 1.4 1 4 1.2 6-4-4.6-12-2.5-17.4-4.2-2.8-1-3.3-2.1-4.4-4.8-1.5-3.3-4.7-7.4-4.8-11-.2-3.2 2.4-5.5 3.6-8.1 1-2.3 2-6 1.8-8.6-.4-6.1-11.5.1-13.8 2.5-4.1 4.3-9.3 9.8-7 15.9 2 5.4 3 8.5-3.9 8-2.6-.1-8 .4-9.9-.7-1.5-.8-1-2.2-1-4.3 0-1.8.1-4.5-1-6.1-4.1-5.5-5 8.2-7.3 9.7-3.6 2.4-11.2 0-10.6 6.9.5 6 8.7 3.5 11 8.8 1 2.5.8 5.4 2.2 7.8 2 3.5 4.4 3.3 5.7-.3.9-2.5-.3-5.1.4-7.5 1-3.5 5.8-3.2 8.8-3.6 3.6-.4 6.7-1.3 10.2-2.4 4.2-1.4 4 .8 4.7 4 .8 3.9 2 7.5 2.7 11.3.7 3.6 2.6 7.5 2.9 11 .2 2.8-.7 2.5-3 4.1-2.4 1.7-5.2 6.2-8 7-4.4 1-8.7-8.8-12.6-3.8-1.7 2.2-1 6.8.1 9 1.6 3 4.5 3.8 2 7.2-1.7 2.5-4 4.5-4.2 8-.2 3.1 2 6.1 5.4 5.2 2.7-.8 4.3-3.6 6.4-5.3 3.6-3 6.5-.2 10.1 1.5 3 1.3 8.2 2.1 9.7 5.2 1.8 4-.6 5.4-4 4.3 1.4 4.4-.4 7-.9 11.4-.3 3.7-1.2 7-1.7 10.5-.7 4.8-.8 4.2-5.7 4.4-4 .1-8 0-12.2-.2-3.6-.1-6 .2-6.3-4.2 0-1.9 1.2-8.4-2.6-7.7-3.4.7-2.4 6.7-3.5 9-1.6 3.2-4.4 2.2-7.4 3-3.1.8-5.6 3.1-4.8 6.7.8 3.8 4.3 3.5 7.3 4.4 4.6 1.3 3.6 8.1 6.3 11.9 1.1 1.5 2.3 3 4.1 1.8 3.4-2.3.2-7.9 1.1-10.7 1-3 4.2-2.3 7.2-2.7 4.4-.6 9-2.7 13.5-2.7-.9 2.6-3.2 4-4 6.8-.5 1.4-.1 4.1-.8 5.3-.6 1.3-2.8 1.7-3.7 3.4-1.2 2.4-1.5 4.9-2.9 7.2-3.2 5.4-6 10.9-9.5 16.3a109 109 0 01-11.8 15.5c-4.3 4.7-5.6 2.4-9.4-1.4-1.5-1.5-4.7-3.3-5.1-5.6-.4-2.3 1.5-4.2 2.5-6 1.3-2.5 3.8-6.7 3.2-9.6-1.1-5.6-6-.5-8 1.6-3.2 3.6-5 7.4-10 4.6-3.2-1.9-7.2-6.9-11.3-5-3.8 1.7-2.8 6.5-.4 9 1.3 1.4 3.1 2.2 4.5 3.5 3 2.8 1.3 3.5 0 6.7-1.2 2.5-1.3 7.6.7 9.7 4 4.2 7.2-4.3 11-4.4 1.7-.1 9.1 4.7 9.6 6.5 1 3-7 6.7-9.1 8.1-5 3.4-10.3 6.8-15.9 9-6.5 2.6-1.6-5.6-5.2-8.4-4.7-3.5-5 6.2-5.5 8.7-1.3 6.4-8 6.6-13.6 8.2l-10.5 3c-3 .7-6.4.7-9.3 1.6-2.5.9-4.3 2.5-7.1 2.5-1 0-1.8-.3-2.7-.3-1.8 0-3.4 1-5.1.9-3-.2-1.7-1.1-2.7-3.1-.9-1.9-3.3-2.6-5.1-3.2-5.4-1.6-9.8-.2-10.6-7-.2-2 .1-10.5-3.8-9.5-4.6 1.1-.6 11.3-3.5 13.8-1.3 1.2-3.4.6-5.1 1-2.8.6-4 2.7-7 2.5a18 18 0 01-7.2-2.3c-3.3-1.7-7.2-2.8-10-5.4-3.8-3.5-5.4-9-7-13.7-2.4-7-3.4-14-3.8-21.2-.1-2.6-1.2-4.4-1.7-6.7-.4-2.5 1-3 1.3-5.4.3-2.2.2-4.7.7-7.1.7-3.6.9-7.2 1.6-10.7 1-5.9 2.8-11.7 4.1-17.5.5-1.8 1.3-7.6 3.5-8.2 1.6-.4 5.4 2 7 2.8 3 1.4 5.5 3.4 8.8 4.4 1.6.5 3.7.4 4.8 2 1.7 2.4.3 7.2 1 10 1 3.6 3.8 5.1 6.1 1.6 1.3-2 1-4.2 1.1-6.3.3-3 .3-3.7 3.6-3.5 3.3.2 6.5 1.4 9.9 1.6 3 .1 6.1 0 9.2-.1 7.4-.4 14.1-1.6 21.1-4.3 4.7-1.8 10.2-5.7 15.3-5.5 7.4.2 5.4 7 6.4 12 .6 3.1 5.8 12.6 7.7 4.9 1-3.8-2.2-9.4-.3-12.8 2.3-4 10.7-.7 14.5-1.6 3.1-.8 8.3-5.2 6-9-1-1.8-3-1.4-4.8-1.6-3.3-.2-6.7-.7-10-1.2-2-.3-5-.4-5.7-2.6-.7-1.9 2.4-6.7 3-8.5 2.2-6 3-10.7 3-17.2 0-2.9.2-6-.2-8.8-.2-1.1-1.8-4.5-1-5.5 1-1.4 3 .3 3.8 1.3 1.6 2 1 1.9.1 4-1.3 3-4 9.5.5 12 4.7 2.4 6.4-6 10.8-5 2.1.4 4.2 3 5.8 4.3 2 1.5 4.1 3.1 6.4 4 3.8 1.5 8 .4 6.5-4.3-1.2-3.8-5-6.9-7.7-9.5-4.4-4.3-4.2-6-1.2-11 1.3-2 6-11 .5-11.6-3-.4-6.1 4.4-7.7 6.2-2.7 3.1-4.2 4.5-8.2 2-3.8-2.5-5.6-4.6-10.3-4.8-5.5-.3-7.9-8.4-10.7-12.5-7.8-11.4-19.8-17-29.8-25.7-4.9-4.2-8.2-9.7-12-15-1.7-2.4-4-4.5-5.4-7.2-1-1.7-3.4-5.8-2.8-7.8.8-2.5 5.1-4 7-5.8 1.4-1.5 2.2-3.3 4.6-2.7 2.1.5 4 3.3 5.7 4.6 1.7 1.2 3.6 2.3 5.5 3.3 3.4 1.6 7.5 2.5 7.7-2.6.1-4.3-3.8-9-6.7-12-2.1-2.1-5.3-4-4.9-7.4.2-1.7 1.7-4.7 2.5-6.1 2.9-4.9 11.7-1.9 16.5-1.6 5.8.4 12.1-.6 16.7 3.5 1.5 1.3 5 4 5.7 5.8.9 2.2-.5 3.1-1.3 5.2-1 2.7-1.7 8 1.2 10 4.8 3 7.3-6.2 12.4-4.2 4.7 2 8 7.4 13.5 8.3 7 1.1 3-7.7.6-10.2-3.2-3.4-9.4-6.9-7.4-11.8.6-1.5 2-4.4 3.1-5.3 2.3-1.7 6-.8 8.7-.7 6.8 0 13.1-.5 19.7-1.7 2-.4 2.4-.6 3.8.8 2 2 3 4.8 5.2 6.8-3.2 3.5-8 7.6-5.8 13 2 4.7 6.2 2.4 9.1-.1 1.4-1.2 2.8-3.6 4.6-4.1 2.3-.6 5 1.5 6.9 2.6 2.8 1.6 9 6.4 12.2 3.6 4.3-3.8-.8-9.4-3.7-11.7-1.8-1.4-4.2-2.4-5.7-4.1-2-2.3-.9-2.7.3-4.7 2.3-3.8 1.5-8.7 5-11.7 2-1.6 4.8-2.6 7-3.8 2.3-1.2 4.7-3.6 6.9-4.5zm36.3 14.8l-2.6-1.6c2-1 3.3-.9 2.6 1.6zm47.8 46c.4-1.8 1.8-5 3.6-3.3 1.2 1 0 5 2.8 4 .1 2.5-1.8 2.3 1 4.5-3.5-.4-8.3-.2-7.4-5.2zM524.5 620c1-2.4 1-6 3.6-4 .2-2.8-.5-12 4.7-11.6 2.2.2 2.1 2 2.7 3.7 1 2.8 2.7 5.4 4 8-5.1.3-10.3 1.5-15 3.9zm1.7 32.8c3 2.3 4.5-.4 7.3-1.3 2.6-1 5.3-.4 8.1-1 3.6-.8 7.8-.7 11.2-.7l3.5.2c1.6.2 1.5.5 3.1 1l1.9-.4a2 2 0 011.9 1c1.4.5 2 .2 3.4.5 3.3.8 5.8 2.8 8 5.5 4.4 5.4 4.6 13.6 4.5 20.3 0 2-.2 3.8 0 5.8.2 1.7 1.4 4.4 1 6-.9 2.7-3.2 2.1-6 2.3-1.6 0-3.2 1-4.5 1.2-1.3 0-1.8-.4-3-.7a23 23 0 00-10.5 1.2c-3.4 1-6.3 1.9-9.7 2.5l-6.4 1c-1.9.2-2.6 1.2-4.2 1.5-1.6.4-3-.1-4.6.2-2.1.4-3.6 2-5.5 2.7-2.7 1-7-.5-8.1 2.7-.5-3.1-3.5-2.3-5.8-2.5-3.7-.5-7.4-2.2-11-3.2-2.9-1-13-9-15-5.7 0-.3.4-2.2 0-2.4-1-.8-1-.4-2.2-.8-1.8-.8-2.5-1.4-3.8-2.7-2.6-2.4-6-3.7-8.8-6-6.8-5.7-9.1-17.3-10.8-25.5-2.2 3.9-1.4-1-1-2.7.9-4-.3-5.9-.5-9.6-.3-3.5 1.3-4.2 4.5-4.6 3.8-.4 7.5-1 11.3-2 3.6-1 7.2-2 10.4-3.8 3-1.7 6.2-2.3 9.2-3.8l10-4.9c1.6-.7 8.3-5.8 9.5-5.5 2.4.7.1 4.9-.6 6-1.9 2.8-5 4.1-7.7 6-2.6 1.5-10.2 9.1-2.4 8.4 5-.5 8.6-6 11.8.2 1.2 2.2 2.9 4 1.6 6.1-1.9 3.2-7.3 4.6-10 6.7-2.5 1.8-7.4 10.3-2.4 11.2 1.4.2 3.6-.1 4.6-1.2.8-.8.7-2.3 1.4-2.8 1-.7 3 .2 4.2-.2 1.7-.6 2-1.5 2.7-3 1.7.7 1.7 1.8 3.8.8.6-.4.9-1.7 1.7-2 1-.4 1.3 1 1.9.8 1.5-.6 1.5-1.2 2-2.8zm-106.4-24.8c-3 .3-6.2.5-8.7-1.4 3 .2 5.8.9 8.9.2 1.2-.2 3.1-1.4 4.4-1 4.5 1.5-3.4 2.1-4.6 2.2zm-8.2-261.5c0-1-1-15.1 3.8-9.6 1.4 1.5 0 3.5-.3 5.2-.3 2.8.7 5.6 2.2 8 1.4 2.2 4 4.2 3.6 7-.4 2.6-3 4.7-4.2 6.8-3-4.8-4.9-11.6-5.1-17.4zM401 218.9a182.2 182.2 0 00-33 6.5c-10.5 3.1-20.3 8-30.2 12.7l-6.2-26.2c-1-4.2-2-8.4-2.8-12.7-.7-3-3-8.6-2-11.5.5-1.6 1.2-1.6 2.3-2.6.7-.5 1.9-2 2.6-2.3 1.7-.7 6.1-1.4 7.9-1.3 1.6.1 2.4.7 4.1.3 1.4-.4 2.6-1.5 4-2.1 3.3-1.5 7.5-2 11.1-2.8 3.5-.8 7-1 10.5-1.7 3-.7 4.5-3 7.1-2.9 6.8.2 14.2-.5 21-2.2 7.5-1.8 15.7-1.4 23.4-1.6 3 0 5.2-.8 5.2 2.6 0 4.2-1.6 9-2.5 13a211 211 0 00-4.2 27c-.3 4.6-2.2 4.3-6 5.7-4.1 1.6-7.9 1.6-12.3 2.1zm-58.6 92.8c2.8.4 2.5-7.1 2.7-8.6 6.5 12.3 13.9 24.2 19.7 37 1.3 3 2.5 6 4 8.9 1 2 3.1 4.7 3 7 0 2.5-2 3.4-4 4.3-2.3 1-3.2 1.5-4.8.4-1.9-1.4-3.5-5.6-4.7-7.7l-5.3-9.4c-3.2-5.6-7-11-9.7-17-2.4-5.6-6.2-10.4-8.8-16-2.7-5.4-6.3-10.5-9.3-15.8 3-1.3 6.8-4.5 10.3-4.3 3.6.2 3.5 3.7 3.6 6.5.2 3-.8 14 3.3 14.7zm8.8 55.7c-1.6 2-5.3 3.1-7.5 4.2l-9.5 4.3c-10.2 5-20.3 9.6-30.7 14.1a340 340 0 00-16 7.6c-2.7 1.3-8.8 6.2-12 6.3-3.6.1-3.6-7.2-4.4-10-.7-2.2-2-4-2.8-6.2-.3-.9 0-1.5-.6-2.4-.6-1-2.2-1.8-3.1-2.7-3.6-3.7-6.6-8.4-9.7-12.5-2.8-3.8-7.6-8.6-9-13.2-2.5-9.2 12.8-14.2 18.7-17.9 10.3-6.4 20.6-13 30.4-20.2 4.5-3.2 8.8-6.6 13.3-9.9 2.1-1.5 8-7.3 10.6-5.2 1 .8 1 2.9 1.5 4 .9 2.5 2.3 4.6 3.7 6.9 1.2 2 3 4 3.8 6.1.9 2.6.9 4 2.6 6.4 3 4.3 4.5 9.2 7.4 13.5 2.8 4.2 5.4 7.3 7.2 12 1 2.6 2.7 5 4.2 7.4l2 3.5c1 2.2 1.5 2.1 0 4zm-87.7 35.8c-2 1.4-4.9-1-6.8-1-.8 0-1.6.6-2.2.6-1.6 0-3-1.2-4.5-1.7-7-2.4-15.5-2.5-21.5-7.4-12-9.7-6.3-29.1-4.1-41.7.4-2.6 1.2-6.2-.9-8.3-2.2-2.3-5.7-1-7.8 1-2 1.9-3.5 4.6-5.3 6.8-2.9 3.5-6 7-9 10.2-11.2 11.8-22.9 25.2-36.6 33.8-5.7 3.6-10.9 8.5-17.1 11.2-7.6 3.3.2-9.4 1.5-11.5 8.9-13.5 21.8-24.1 32.6-36 2-2.2 5-5.2 5-8.4 0-4.9-4.3-4.4-7.6-3.1-3.2 1.2-4.8 4.4-7.3 6.5-3.2 2.7-6.9 4.8-10.4 7-7.6 4.6-15.6 8.5-23.7 12.3l-11.3 5.2c-1 .5-7.2 4.4-7 1 .1-.4 4-5.2 4.5-5.4 2.5-.9 3.7 1.8 5.9-1.7 1.5-2.5 1.7-3.8 3.9-5.7.4-.3.6-1.1 1-1.7l1.2-1.1 1.4-1.6c1.7-2.2 5-2.2 6.5-4.7.5-1 .2-2.2.9-3.2 1-1.4 3-2 4.1-3.1l2.4-2.5c.4-.4 1.1-.7 1.6-1.2 1.2-1.2 1.1-2.3 2.8-3.3 1.5-1 2.2 0 2.7-2.3 1.9 1.1 1.6-.6 2.4-1.8 1-1.6 2.2-2.4 3.5-3.5 3-2.6 5.7-6.4 8.2-9.6a65 65 0 0013.2-27.5c.4-2.4.7-4.9.9-7.3 0-1.3-.4-4.4.4-5.7 1.3-2 3.6-1.1 5.4-2 .6-.3 1.2-1.1 1.8-1.3.8-.3 1.7 0 2.6-.3.3-.1.3-1 .9-1.2 1-.2 2 .2 3 .2 2.3 0 4.5-.4 6.7-1.1 2-.7 3.6-2.2 5.6-2.7-.2 0 3.2.3 3 .1l.5-2.5c1.3 1 5.7 2.1 7.1 2 2.2-.4 1.8-2.4 3.6.2l3.2-2.8c.8 3.4 6.4 1.8 8.9 2 3.5.2 6.3-.5 9.5.8 4 1.5 7.4 3 11.6 3.5 3 .3 4.2 1.6 7 2.5 4 1.1 4.3 2.4 3 6.4-1 3.2-1.8 5.7-.4 9 2.6 5.8 9.5 8.3 14 12.3-10.5 7.4-20.8 14.6-31 22.4-4.2 3.3-8.7 6.6-11.1 11.5-2.2 4.6-3.5 10-4.9 15-3 11.1 5.6 18.7 14.5 23.6 1.9 1 14.6 17 12 18.8zm-17.3 13.5c-.6-2.2-.5-2.7 1.5-3.5.8-.3 3.8-.7 4.3.4 1.1 2.4-4.7 2.4-5.8 3zm88.3-156l2.1 14.4c.4 2.7 1.2 5-.7 7-1.1 1.1-3.9 1.6-5.3 2.2-2 .8-4 1.8-6 2.9-3.6 1.8-7.3 3-10.7 4.6-1.6.7-2.5 2.1-3.8 3.1-1.8 1.4-4 2-5.8 3.3-3.3 2.3-6.4 5-9.7 7.3-3.7 2.6-4.5 1.8-6.6-2-1.9-3.5-4.2-5.1-6.9-7.8-1-1-4.8-7.1-1.6-7.6.8-.2 3.6 1 4.3 1.5 1 .6 2.5 4 3.3 4 1.5.2 3.3-4 4.2-5 5.9-7 12.3-14 19.1-20.2 3.6-3.3 7.3-6.2 11.3-8.8 2.8-1.8 5.3-4.4 8-6.1.7-.5 1.4-.9 2.1-1.1 1.5-.7 2-.1 1.7 1.7.8 1.8.7 4.7 1 6.7zm-128.4-6.2c1.5-1.4 3.3-2.6 4.5-4.2.7-1 1.2-2.6 2-3.1 1.4-1 3.4-.6 5-2 1.6-1.3 3-3 4.5-4.3l10-8.8c1.8-1.7 3.8-4 5.4-5.1l1.4-1c1-.5 1.5 0 3-.5 1-.3 1.6-1.5 2.4-2 1.8-1.4 4.2-2 6-3.3 1.7-1.3 2.5-3.4 5-4.4 2.9-1.4 5-.3 7.2-2.9.9-1 1.1-2.3 2.5-3 1.6-.7 3 .1 4.6-.8 1-.6 1.7-1.9 2.8-2.5 2-1.2 4.1-1.3 6-2.8 1.5-1.2.6-1 2.4-1.6l2.6-.6c2.7-1 7.2-2 8.8-4.7.8 1.2 1 1.5 2.4 1.1a15 15 0 002-1.9c.4.6.8.6 1.3.1 2.9-1 5.5-2.7 8.4-3.6l1.2.6c.5 0 .8-.2.6-.8 1.2-.2 2.5-.7 3.5-1.1 2-.9 4.1-3 6.5-2.2 3.8 1.2 4 9.1 4.7 12.3l5 23.2c.6 3.1 1.2 6.3 2.1 9.4.6 2 2 5 1.5 7.1-.6 2.6-3.2 3.5-5.3 4.7-3 1.7-5.9 3.6-8.7 5.5a126.3 126.3 0 00-29.2 31 23.2 23.2 0 00-8.3-6.4c-1.9-.7-3.5-.2-5.3-1-1.3-.7-2.4-1.9-3.6-2.7a80.4 80.4 0 00-25.2-10.6c-17.8-4-35.3 2.1-52.5 5 3.5-4.8 8.7-7.9 12.8-12zm119.3-130.7c3-10 8.1-19.6 15.4-27 3.7-3.8 8-7 12.9-9.2 4.2-1.8 9.2-3.5 9.2 2.3-.2 12.7-3 25.2-3.5 38a47.6 47.6 0 009.3 32.4l-14.3 3.4c-3.6 1-7.3 2-10.7 2.5-3.4.6-6.5 1-9.9 2.2-2.2.7-5.7 3-8.2 2.6-4-.9-3-15.4-3.3-18.9-.6-9.8.1-18.8 3-28.3zm74 19.1c5.4-6.7 11.2-14.5 20.5-15.8 9-1.2 12.3 9.6 11.7 16.9-.2 2.4-.5 8.8-2.3 10.8-2 2.2-5.5.6-8 .2-10.9-1.4-22 1-32.9 1l11-13zm44.4 26.8c3.8.5 6.8 1 5 5.4-3.7 8.6-6.5 16.8-3.3 26.2 2.5 7.1 10.2 15.8 18 17.3 2.6.5 6.7-.4 8.4 2.3 1.5 2.5-.2 9.8-.3 12.5a48.2 48.2 0 01-9.8 28.2c-5.9 7-13 12.6-21.5 6a45.2 45.2 0 01-13.4-24.4c-1.2-4.6-1.3-9.2-1.5-13.9-.2-4.2-1-6.8 3.7-7.7 1.2-.2 4.4-.1 4.4-2 0-2.6-3.4-1.6-4.7-1.8-5-.5-2.7-6.3-2.2-10.1.8-6.5 2-12.8 3.3-19.2 1-5.5 1-12.6 3.2-17.7 1.3-3 8.2-1.5 10.7-1.1zm9.3 19c.6-3.4.9-7.8 4.3-9.8 3.9-2 5.8 1.4 7.7 4.2 5 7.5 10.5 14.6 11.3 23.9.1 1.1.6 3.3-.5 4.1-.5.4-1.6-.5-2.3-.5-4 .3-6.9 1.4-10.7-.9a19.9 19.9 0 01-9.8-21zm29.9 21a53.5 53.5 0 00-8.8-22.2c-2-3.4-6.1-7.1-7.6-10.7-.7-2 .6-4.3 3.4-3.5 1.4.4 4 4.1 5 5.4 2.4 3.3 4.4 7 6.3 10.5 2 3.8 7.7 17.8 1.7 20.6zm-25-81.2c.4-7.7.4-16.5 5.4-22.8 3.9-5 11-7.1 16.6-9 7.8-2.6 17-3 25-2.2 7.2.7 12.5 5.6 17 10.9a95 95 0 0110.9 18.6c.7 1.6 7.2 11.7 2.8 11.5-1.7-.1-3.2-3.5-4.6-4.5-1-.8-2.2-.7-3.2-1.4-1-.6-.8-1.3-1.5-2-5.4-5.8-10.4-2.5-16.1.5-.3-2 .2-5.7-1.5-7.2-2.2-1.9-4.5 1.1-6 2.6-1.5 1.4-3.3 3.8-5 4.6-2.4 1-1.6 0-3.6-.9-4.1-1.6-7.3 3.2-9.3 6-.8 1-2 3.6-3.4 3.9-1.4.2-1.6-.7-2.7-1-3.3-1-4.2 1.3-5.2 4.1-1.2 3.3-2.2 6.4-3.9 9.4-3 5.4-4.4 7.2-2 13-3.5.6-4.2 1-6-2.1-1.8-3.2-2.2-6-2.1-9.6.2-7.8-2.1-14.5-1.6-22.4zm81.9 36.7a52 52 0 016 23.6c0 3.8-.2 8.4-2 11.8-1.7 3.3-5.2 5-8.5 6.4a43.6 43.6 0 01-25 1.8c-4.2-.8-8.4-.3-12-2.9-2.8-1.9-6.1-3.8-7-7.3-.3-1.5.2-2.8.1-4.2.2-.7.1-1.4-.1-2l-1.5-.9c-.4-1 .4-2.3.2-3.5-.3-1.4-1.4-2.5-2-3.8-1.5-3.5-.4-5.4 2.4-7.8l2-1.6c.6-1 1.3-1 2 0 1.4 0 1.3.5 2.7 0 3.1-.8 5.7-4.1 8.7-5.3 1.2-.4 2.9 0 3.8-.8.9-.8.4-2.3 1.1-3 2.4-2.4 6.1-.2 8.3-3.5 1.8-2.8 1.4-6.6 1.6-9.7 5.5 1 8 6.3 12.4 9 1-3.5 1-3.4 4.5-4.4-1.6 3 1 5.7 2.3 8.1zm4.2-36.8c1 1.3 1.8 4.5 0 4.9v-5zm4.7 11.8c8.4 0 13.8 10.7 16.3 17.2 2.6 7.2 5.5 16.8.5 23.7-2 2.7-4.3 3-7.4 2.6-3.7-.4-5.6-1-4.1-4.9 2.7-7.4.7-16.8-4.2-23 6.7-1.3 2.5-7.4-.9-9.7-3.8-2.6-7-6-.2-5.9zm-192 384.5c-2 5.3-4 10.5-5.7 16-1.6 5-.7 10.8-2.6 15.7-1.2-.6-1.6-1.6-2.6-2.3-.7-.4-1.8-.5-2.3-1-1-.7-3.3-3.5-4-4.6-2-3.7-.6-9.8.5-13.7 1.4-4.8 3.9-9.4 7.2-13.1 2.3-2.7 3.5-1.8 6.6-.5 1.8.7 3.7 1.2 2.9 3.5zm-15 41.4c-1.6 3.2-4.5 5.9-6.3 9-1.8 3.5-3.2 7.3-5.5 10.4-2.4 3.1-4.5 2.6-7.7 4-1.2.5-1.7 1.4-2.6 2-1.8 1.4-3.7 2.2-5.6 3.4-1.3-3.2-5.3-19.5-10.5-19.1-4.4.3-2.1 8.8-1.6 11.3.5 2 1 4.2 1.8 6.3.8 2 3 5.1 2.2 7.4-1 2.9-3.8 2.7-5.2.6-1.1-1.8-1.7-4.1-2.5-6-.8-1.7-4.1-11-7-9.5-2.9 1.4 1.5 10.3 2.3 12 1.7 4.3 5.1 8.3.6 11.7-6.8 5.2-15.1 9-22.7 12.7-4.5 2.2-8.5 5-13.1 6.8-4.4 1.6-9.4 2-13.6 3.8-1 .5-.3 1-1.8 1.3-1.3.2-3.5-.4-4.8-.4-2.3 0-4.5.2-6.8 0-1.2-.2-4-1.6-3.6.7-1.8-.5-2.5-2.3-3.8-3.4-1.2-1-2.6-1.6-4-2.4-2.6-1.6-4.6-3.4-5.4-6.5-1.9-7.3 2-15 7-20 2.8-3 6.1-5.3 8.7-8.5 1-1 1.6-2.3 2.7-3.2 1.4-1.1 3.4-1.3 4.7-2.4 1-.8 1.4-2.1 2.4-2.9 1.6-1.1 3.4-.6 5-2.1.8-.8 3.7-4.8 3.5-5.9l2.4.8c.5-2.4 4.7-5.4 6.8-6.6 1-.6 3-.6 3.8-1.2 1-.8 1-2.6 1.8-3.7 2.4-3 7.3-4.4 10.4-6.5a112.1 112.1 0 0030.4-31c2-3.3 4-6.7 5.5-10.3 1-2.2 1.9-6.2 4.1-7.5 2.4-1.3 7.8.5 10.4.7 4 .3 10 0 13.4 2 3.7 2 .7 3.7-1.2 6.1a39 39 0 00-5.9 12.2c-1 3.3-1.2 6.5-2 9.8-.7 3.5-.7 8.2 1 11.4 1.8 3.2 14 9.1 12.3 12.7zm-146.5 64.4c-8.3-11.3-1.4-28 6.7-37.1 9.9-11 23.9-17.3 35.4-26.3 13.3-10.4 27-20.1 38.8-32.3a136 136 0 0015.9-20c4-6.2 6.9-14.3 15-15.2-4.8 6-5 14.5-8.8 21.1-3.9 7-9.6 12.9-15.5 18.3a545 545 0 01-39.2 32c-6.8 5.2-13.4 10.6-20.3 15.8-6 4.7-12.5 8.7-16 15.9-6 12.3-6.4 30.5 7 38-6.9-1.3-14.7-4.3-19-10.2zm727.3-512.2c-2.4-4.9-7-6.7-11.7-8.6-4.5-1.9-8.7-4.2-13.7-4.8-2.3-.3-8.6.4-8.9-2.9-.2-2.7 6.4-5.4 7.9-7.5 2.2-3 3.8-8 2.9-11.8-.8-3.7-4.4-4.9-7.7-5.5-10.4-2-21.4-.6-31.7.3 1.2-1.8 3-3.3 4-5.4l1.7 3.4 3.1-5.7 2.4 2.7c-1.3-4.6 3-4.6 2.6-8.5-.2-1.5-1.2-2.1-1.5-3.3-.4-2.4 1.4-4-.7-6.2-2.4-2.5-6.2-1.5-9-1.2-.3 0-.8.7-1.2.7-.7.1-1-.8-1.8-.7-2 .1-3.8 1.7-5.8 2.2-9.5 2.2-18.9 6.2-28 10a121 121 0 00-26.2 14c-8.5 6.4-14.7 14.6-21.6 22.7-3.2 3.8-6.6 7.4-9 11.8-1.3 2.2-2.4 9.3-4.7 10.4-2.5 1-8.7-2-11.3-2.7-6-1.3-11.9-2-18-1.6-4.8.2-10 0-14.8.6-2.8.4-9.8 3.5-10.2 7-.2 1.5 1.6 2.8 2 4.2.6 2.2-.4 4.6.3 6.7 1.4 4.5 7.9 6.2 11.8 7.6 10.7 3.9 21.6 7 32.5 10.5 4.7 1.5 8.8 4 13 6.4 3.6 2 6.8 4 3.2 7.8-3.4 3.7-3 5.1-2 10 1.1 5.3 1.5 10.6 2.9 15.8 1.4 5.2 4 10.1 3.5 15.6-.5 5.4-2.8 11-5 16-2 5.1-4.4 10-6.7 15-2.1 4.6-4.5 9.3-9.4 11.3a65.5 65.5 0 01-31.4 1.8 156 156 0 01-33.4-8.2 109.2 109.2 0 01-29.8-16.7c-4.5-3.7-9.3-6.5-14.1-9.8-4.8-3.4-8.5-7.9-12.8-12a92.7 92.7 0 00-29-17.6c-11.8-5-24-4.4-36.6-5 2-3.8 4.5-7.5 5.5-11.9s.2-9.3-.4-13.8a46.3 46.3 0 00-9-23.5c-2.5-3.2-5.4-5.8-9.6-6.2-2.6-.3-7.3 1.6-9.1-.5-.8-1-.6-3-1.1-4.1-.5-1-1.4-2.1-1.9-3.3-2.1-4.8-4.7-9-7.4-13.6-1-1.9-1.8-4.5-3.2-6-.8-1-1.8-1.3-2.2-1.9-.8-1.1-1.2-3.2-1.9-4.5a28 28 0 00-14.2-13c-2-.8-3.6-1-5.8-.9-.6 0-1.3.4-2 .4-1.4-.2-1.2-.7-2.4-1-8.1-1.6-19 .7-26.6 3.6a38 38 0 00-19.4 14.4c-12 17.8-9.2 40.9-4.1 60.5-3-.8-6.1-1.8-9.2-2.4-2-.5-4.5-.4-6.2-1.4-3.8-2.2-.7-8-.7-11.6 0-9.4-4.4-24-14-28-10.1-4.2-22.4 7.4-28.6 14-4 4.2-7.6 8.8-11.4 13.1-2.7 3-6.2 8-10.9 7.2-10.2-1.8-7-21.2-6.6-27.8.7-10.4 2.2-20.9 2.2-31.3 0-6.3-1-14.9-8.8-15.6-10.7-1-20.9 8.7-27 16.2-16.5 19.7-20.2 45.8-15.8 70.5.7 3.7 2.7 8.1-1.2 10.4-5.1 3-11.7 4.7-17.3 7-12.4 4.8-23.9 11.3-35.5 17.6-11.6 6.3-23 12.5-33.4 20.6a369 369 0 00-30.1 25.7c-4.8 4.5-9.3 9.3-13.6 14.2-4 4.7-7.3 10-11.7 14.4-3 3-8.5 7-9.2 11.4-.5 3.7 5.7 6.2 8.4 8 2 1 3.3 1 3.4 3 .2 2.7-2.5 6.8-3.5 9.2a61.2 61.2 0 01-10 16.7c-9.3 11.5-20.6 21.3-31.3 31.6-10 9.5-19.8 18.9-27.1 30.7-1.8 2.9-6.3 8.8-2 11.5 1 .8 4.4 1.3 5.6.6 1.3-1 .6-2.4 2.3-3.3-.4 3.1 13.9-3 15-3.6 3-1.5 5.7-3.3 8.8-4.7 1.8-.8 2-2 3.4-2.9.7-.4.7.2 1.7 0 1-.4 3-.5 3.7-1.3 0 0 .7-2.2.1-1.7 2.5-1.7 3.9.9 2.4 3.3-4.3 7-9.7 12.3-11.4 20.9-.7 3-1.7 8.8.2 11.7 0 0 .7-.2.8-.1l1 1.3c1.7 1.6 1.6 2.3 4.4 2.3a15 15 0 004.8-.8c.9-.4 1.3-1.4 2-1.8.6-.4.6-.6 1.2-.8.1 0 .4 1 .6 1 1.3-.2 1.9-1 3-1.7 3.3-1.8 6.5-3.9 9.6-5.7 3.1-1.9 5.5-4.5 8.6-6.7 3.3-2.3 6-4 8.5-7.3 1.8-2.2 3.9-3 5-4 1.5-1.4 3.9-6.4 6.2-7 1-.2 1.8.7 2.4.3.6-.4 0-1.2.2-1.7.6-.9.7-1 1.7-1.8 1.3-1 2.9-1.4 4-2.7 1.2-1.5 1.4-3.2 2.8-4.6 3.6-3.4 6.8-7 10.6-10.2-1.5 8.1-3 16.2-1.8 24.5 1.1 8 4.5 11.7 11.2 15.8 1.5.9 3 2.2 4.7 2.8 1 .4 2.4.2 3 .5 2.5 1 1.7 2.9 2 5.1.5 3.5 3.7 6.1 5.7 8.8 1.8 2.3 4.9 7.4 7.7 8.2 2.6.7 5-2.4 7.3-3.6 3.2-2 6.8-3.4 10.2-5 6.7-3.1 13.2-6.8 19.9-10.1 3-1.5 6-2.1 9.3-3 3.8-1.3 7.1-3.5 10.8-5 6.7-2.7 13-6 19.6-8.9 13.7-6 28.7-10 40.8-19 5.5-4 12.6-4.4 18-8.3 5.7-4.1 2.2-10.4-.2-15.4-6.6-13.7-10.5-28-19.7-40.4-4.7-6.5-9-13.2-13.2-20.1-3.6-6.1-3.6-13-4.5-20-.6-4.6-1.2-9.2-2-13.8-.4-2.9-2-6.6 0-9.2 2-2.9 6.7-4 9.6-5.6 3.8-1.8 7.4-3.8 11.2-5.4 8.9-3.6 18.2-6.1 27.4-8.3 2.8-.7 14.6-5.4 16.8-2.6-2.7 1.8-3.5 5.2-4.8 8-1.8 4.4-3.7 8.4-5 13-2.8 9.2-5.2 18.6-7.5 28-2.2 9.4-5 18.8-5.6 28.5-.4 4.9-.1 9.8-.1 14.7 0 5.3-1.1 10.4-1 15.7.2 3.5.5 7.7 2.5 10.7 2 2.8 5.2 3 8 4.5 3.7 2 5.2 2.8 5.2 7 0 5-.3 9.9.2 14.8 1.6 17.3 7.4 37.7 19 51 .7 1 23.1 29.2 25.6 25 1.7 2.1 4.3 2.8 6.4 4.6 3.3 2.8 6.5 5 9.3 8.4 5 6.3 9.2 13.6 10.4 21.6 1 6.9.5 15.1-3.4 21-4 6-12.2 10-18.5 13a46.3 46.3 0 01-25.6 3.3c-4.5-.5-8.8-1.3-13.2-2-1.9-.3-4-.3-5.7-1-1.9-.7-2.5-1.5-4.4-1.6-1.3 0-2.1.2-3.6 0-1.8-.4-3.7-1.1-5.5-1.6-2-.5-3.7-1.2-5.5-2.2-1.8-.9-3.7-1-5.3-1.9-2.9-1.4-3.7-3.8-7.6-2.5-4 1.4-3.2 5-5.8 7.3-2.3 2.2-5.1.2-7.4-1a104 104 0 00-22.3-8.8c-4.5-1.2-9.3-1.4-13.6-3-3.7-1.6-5.3-4.4-8-7a13.6 13.6 0 00-10.7-3.7c-7.1.5-12 8.2-15.8 13.6-10.7 15.1-22.4 28-36.5 39.8-6.8 5.6-14.4 10.4-21 16.3-2.8 2.5-4.8 4.8-8 6.7-4.3 2.4-8.2 5.4-12.3 8.1-16.1 10.7-27.9 26.3-23.4 46.6a33 33 0 0013.4 21c3.4 2.6 6.5 4.6 10.8 4.5 4-.2 7.7-.3 5.3-5.1 3 .9 5.6 3.2 8.9 4.4 3.8 1.4 8.8 2.2 12.9 2.3 6.5.2 14.1-3.3 19.8-4.7 1.6-.4 4.7-1.1 6.5-2.6 1.4-1.2 1.1-2.6 3.3-3.2 2.9-.7 4 .2 6.7-1.6 4-2.5 8.3-4 12.4-6.3 5.6-3.1 11-6.7 16.4-9.9.7 2 5 14 7.7 8.3 2.3-5-5.2-9.4-.6-14.5 4.4-4.9 5.3.3 9.5 2.5 5.9 3.2 5-2.7 3.3-6.2-.7-1.4-2.1-3.5-1.7-5 .8-3.2 3.3-1.4 5.3-1 3.2.4 5.7-.4 8-2.5 2-1.8 5.3-3.3 6.4-5.6.6-1.2.7-2.7 1.2-4 .7-1.6 1.1-1.2 1.4-3.2-.2-1-.3-2.1-.3-3.2l1.6-.3s0-2-.2-1.8c.5-.7 1.5-1 2.1-2 .5-.8 0-2.5.3-3.6.4-2.1 1.6-3.8 2.6-5.7 2 8.8 1.5 18 3.5 27a54.1 54.1 0 009.7 19.7c2 2.7 4.7 4.7 6.8 7.3 1.8 2.2 2.7 4.2 5.4 5.5 1.7.9 3.7 1.3 5.5 2 1.2.6 3.8 2.8 5 2.8h1c.1 0-.3-1.2 0-1.2 4 3.7 8.1 3.8 12.7 6 2.1 1.1 2.9 1 5.1 1.5 3 .5 5.4 2.1 8.1 2.3 4.3.3 9.1.9 13.6.7 1.2 0 3.4-.8 4.4.2.6.7-.6 5.8-.6 7-.8 12 .8 24.8 6 36 4.2 9.1 8.7 20 16.2 27 8.3 7.8 20 13.3 31.1 15.4 12.3 2.4 24.5.6 36.9-.1a154 154 0 0036.2-6.2c11.3-3.3 22-7.7 32.7-12.4 7.3-3.2 16.6-7.7 12.8-17.3-1-2.3-4.6-8.8-7.7-5.6-2.9 2.8 1.9 8.2 4 10-16 11.2-35.6 14.9-54.4 18.8-10.3 2.2-20.5 2.1-31 2.1-8.9 0-17.7.3-26.6-1-8-1-17.3-3.2-23.2-9a95.7 95.7 0 01-16.4-21 58.2 58.2 0 01-6.2-27c-.2-4.9-.4-10 .1-14.9.4-3.6 2.2-4 3.1-6.9 2.2 3 3.5 1.9 6.1.2 1.7 4.6 1 9.5.7 14.3-.3 4.7.3 9.4.9 14.1 1 8 4.8 16.2 9.6 22.6 2.1 2.8 5.4 4 8.4 6 3.7 2.6 7.6 5 11.5 7.2 7.4 4.3 15.5 8 23.8 8.6 3 .3 5 1.8 8.6 1.6 2-.2 4.1-.9 6.2-.8 2 0 3.8.7 6 .6 8.7-.7 17.8-3.6 26.6-5.2 9.4-1.7 19-3.5 28-7 3.8-1.4 7-3.3 9.3-7 1.5-2.6 1.1-7.3 4-9-1.9-2.4-1.2-2.8.5-5 .7-1 3.2-3.7.2-3.7.9-4-.6-7.8-1.3-11.6-.3-1.7-.2-4.2-1.2-5.7-.6-.8-1.6-.8-2.2-1.4-.5 0-1-.3-1.3-.7 0-.7.3-1 1-1.2-.2-1.3.8-.9-.2-3a21.8 21.8 0 00-6.2-7c-2-1.7-3.5-4.5-5.8-5.4l-9.4-3.4a44.6 44.6 0 00-22-2c-3.5.7-6.9 1.4-10.2 2.5-2 .6-5 2.3-6.7.5a24 24 0 01-1.8-6.6c.3-2.3 5-3.2 6.8-4 2.6-1.2 7.5-2.6 9.1-5 .7-1 0-5.4 0-5.5 1.2-.7 5.8 9.9 7 10.6 1.9 1 7-.3 8.9-.5 5.6-.7 11.3-1 16.9-2.4 10.5-2.5 21-6.5 31.2-10a273.4 273.4 0 0056-26.5 96.9 96.9 0 0022.7-19.1c2.8-3.4 4.8-7.3 7.7-10.6 3.3-3.8 2.3-7.2 3.8-12 3-9.6 6.6-18.3 8.3-28.4 1.7-10.4 2.4-21 1.9-31.5-1-20.8-2-40.4-11-59.5a211.8 211.8 0 00-32.1-49c-3-3.4-6.2-6.6-9.9-9.2-4-2.9-8.3-5-11.9-8.4-3-2.7-5.4-6-8.5-8.5-3.7-3.2-8.2-4.6-12.6-6.6-4.3-2-8.2-4.5-12.5-6.3-2.6-1-5.3-2-8-2.8-2-.6-4.8-.6-6.6-1.7-3-1.6-6-6.5-8-9.2-2.7-4-4.2-8.7-5.6-13.4l-4.7-17c-.5-2-2.6-8.7 1.5-7 1.2.4 2.3 2.5 3.2 3.4a27 27 0 006 4.5c3.4 1.9 7 4.2 10.4 5.5 2.9 1.1 5.9 3.4 8.6 5 .4.2.5 1 1 1.3 1.3.6 2.1-1 3.3-.6 1.7.5 2 2 2.8 3.3 1.3 1.7 2 1.9 4 2.8 2.2 1 3.8 3 6 4 2.6 1.2 8.4.2 8.8 4.4 4-2.7 9.1 2.5 11.7 5.2 2.5-4 7 .6 11-.7-2.2 3-1.8 2.7 1.6 3 2.8.4 4.5 2.3 7.3 3.4 2 .7 4.2 2 6.2 2.6 1.9.5 3.4-.7 5-.4 1.2.2 2.3 1.2 3.4 1.5l5 1.1c1.8.5 3.7 0 5.6.4 2.3.4 4.2 1.8 6.4 2.2 2.5.5 5.2.1 7.7.8 2.3.5 3.6 1.2 6 1.2 3.5 0 7.5.5 11 0 1.8-.1 2.8-1 5-.2 1.3.7 2.2 2.6 4 1.7-2-.8-.2-4 2-1.6.6-1.3.9-2 2.4-2.5-.1 1.3-.3 2.6 1.4 3 0-1 .2-2 .3-2.8 3.7 2.8 4.6 3.7 8 .3 0 1.1-.5 2.4.6 3.2l2.2-3.6c1.2 3.9 7 2.5 9.9 1.8 1-.2 4.1-.6 4.8-1.6.5-.6.5-1 .6-1.4.2-.4-1.7-1.2 0-1.7 1.1-.4 2 2.2 3.4 2.1 1.3 0 1.8-2.2 2.7-2.6 0 0 .7.8 1.1.7.7-.4 1-1.2 1.8-1.4 1.5-.7 3.6-.5 5.3-1.2 2.3-1 4.5-1.4 6.8-2.2 2.9-1 4.2-2.8 6.5-4.4.6-.3 1.2-.1 1.7-.4.7-.3 1.5-1.1 2.4-1.5 2.7-1.2 5-2 7.6-3.7 2.3-1.5 5.3-2.6 7.3-4.4 1.7-1.4 2.7-3.6 4.4-5.1 2.4-2.2 8.8-4.9 7.7-9.1 4.2.6 5.2-2 6.7-5 1.4-2.8 4.3-3.6 6.3-6.1.8-1.1 2.1-2.7 2.6-4 .3-.7-.4-1.5-.2-2 .8-2.3 4.1-3.3 5.6-5.4 2-2.7 2.6-6.1 4.2-9 .3-.5 1.1-.8 1.4-1.4.2-.3-.2-1.3 0-1.6.6-.9 1.5-1.2 2-2 1.4-2 1.7-4.7 2.9-7l1.5-2.3c.4-1.1.3-1.8.5-3l1-2.8c.4-1 .8-1 1.5-2.1a21 21 0 003-9.8c0-1.3-.4-2.7 0-4 .5-1 1.8-1.7 2.3-2.9 1.2-3 1-7.3 1.4-10.5.3-3.5 1.5-7 1.8-10.4.1-1.7-.7-3.2-.6-4.8 0-1.8 1-2.2 1.4-3.7.4-1.7-.2-3.7.1-5.6.4-1.7.9-3.3 1-5 .4-4.7-.1-9.5-.3-14.1-.1-1.8-.3-3.7.1-5.4.4-1.4 2-3 2-4.5-.2-4.8-4-.7-6.2-1-2.5-.4-3-6-3.6-8.2l-5-15.7c7.8-2 15.9-1.5 23.8-2 7.8-.6 15.4-2.2 23-4.1 6.3-1.6 13.3-2.6 19-6 4.8-2.9 8.7-9.2 6-14.9zM169.7 220c3.1-1.6 2.3-3.8 4.6-6a231.6 231.6 0 0142.7-30c15.8-8.8 33.5-12.5 49.7-20.3 2.1-1 5-2.7 4.2-5.6-1-3.4-4.2-1.8-6.6-1-7.7 2.7-15.9 3.7-23.7 6-16.7 5-32.4 13.7-46.6 24-8.2 5.8-16.1 12.4-23.1 19.7-2.6 2.7-6 5.8-6.8 9.7-.8 4.9 2 5.4 5.6 3.5z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="M218 522.9c0-4.3-4.7-2.7-7.1-2.2-9.7 2.4-18.4 4.2-27 9.5-15.9 10-28 25.3-35.8 42-1 2.3-5.2 9.4-1.8 11.5 2.2 1.4 3.5-2.6 4.4-4.2 4.2-7.6 9.8-14.4 15.5-21a107.3 107.3 0 0145.7-31c2.2-1 6.2-1.5 6.1-4.6zM754 418.3c-3.4-6.7-8.8-15-16.3-17.8-4.2-1.6-6.6 1-5.4 5.2 1 3.4 4.3 5 6.7 7.3a48.7 48.7 0 0112.5 22.4 95 95 0 012.8 26.4c0 4.6-1.2 8.6-1.9 13.1-.3 1.8-.7 5.7 1.3 6.8 4.5 2.4 6.6-10.3 7-12.8 1.8-9 1.6-17.4.2-26.5a82.6 82.6 0 00-7-24zM741 94c2-2.5.6-6 1.1-8.8.6-3 2.3-5.9 3.8-8.5 3-5.6 6.5-11 10.2-16.2 3.9-5.4 8.5-10 12.6-15.2 1.4-1.7 3.8-4.2 3.2-6.3-1-3.4-3-1.7-4.7-.3a126.3 126.3 0 00-23.8 27.5c-3 4.8-6 10-7 15.7-.6 3-.6 6 .3 8.9.5 1.8 2.2 6.2 4.4 3.2zM176 510c4.6-.5 9.2-.6 13.8-.9 3.4-.1 7.3 0 10.4-1.6 3.1-1.6 1.8-4.1-.9-4.5-1.5-.2-4 .8-5.6.9h-5.3c-5 0-10.6 0-15.5 1.7-1.6.6-4 1.4-4.7 3.3-1.4 3.9 5.7 1.2 7.8 1zM216.2 150c6.7-.8 13.1-2.8 19.7-4 6.3-1.3 7.3-6.2 0-6-2.6 0-26.5 4.6-19.7 10zM767.6 397.2c-4.5-1.2-2.1 3.8-.8 5.4 2.6 2.8 4 5 4.8 8.7.4 2.2 0 7.2 1.9 8.9 1.8 1.7 2 .6 2.3-1.5.9-5.8-1-19.7-8.2-21.5zM718.4 82.5c1.3-1.4 0-7.2 0-9 .3-2 .7-3.8 1.4-5.7.3-1 1.8-4.3 1-5.4-1.2-1.4-3 1-3.6 2-2 3.1-2.4 8.3-2.1 11.8.1 1.3.9 8.8 3.3 6.3zM454.4 576.1c.3-3.3 3.4-5.6 3.5-9.1 0-4-2.7-5.7-6-3.1-2 1.5-3.6 5.3-6.3 5.8-5.4 1-7.6-8.7-12.9-7.6-4.6 1-2.2 9-.8 11.6 1.5 2.9 4.2 4.8 3.3 8.3-1 4.2-4.6 6.6-3.2 11.3 2.6 8.9 8.1.6 11.5-2.2 2.4-2 3.9-1.6 6.2.4 3.2 2.6 5.6 4.4 9.5 6.2 3.4 1.6 6.7 2.7 6.8-2.6 0-4.2-3-8.3-5.8-11.1-2.3-2.4-6-4.2-5.8-7.9zM394.7 563c-4-4.3-9 6.6-12.3 7.8-5.2 2-6.4-8.5-11.3-8.2-3.7.3-3.4 5.6-2.6 8.1.9 2.6 3.5 4.8 4 7.5.6 4.1-7.2 12.4-1.7 16.4 4.6 3.4 6.4-8.1 12.2-3.4 2.9 2.3 10.9 10.9 14.9 6.6 4.7-5-6.5-13.7-8.5-17.5-2.8-5.2 11.1-11 5.3-17.3zM491.4 415.1c-1.2-.5-3 .3-4.3.3-1.3 0-2.7-.7-4-.9-2.8-.5-7.9.2-9.9-2.3-2-2.6-.5-7.8-1.4-11-.4-1.7-1-3.8-3.3-3-2.7.8-2.6 5.8-3 8-.4 3.1-.8 5.5-4 6.7-2.4.8-4.9.4-6.8 2.3-1.4 1.5-2.3 4-1.2 6 1.6 2.7 5.2 1.3 7.7 2.2 3.8 1.3 2.9 7.5 3.6 11 .5 2.3 1.6 8.7 4.9 8.6 4.5-.1 2.7-9.1 2.5-11.7-.3-2.7-.9-5 2.1-5.8 2.5-.7 6 .6 8.6.6 3.2 0 7-.8 9-3.7 1.2-1.7 1.9-6.2-.5-7.3zM655.3 525.5c7.1.6 2.8 9.3 7.5 12.8 4.5 3.3 5.1-5.9 5.1-8.5 0-6.3 7.7-4 12.4-5 4-.9 8.4-5 3.6-8.6-3.4-2.5-9.2-1.4-13.2-2-5.4-1-3.8-4.6-3.9-8.7 0-1.6-.6-7-2.5-7.5-3.7-.7-3.9 9.4-4.1 11.3-1 8.2-6.7 3.2-11.1 7.3-5.9 5.4 2 8.5 6.2 8.9zM318 373c-11.2 9-23.8 7.7-33.9-2-4.3-4.2-6.9-8.3-6.5-14.4.3-5.4 2-11.5 6.3-15.1 3.7-3.1 10.6-4.2 15.3-4.7 6.5-.6 12.3 3 16.8 7.4 4 3.9 8.5 8.8 9.1 14.5.7 6-2.8 10.6-7.2 14.3zm1.6-36.2c-10-9.6-27.6-8.6-37.8.1-11.6 9.8-13.5 28.2-2.5 39 11.7 11.3 27.1 10 39.5.7 6.6-5 10.2-11.5 11.1-19.8.9-7.8-4.9-14.8-10.3-20zM511.9 172c-1.2 3.6-.4 7.5-.2 11.2-3.1-2-5.1-5.5-8.5-7.1-1.6 4.4 6.5 17.3 11.6 13 4.6-3.8 1.2-14.5-3-17.1zM528.4 194.1c-2.5 1-4.8.7-7.3 1.2-1.7.3-1.9-.6-2 1.2-.5 4 6 5.6 8.8 5.5 3.5 0 7.4-2.4 7-6.3-.3-4-3.8-2.6-6.5-1.6zM530.4 177.3c-1-1-3.7-4.9-5.6-4.2-1.5.5-.5 2.3 0 3.1 1.6 3.3 4.8 6.2 7.3 8.8-1.9.7-5.5 1.1-4.5 4 .8 2.7 4.8 2.3 6.7 1.1 6.6-3.8-.6-9.8-3.9-12.8zM537 171c.5 1.9.7 3.6-.2 5.3l-5.5-9.7c-4.4 1.8 3.3 15.8 7.8 14.3 3-1.1 1.6-7.7 1.1-9.8-.3-1.1-.9-4.7-2.4-5-3-.7-1 3.6-.7 5z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="M312.2 368.3c-2.6-1.9-6.7 2.5-9.4 2.5-5.4 0-2.5-6.3-5.9-8.4-1.7-1-9.1 0-8-4.4.8-2.7 3.5-.7 5-2.4 1.9-2-.8-3.7-2.5-4.5.8-1 5-1.4 6-.7 1.9 1.2 1.8 4.7 3.5 6.5 2.2-2.8 1-6.3 3.3-8.8.9-1 3.5-1.7 2.5-3.5-.6-1-3.2-.6-4-1.4-.9-.7-.8-3-2-3.2-2.1-.3-2 2.9-2.7 3.8-1.9 2.7-10 1.7-6.6 7.3-2.3-1.1-8.4-2-7.2 1.9.3 1 1.4 1.6 1.7 2.7.3 1-.3 2.5-.3 3.4-.1 2-.3 4.1 1.1 5.7 2 2 4.5.5 6.5 1.4 2.8 1.3 1.8 3.8 3.3 6 2 3 5 2.1 7.7 1.2 3.2-1 3.8-1.1 6.2 1.6 1-1.4 4-5 1.8-6.7z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.primary}
        fillRule="evenodd"
        d="M316.6 356.8c-2.7-.5-1.6-8.4-4.8-5-1.2 1.3 0 3.8-1.4 5.2-.9 1-2 .4-2.9 1-.8.5-1 1.6-1.5 2.4 1.7.7 3 .8 4.8.5 0 1.4-.9 5.4 1.4 5 2.2-.2 1.6-4.2 2.7-5.5 1.1-1.3 5.6-.7 6-2.4.6-2.3-3.2-1-4.3-1.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Workshop;
