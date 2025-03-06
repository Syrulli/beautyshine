"use client";
import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';
import VideoBackgroundSection from './components/vid/VideoBackgroundSection';
import VideoSection from './components/vid/VideoSection';
import TypographyHeader from './components/typography/TypographyHeader';
import Image from 'next/legacy/image'

export default function Home() {
  // const expertiseData = [
  //   {
  //     title: "Nature Powered Beauty",
  //     description:
  //       "Using natural ingredients that nourish and enhance skin without harsh chemicals.",
  //     image: "/img-2.png",
  //   },
  //   {
  //     title: "Climate Resilient Formulas",
  //     description:
  //       "Designed to withstand the Philippines' heat, humidity, and ever-changing weather, keeping skin fresh and protected all day.",
  //     image: "/img-3.png",
  //   },
  //   {
  //     title: "Filipino-Inclusive Shades",
  //     description:
  //       "Formulated to complement and celebrate all Filipino skin tones, embracing diversity in beauty.",
  //     image: "/img-4.png",
  //   },
  // ];
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 5, width: '100%', maxWidth: '1900px' }}>
        <Stack component="section" direction={{ xs: 'column', md: 'row' }}>
          <VideoBackgroundSection />
        </Stack>

        <Stack className='section' direction={{ xs: 'column', md: 'row' }}>
          <Box sx={{ width: { xs: '100%', sm: '80%', lg: '30%', xl: '30%', }, height: 'auto', mx: 'auto', }}>
            <Image
              src="/img-1.png"
              alt="Home image"
              width={420}
              height={550}
              layout="responsive"
              priority
            />
          </Box>
          <Box sx={{ flex: 1, pr: { xs: 2, sm: 4, md: 14 }, pl: { xs: 2, sm: 3, md: 5 }, pt: { xs: 3 }, pb: { xs: 3, md: 3, }, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} >
            <TypographyHeader>
              Company profile
            </TypographyHeader>

            <Typography
              variant="body2"
              sx={{ textAlign: 'justify', userSelect: 'none', fontSize: '0.9rem' }}
            >
              Beautéshine is a testament to resilience, self-love, and empowerment, inspired by the personal journey of its founder, Crisanne Camara. Growing up in the Philippines, Crisanne faced the harsh realities of colorism from a young age. As a child with tan skin, she endured bullying and hurtful comments that made her feel different and unworthy. The pressure to conform to society’s preference for lighter skin deeply affected her self-esteem, especially during her formative years in elementary school. However, instead of succumbing to these negative experiences, Crisanne found strength in embracing her natural beauty. She realized that true beauty is not defined by societal standards but by self-acceptance and confidence. This realization planted the seed for Beautéshine—a brand dedicated to empowering Filipino women to celebrate their unique beauty, regardless of skin tone.
              With a vision to redefine beauty, Beautéshine was created not just as a skincare brand but as a movement that uplifts and inspires. Crisanne sought to provide products that enhance natural beauty while fostering a community where women can share their journeys of self-acceptance. By combining nature’s finest ingredients with modern skincare innovations, Beautéshine offers more than just skin nourishment—it offers empowerment. Today, the brand continues to champion Crisanne’s philosophy that every woman deserves to glow unapologetically. Through its growing community, Beautéshine encourages women to embrace their roots, uplift one another, and redefine beauty on their own terms, proving that confidence and self-love are the true essence of radiance.
            </Typography>
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box sx={{ flex: 1, pr: { xs: 2, sm: 3, md: 15 }, pt: { xs: 5, sm: 5, md: 5 }, pb: { md: 3, }, pl: { xs: 2, sm: 3, md: 15 }, display: 'flex', flexDirection: 'column', textAlign: 'justify' }} >
            <TypographyHeader>Nature Powered Beauty</TypographyHeader>
            <Typography gutterBottom variant="body1" sx={{ fontSize: '0.880rem' }}>
              Using natural ingredients that nourish and enhance skin without harsh chemicals.
            </Typography>

            <TypographyHeader>Climate Resilient Formulas</TypographyHeader>
            <Typography gutterBottom variant="body1" sx={{ fontSize: '0.880rem' }}>
              Designed to withstand the Philippines' heat, humidity, and ever-changing weather, keeping skin fresh and protected all day.
            </Typography>

            <TypographyHeader>Filipino Inclusive Shades </TypographyHeader>
            <Typography gutterBottom variant="body1" sx={{ fontSize: '0.880rem' }}>
              Formulated to complement and celebrate all Filipino skin tones, embracing diversity in beauty.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '35%', },}}>
            <VideoSection
              videoSrc='/video/video-2.mp4'
            >
            </VideoSection>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}