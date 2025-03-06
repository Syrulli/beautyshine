import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#213D47',
                color: 'white',
                py: 3,
                bottom: 0,
                width: '100%',
            }}
        >
            <Stack direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                px={{ xs: 2, sm: 8, md: 14 }}
                textAlign={{ xs: 'center' }}
            >
                <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
                        © 2025 Beautéshine | All rights reserved.
                    </Typography>
                    {/* <Typography variant="body1" sx={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
                        <AlternateEmailIcon sx={{ fontSize: 'inherit', mr: 0.5 }} /> lloydlanguido@gmail.com
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
                        <PhoneIphoneIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />                         09326073237
                    </Typography> */}
                </Stack>
                <Stack direction="row">
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};
export default Footer;