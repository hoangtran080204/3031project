import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/home-page.png';   

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '120px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Gator ClubFinder   </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Discover, Connect <br />
      And Thrive
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most interesting clubs on campus
    </Typography>
    <Stack>
      <a href="#clubs" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '12px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Clubs</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner