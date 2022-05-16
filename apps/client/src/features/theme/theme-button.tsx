import React, { FunctionComponent } from 'react';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

import { ThemeState } from './state';

export type iThemeButton = {
  state: ThemeState;
  onClick: () => void;
};

export const ThemeIcon: FunctionComponent<{ state: ThemeState }> = ({
  state,
}) => {
  if (state === 'light') {
    return <Brightness7Icon sx={{ color: 'common.white' }} />;
  }
  if (state === 'dark') {
    return <Brightness4Icon sx={{ color: 'common.white' }} />;
  }
  return <BrightnessAutoIcon sx={{ color: 'common.white' }} />;
};

export const ThemeButton: FunctionComponent<iThemeButton> = ({
  onClick,
  state,
}) => {
  return (
    <IconButton onClick={onClick}>
      <ThemeIcon state={state} />
    </IconButton>
  );
};
