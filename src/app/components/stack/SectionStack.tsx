import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
interface MyStackProps {
  children: ReactNode;
}
const SectionStack: React.FC<MyStackProps> = ({ children }) => {
  return (
    <Stack id="about-section" className='section' direction={{ xs: 'column', md: 'row' }} sx={{ pb: { xs: 2, sm: 3,}, px: { xs: 2, sm: 3, md: 15 }, }}>
      {children}
    </Stack>
  );
};
export default SectionStack;