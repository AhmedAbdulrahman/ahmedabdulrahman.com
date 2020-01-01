import React from 'react';
import { useThemeUI } from 'theme-ui';

import { Icon } from '@types';

const Calendar: Icon = ({ fill }) => {
  const { theme } = useThemeUI();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 512 512"
      fill={theme.colors.primary}
    >
      <circle cx="386" cy="210" r="20" />
      <path d="M432 40h-26V20a20 20 0 10-40 0v20h-91V20a20 20 0 10-40 0v20h-90V20a20 20 0 10-40 0v20H80a80 80 0 00-80 80v312a80 80 0 0080 80h153a20 20 0 100-40H80c-22 0-40-18-40-40V120c0-22 18-40 40-40h25v20a20 20 0 1040 0V80h90v20a20 20 0 1040 0V80h91v20a20 20 0 1040 0V80h26c22 0 40 18 40 40v114a20 20 0 1040 0V120a80 80 0 00-80-80z" />
      <path d="M391 270c-66.7 0-121 54.3-121 121s54.3 121 121 121 121-54.3 121-121-54.3-121-121-121zm0 202a81 81 0 010-162 81 81 0 010 162z" />
      <path d="M420 371h-9v-21a20 20 0 10-40 0v41c0 11 9 20 20 20h29a20 20 0 100-40z" />
      <circle cx="299" cy="210" r="20" />
      <circle cx="212" cy="297" r="20" />
      <circle cx="125" cy="210" r="20" />
      <circle cx="125" cy="297" r="20" />
      <circle cx="125" cy="384" r="20" />
      <circle cx="212" cy="384" r="20" />
      <circle cx="212" cy="210" r="20" />
    </svg>
  );
};

export default Calendar;
