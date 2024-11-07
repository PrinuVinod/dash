// src/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Updated to upward arrow icon

const Dashboard: React.FC = () => {
  const [flashingColor, setFlashingColor] = useState('#FE4A4B');

  // Set up color flashing effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlashingColor((prevColor) => (prevColor === '#FE4A4B' ? '#502D86' : '#FE4A4B'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '90vh',
        backgroundColor: '#020A24',
        paddingTop: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#171E40',
          border: '2px solid #AD46F7',
          width: '100%',
          maxWidth: '98vw',
          height: '100px',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          borderRadius: 5,
          position: 'relative',
          top: '10px', // 10px gap from the top
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '10px 20px',
            backgroundColor: flashingColor, // Apply flashing color here
            borderRadius: 1,
            marginLeft: '20px',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Knowledge Assessment Results
          </Typography>
          <ArrowUpwardIcon sx={{ fontSize: 24 }} /> {/* Updated to upward arrow */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
