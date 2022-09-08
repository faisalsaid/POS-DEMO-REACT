import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SkelButton from '../components/SkelButton';
import SkelCardMenuCategory from '../components/SkelCardMenuCategory';
import SkelCatalogMagic from '../components/SkelCatalogMagic';

const SkelMenuPage = () => {
  return (
    <div>
      <Box>
        <SkelCardMenuCategory />
      </Box>
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <SkelButton />
      </Stack>
      <Box>
        <SkelCatalogMagic />
      </Box>
    </div>
  );
};

export default SkelMenuPage;
