import { Box, Button, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
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
                        href="https://forms.gle/xCZjXF6eb3fm2S4N9"
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
                        <InfoIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> pre-test 
                    </Button>
                    <Button
                        component="a"
                        href="https://forms.gle/ivLTVaBwXsXoTZvk9"
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
                        <QuizIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> post-test
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default VideoBackgroundSection;
