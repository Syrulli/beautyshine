import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const VideoBackgroundSection = () => {
    return (
        <Box className="relative w-full h-screen flex items-center">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/video/video-1.mp4" type="video/mp4" />
            </video>

            <Box className="relative z-10 text-white" sx={{ flex: 1, p: { xs: 3.5, sm: 3, md: 15 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Beautéshine</Typography>
                <Typography variant="body1" sx={{ fontSize: '0.900rem', display: 'flex', alignItems: 'center' }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: 'inherit' }} /> Pasig, Philippines
                </Typography>
                <Typography className="text-sm mt-1">
                    Sometimes you just have to put on lip gloss and pretend to be psyched
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} sx={{ mt: 1 }} spacing={1}>
                    <Button
                        component="a"
                        href="#"
                        download="#"
                        size="small"
                        variant="contained"
                        sx={{
                            backgroundColor: '#213D47',
                            color: 'white',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Workshop Details
                    </Button>
                    <Button
                        component="a"
                        href="mailto:2021-204737@rtu.edu.ph"
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            textTransform: 'capitalize',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <EmailOutlinedIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> Send email
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default VideoBackgroundSection;
