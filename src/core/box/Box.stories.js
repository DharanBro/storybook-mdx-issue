import React from 'react';
import { Box } from './Box';
import docs from './Box.docs.mdx';

export default {
  component: Box,
  title: 'Layout/Box',
  parameters: { docs: { page: docs } },
};

export const normal = () => (
  <Box>
    Normal Box Component in story
  </Box>
);
normal.story = {
  name: 'box',
};
