import React from 'react';
import { formatRFC7231 } from 'date-fns';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Link,
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export type Log = {
  id: string[];
  level: string;
  message: string;
  server: string;
  server_id: string;
  timestamp: string;
  uptime: number;
};

export interface ILogItem {
  logItem: Log;
}

const ServerLink = ({ logItem }: { logItem: Log }) => (
  <Link component={NavLink} to={`/servers/${logItem.server_id}`}>
    {logItem.server}
  </Link>
);

const LogItem = ({ logItem }: ILogItem) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: 'primary.dark' }} variant="rounded">
        <TextSnippetIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={logItem.message}
      secondary={
        <Typography
          component="span"
          variant="body2"
          display="inline"
          color="textPrimary"
        >
          Posted by <ServerLink logItem={logItem} /> |{' '}
          {formatRFC7231(new Date(logItem.timestamp))}
        </Typography>
      }
    />
  </ListItem>
);

export { LogItem };
