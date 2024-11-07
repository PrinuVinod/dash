// src/kar.tsx

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface KarProps {
  onBack: () => void;
}

const Kar: React.FC<KarProps> = ({ onBack }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#040D30',
        border: '2px solid #AD46F7',
        width: '100%',
        maxWidth: '95.5vw',
        marginTop: '20px',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: 4,
      }}
    >
      {/* Back Button */}
      <Button
        variant="contained"
        onClick={onBack}
        sx={{
          alignSelf: 'flex-start',
          backgroundColor: '#4C66D1',
          color: '#FFFFFF',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#4C66D1',
          },
        }}
      >
        Back
      </Button>

      {/* Content of kar.tsx */}
      <Typography variant="h4" sx={{ color: '#FFFFFF', marginBottom: '20px' }}>
        Knowledge Assessment Results
      </Typography>

      {/* Add your custom content here */}
      <Box
        sx={{
          width: '100%',
          padding: '20px',
          backgroundColor: '#171E40',
          borderRadius: 5,
        }}
      >
        {/* Example content */}
        <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
          This is where you can display the detailed knowledge assessment results.
        </Typography>
        {/* You can include charts, tables, or any other components here */}
      </Box>
    </Box>
  );
};

export default Kar;
