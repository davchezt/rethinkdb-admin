import React from 'react';

import {
  Avatar,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

import { ComparableTime } from '../time/relative';

export type Server = {
  id: string;
  name: string;
  tags: string[];
  timeStarted: string;
  hostname: string;
  cacheSize: string;
  primaryCount: number;
  secondaryCount: number;
};

export interface IServerItem {
  serverItem: Server;
}

export const ServerItem = ({ serverItem }: IServerItem) => {
  const { primaryCount, secondaryCount } = serverItem;
  const primaryRow = (
    <>
      {serverItem.name}
      <div style={{ display: 'inline', marginLeft: '8px' }}>
        {serverItem.tags.map((tag) => (
          <Chip key={tag} color="primary" label={tag} size="small" />
        ))}
      </div>
    </>
  );
  const secondaryRow = (
    <Typography
      component="span"
      variant="body2"
      display="inline"
      color="textPrimary"
    >
      {primaryCount} primary, {secondaryCount} secondaries
    </Typography>
  );
  const rightRow = (
    <Typography
      component="span"
      variant="body2"
      display="inline"
      color="textPrimary"
    >
      {serverItem.hostname} started{' '}
      <ComparableTime date={new Date(serverItem.timeStarted)} />
    </Typography>
  );
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'primary.dark' }} variant="rounded">
          <ComputerIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryRow} secondary={secondaryRow} />
      <ListItemSecondaryAction>{rightRow}</ListItemSecondaryAction>
    </ListItem>
  );
};
