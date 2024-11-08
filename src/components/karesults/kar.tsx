// src/kar.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface KarProps {
  onBack: () => void;
}

const Kar: React.FC<KarProps> = ({ onBack }) => {
  const [expandedBox, setExpandedBox] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleBoxClick = (boxName: string) => {
    setIsAnimating(true); // Start the animation
    setExpandedBox(expandedBox === boxName ? null : boxName);

    // Clear animation state after a delay matching transition duration
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '96vw',
        margin: '20px auto',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '10px', sm: '20px' },
        gap: 4,
        position: 'relative',
      }}
    >
      {/* Top-Right Boxes */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '10px', sm: '20px' },
          right: { xs: '10px', sm: '20px' },
          display: 'flex',
          flexDirection: 'row', // Always row
          gap: { xs: 0.5, sm: 1 }, // Adjust gap for smaller screens
          width: 'auto', // Always auto to keep in one row
          backgroundColor: 'transparent',
          zIndex: 1,
        }}
      >
        {[
          { icon: <QuestionAnswerIcon sx={{ color: '#FFFFFF', fontSize: isMobile ? 20 : 24 }} />, label: 'All Questions' },
          { icon: <CheckCircleIcon sx={{ color: '#A865ED', fontSize: isMobile ? 20 : 24 }} />, label: 'Vulnerability' },
          { icon: <CancelIcon sx={{ color: '#FFA500', fontSize: isMobile ? 20 : 24 }} />, label: 'SOC' },
          { icon: <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: isMobile ? 20 : 24 }} />, label: 'Hardening' },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5, // Smaller gap on mobile
              padding: { xs: '6px 10px', sm: '8px 12px' }, // Reduced padding on mobile
              borderRadius: '20px',
              backgroundColor: '#101942',
              justifyContent: 'center',
              minWidth: 'auto',
            }}
          >
            {item.icon}
            <Typography
              variant={isMobile ? 'caption' : 'body2'}
              sx={{ color: '#FFFFFF', fontWeight: 'bold', whiteSpace: 'nowrap' }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Content Boxes */}
      <Box
        sx={{
          width: '100%',
          padding: { xs: '10px', sm: '20px' },
          borderRadius: 5,
          marginTop: { xs: '60px', sm: '70px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {[
          { name: 'Human Layer', value: 75 },
          { name: 'Perimeter Security', value: 80 },
          { name: 'Network Security', value: 50 },
          { name: 'Endpoint Security', value: 70 },
          { name: 'Application Security', value: 80 },
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
                height: { xs: '50px', sm: '60px' },
                cursor: 'pointer',
              }}
              onClick={() => handleBoxClick(box.name)}
            >
              <Box
                sx={{
                  width: '9px',
                  backgroundColor: '#AD46F7',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                }}
              />
              <Typography
                variant={isMobile ? 'subtitle2' : 'body1'}
                sx={{ color: '#FFFFFF', paddingLeft: '10px', flex: 1 }}
              >
                {box.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1, sm: 3 },
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: '#2B3563',
                    padding: { xs: '8px 10px', sm: '15px 15px' },
                    borderRadius: 1,
                  }}
                >
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <CircularProgress
                      variant="determinate"
                      value={box.value}
                      sx={{
                        color: box.value > 70 ? '#FF0000' : '#FFD700',
                        position: 'absolute',
                        left: isMobile ? -4 : -6,
                        zIndex: 1,
                      }}
                      size={isMobile ? 30 : 40}
                    />
                    <CheckCircleIcon
                      sx={{
                        color: box.value > 70 ? '#FF0000' : '#FFD700',
                        fontSize: isMobile ? 20 : 30,
                        zIndex: 2,
                      }}
                    />
                  </Box>
                  <Typography
                    variant={isMobile ? 'caption' : 'body2'}
                    sx={{ color: '#FFFFFF' }}
                  >
                    Vulnerability
                  </Typography>
                </Box>
                {expandedBox !== box.name && (
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#2B3563',
                        padding: { xs: '8px 10px', sm: '15px 15px' },
                        borderRadius: 1,
                      }}
                    >
                      <CancelIcon sx={{ color: '#FFA500', fontSize: isMobile ? 20 : 24 }} />
                      <Typography
                        variant={isMobile ? 'caption' : 'body2'}
                        sx={{ color: '#FFFFFF' }}
                      >
                        SOC
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#2B3563',
                        padding: { xs: '8px 10px', sm: '15px 15px' },
                        borderRadius: 1,
                      }}
                    >
                      <FlashOnIcon sx={{ color: '#B0B0B0', fontSize: isMobile ? 20 : 24 }} />
                      <Typography
                        variant={isMobile ? 'caption' : 'body2'}
                        sx={{ color: '#FFFFFF' }}
                      >
                        Hardening
                      </Typography>
                    </Box>
                  </>
                )}
              </Box>
              {/* Updated IconButton with Circular Faded Border */}
              <IconButton
                sx={{
                  color: '#FFFFFF',
                  marginLeft: { xs: '10px', sm: '20px' },
                  padding: { xs: '4px', sm: 'default' },
                  border: '1px solid rgba(255, 255, 255, 0.3)', // Faded border
                  borderRadius: '50%', // Circular shape
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: slightly faded background
                  transition: 'background-color 0.3s ease', // Smooth transition for hover
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Darker on hover
                  },
                }}
              >
                {expandedBox === box.name ? <ArrowDropDownIcon /> : <ArrowForwardIosIcon />}
              </IconButton>
            </Box>

            <Divider sx={{ backgroundColor: '#36256C', my: 1 }} />

            {/* Dropdown content with animation */}
            <Box
              sx={{
                maxHeight: expandedBox === box.name ? '300px' : '0px', // Increased maxHeight for better mobile viewing
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
                padding: expandedBox === box.name ? '10px' : '0px',
              }}
            >
              {expandedBox === box.name && (
                <Box sx={{ borderRadius: '0 0 10px 10px', color: '#FFFFFF' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      marginTop: '10px',
                      marginBottom: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#2B3563',
                        borderRadius: 1,
                        padding: '8px 12px',
                      }}
                    >
                      <StarIcon sx={{ color: '#FFD700', fontSize: isMobile ? 20 : 24 }} />
                      <Typography
                        variant={isMobile ? 'caption' : 'body2'}
                        sx={{ color: '#FFFFFF', fontWeight: 'bold' }}
                      >
                        Top 5
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#2B3563',
                        borderRadius: 1,
                        padding: '8px 12px',
                      }}
                    >
                      <StarBorderIcon
                        sx={{ color: '#FFD700', fontSize: isMobile ? 20 : 24 }}
                      />
                      <Typography
                        variant={isMobile ? 'caption' : 'body2'}
                        sx={{ color: '#FFFFFF', fontWeight: 'bold' }}
                      >
                        Enabler
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant={isMobile ? 'caption' : 'body2'}>
                    Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to
                    tread where others fear. Our elite operatives embark on deep infiltration into the
                    darkest corners of the web, preemptively neutralizing potential threats before
                    they strike. We lead the charge on the offensive, striking fear into the hearts
                    of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity
                    insurgents respond swiftly and decisively to emerging threats, ensuring
                    unparalleled protection for your digital assets.
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Kar;
