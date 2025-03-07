"use client";
import React from 'react';
import { Box, Stack, Typography, Button, Avatar, Card, CardContent, Grid, } from '@mui/material';

import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';
import VideoBackgroundSection from './components/vid/VideoBackgroundSection';
import VideoSection from './components/vid/VideoSection';
import TypographyHeader from './components/typography/TypographyHeader';
import Image from 'next/legacy/image'

const team = [
  { name: "Crisanne C. Camara", role: "Chief Executive Officer", image: "/camara.jpg" },
  { name: "Magnolia V. Dinglasan", role: "Chief Operating Officer", image: "/dinglasan.jpg", parent: "Crisanne C. Camara" },
  { name: "Jasiel Marjoen M. Garcia", role: "Chief Marketing Officer", image: "/garcia.jpg", parent: "Crisanne C. Camara" },
  { name: "Carls Angel P. Oyales", role: "Chief Financial Officer", image: "/oyales.jpg", parent: "Crisanne C. Camara" },
  { name: "Jireh Nicole C. Razon", role: "Operations Manager", image: "/razon.jpg", parent: "Magnolia V. Dinglasan" },
  { name: "Janna Desiree G. Taneo", role: "Product Development Manager", image: "/taneo.jpg", parent: "Magnolia V. Dinglasan" },
  { name: "Nichol S. Podillana", role: "Sales and Marketing Manager", image: "/podillana.jpg", parent: "Jasiel Marjoen M. Garcia" },
  { name: "Leila F. Francisco", role: "Finance Manager", image: "/francisco.jpg", parent: "Carls Angel P. Oyales" },
  { name: "Leona Marie M. Irinco", role: "Customer Service Specialist", image: "/lei.jpg", parent: "Jireh Nicole C. Razon" },
  { name: "Ronna Liza T. Basister", role: "Finance Specialist", image: "/basister.jpg", parent: "Leila F. Francisco" }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 5, width: '100%', maxWidth: '1900px' }}>
        <Stack component="section" direction={{ xs: 'column', md: 'row' }}>
          <VideoBackgroundSection />
        </Stack>

        {/* ABOUT */}
        <Stack id="about-section" className='section' direction={{ xs: 'column', md: 'row' }}>
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
              Designed to withstand the Philippines heat, humidity, and ever-changing weather, keeping skin fresh and protected all day.
            </Typography>

            <TypographyHeader>Filipino Inclusive Shades </TypographyHeader>
            <Typography gutterBottom variant="body1" sx={{ fontSize: '0.880rem' }}>
              Formulated to complement and celebrate all Filipino skin tones, embracing diversity in beauty.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '35%', }, }}>
            <VideoSection
              videoSrc='/video/video-2.mp4'
            >
            </VideoSection>
          </Box>
        </Stack>

        {/* TEAM */}
        <Stack id="team-section" className='section' direction="column" alignItems="center">
          <Box sx={{ textAlign: 'center', mb: '3%' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', mt: { xs: '5%', md: '10%' },}}>
              Meet the Team
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, sm: 3, md: 15 },
              pb: { xs: '5%', md: '5%' },
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'justify',
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {team.map((member, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
                  <Card sx={{ textAlign: "center", p: 2, maxWidth: "100%", flexGrow: 1 }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
                    />
                    <CardContent>
                      <TypographyHeader>
                        {member.name}
                      </TypographyHeader>
                      <Typography variant="body2" color="textSecondary">
                        {member.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>

        {/* CORE VALUES */}
        <Stack id="core-values-section" direction={{ xs: 'column', md: 'row' }}>
          <Box sx={{ flex: 1, width: { xs: '100%', sm: '80%', lg: '30%', xl: '30%', } }}>
            <Image
              src="/img-3.png"
              alt="Home image"
              width={100}
              height={100}
              layout="responsive"
              priority
            />
          </Box>

          <Box sx={{ flex: 2, pr: { xs: 2, sm: 4, md: 14 }, pl: { xs: 2, sm: 3, md: 5 }, pt: { xs: 3 }, pb: { xs: 3, md: 3, }, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} >
            <TypographyHeader>
              Mission
            </TypographyHeader>

            <Typography
              variant="body2"
              sx={{ textAlign: 'justify', userSelect: 'none', fontSize: '0.9rem', mb: '3%', }}
            >
              Beautéshine aims to promote empowerment and confidence by creating highly-sustainable, eco-conscious, and inclusive skin care and cosmetic products. Our responsibility is to care with our mother nature as well as to nurture your natural beauty from within.
            </Typography>

            <TypographyHeader>
              Vision
            </TypographyHeader>
            <Typography
              variant="body2"
              sx={{ textAlign: 'justify', userSelect: 'none', fontSize: '0.9rem', mb: '3%', }}
            >
              Redefine beauty through empowering Filipinas to embrace and their natural glow, celebrate their heritage and radiate confidence.
            </Typography>

            <TypographyHeader>
              Objectives
            </TypographyHeader>

            <Typography variant="body2"
              sx={{ textAlign: 'justify', userSelect: 'none', fontSize: '0.9rem', mt: '1%' }}>
              • Celebrate Diversity.
              Beauty shines in all colors, and so do you.
              <br />

              • Confidence in Every Drop.
              Skincare that empowers self-love and authenticity.
              <br />

              • Nature & Innovation.
              Thoughtfully crafted for healthy, radiant skin to bring out your best glow.
              <br />

              • More Than Beauty.
              A movement of empowerment and inclusivity.
            </Typography>

          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}