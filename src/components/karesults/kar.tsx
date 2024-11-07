// src/kar.tsx

import React, { useState } from 'react';
import { Box, Typography, IconButton, CircularProgress, Divider } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface KarProps {
  onBack: () => void;
}

const Kar: React.FC<KarProps> = ({ onBack }) => {
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  const handleBoxClick = (boxName: string) => {
    setExpandedBox(expandedBox === boxName ? null : boxName);
  };

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
            backgroundColor: '#101942',
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
            backgroundColor: '#101942',
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
            backgroundColor: '#101942',
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
            backgroundColor: '#101942',
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
        {/* Dynamic content box with dropdown feature */}
        {[ 
          { name: 'Human Layer', value: 75 },
          { name: 'Perimeter Security', value: 80 },
          { name: 'Network Security', value: 50 },
          { name: 'Endpoint Security', value: 70 },
          { name: 'Application Security', value: 80 }
        ].map((box, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#10183F',
              border: '2px solid #36256C',
              borderRadius: 2,
              padding: '10px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '60px',
              }}
              onClick={() => handleBoxClick(box.name)}
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
                {box.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {/* Show only Vulnerability label when expanded, otherwise all labels */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <CircularProgress
                      variant="determinate"
                      value={box.value}
                      sx={{
                        color: box.value > 70 ? '#FF0000' : '#FFD700',
                        position: 'absolute',
                        left: -6,
                        zIndex: 1,
                      }}
                      size={40}
                    />
                    <CheckCircleIcon sx={{ color: box.value > 70 ? '#FF0000' : '#FFD700', fontSize: 30, zIndex: 2 }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Vulnerability</Typography>
                </Box>
                {!expandedBox && (
                  <>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
                      <CancelIcon sx={{ color: '#FFA500', fontSize: 24 }} />
                      <Typography variant="body2" sx={{ color: '#FFFFFF' }}>SOC</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', padding: '15px 15px', borderRadius: 1 }}>
                      <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: 24 }} />
                      <Typography variant="body2" sx={{ color: '#FFFFFF' }}>Hardening</Typography>
                    </Box>
                  </>
                )}
              </Box>
              <IconButton sx={{ color: '#FFFFFF' }}>
                {expandedBox === box.name ? <ArrowDropDownIcon /> : <ArrowForwardIosIcon />}
              </IconButton>
            </Box>

            <Divider sx={{ backgroundColor: '#36256C', my: 1 }} />

            {/* Dropdown content */}
            {expandedBox === box.name && (
              <Box sx={{ padding: '10px', borderRadius: '0 0 10px 10px', color: '#FFFFFF' }}>
                <Box sx={{ display: 'flex', gap: 2, marginTop: '10px', marginBottom: '10px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', borderRadius: 1, padding: '8px 12px' }}>
                    <StarIcon sx={{ color: '#FFD700' }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Top 5</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#2B3563', borderRadius: 1, padding: '8px 12px' }}>
                    <StarBorderIcon sx={{ color: '#FFD700' }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Enabler</Typography>
                  </Box>
                </Box>
                <Typography variant="body2">
                  This is a detailed explanation about {box.name}. It includes insights and descriptions relevant to this section’s content.
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Kar;
