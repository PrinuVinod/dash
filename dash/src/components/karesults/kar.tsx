// src/kar.tsx

import React from 'react';
import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlashOnIcon from '@mui/icons-material/FlashOn';

interface KarProps {
  onBack: () => void;
}

const Kar: React.FC<KarProps> = ({ onBack }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '95.5vw',
        marginTop: '20px',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: 4,
        position: 'relative',
      }}
    >

      {/* Top-Right Boxes */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 12px',
            borderRadius: '20px',
            backgroundColor: '#4C66D1',
          }}
        >
          <QuestionAnswerIcon sx={{ color: '#FFFFFF' }} />
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            All Questions
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 12px',
            borderRadius: '20px',
            backgroundColor: '#FEAA28',
          }}
        >
          <SecurityIcon sx={{ color: '#FFFFFF' }} />
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Vulnerability
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 12px',
            borderRadius: '20px',
            backgroundColor: '#FE4A4B',
          }}
        >
          <ShieldIcon sx={{ color: '#FFFFFF' }} />
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            SOC
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '8px 12px',
            borderRadius: '20px',
            backgroundColor: '#5EFF81',
          }}
        >
          <BuildIcon sx={{ color: '#FFFFFF' }} />
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Hardening
          </Typography>
        </Box>
      </Box>

      {/* Content Boxes */}
      <Box
        sx={{
          width: '100%',
          padding: '20px',
          borderRadius: 5,
          marginTop: '70px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* First Box with "Human Layer" and Right-Side Icons with Labels */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#10183F',
            border: '2px solid #36256C',
            borderRadius: 2,
            padding: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: '4px',
              backgroundColor: '#AD46F7',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          />
          <Typography variant="body1" sx={{ color: '#FFFFFF', paddingLeft: '10px' }}>
            Human Layer
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    color: '#FF0000',
                    position: 'absolute',
                    left: -6,
                    zIndex: 1,
                  }}
                  size={40}
                />
                <CheckCircleIcon sx={{ color: '#FF0000', fontSize: 30, zIndex: 2 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Second Box with "Perimeter Security" and Right-Side Icons with Labels */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#10183F',
            border: '2px solid #36256C',
            borderRadius: 2,
            padding: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: '4px',
              backgroundColor: '#AD46F7',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          />
          <Typography variant="body1" sx={{ color: '#FFFFFF', paddingLeft: '10px' }}>
            Perimeter Security
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    color: '#FF0000',
                    position: 'absolute',
                    left: -6,
                    zIndex: 1,
                  }}
                  size={40}
                />
                <CheckCircleIcon sx={{ color: '#FF0000', fontSize: 30, zIndex: 2 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Third Box with "Network Security" and Right-Side Icons with Labels */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#10183F',
            border: '2px solid #36256C',
            borderRadius: 2,
            padding: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: '4px',
              backgroundColor: '#AD46F7',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          />
          <Typography variant="body1" sx={{ color: '#FFFFFF', paddingLeft: '10px' }}>
            Network Security
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    color: '#FFD700', // Yellow color for progress
                    position: 'absolute',
                    left: -6,
                    zIndex: 1,
                  }}
                  size={40}
                />
                <CheckCircleIcon sx={{ color: '#FFD700', fontSize: 30, zIndex: 2 }} /> {/* Yellow check icon */}
              </Box>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Fourth Box with "Endpoint Security" and Right-Side Icons with Labels */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#10183F',
            border: '2px solid #36256C',
            borderRadius: 2,
            padding: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: '4px',
              backgroundColor: '#AD46F7',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          />
          <Typography variant="body1" sx={{ color: '#FFFFFF', paddingLeft: '10px' }}>
            Endpoint Security
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={70}
                  sx={{
                    color: '#FFD700', // Yellow color for progress
                    position: 'absolute',
                    left: -5,
                    zIndex: 1,
                  }}
                  size={40}
                />
                <CheckCircleIcon sx={{ color: '#FFD700', fontSize: 30, zIndex: 2 }} /> {/* Yellow check icon */}
              </Box>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Remaining Content Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#10183F',
            border: '2px solid #36256C',
            borderRadius: 2,
            padding: '10px',
            position: 'relative',
            overflow: 'hidden',
            height: '60px',
          }}
        >
          <Box
            sx={{
              width: '4px',
              backgroundColor: '#AD46F7',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          />
          <Typography variant="body1" sx={{ color: '#FFFFFF', paddingLeft: '10px' }}>
            Application Security
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: '50px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    color: 'green',
                    position: 'absolute',
                    left: -6,
                    zIndex: 1,
                  }}
                  size={40}
                />
                <CheckCircleIcon sx={{ color: 'green', fontSize: 30, zIndex: 2 }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
              <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
              <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#FFFFFF' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Kar;
