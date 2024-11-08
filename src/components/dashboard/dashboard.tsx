import React, { useEffect, useState } from 'react';
import CyberKarmaGPT from '../cyberkarma/cyberkarmagpt';
import Kar from '../karesults/kar';
import {
  Box,
  Typography,
  Button,
  GlobalStyles,
  Divider,
  CircularProgress,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from 'recharts';
import '@fontsource/urbanist';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Urbanist, sans-serif',
  },
});

const Dashboard: React.FC = () => {
  const [flashingColor, setFlashingColor] = useState('#FE4A4B');
  const [selectedButton, setSelectedButton] = useState<string | null>('Summary');
  const [showKarContent, setShowKarContent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlashingColor((prevColor) =>
        prevColor === '#FE4A4B' ? '#502D86' : '#FE4A4B'
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const toggleKarContent = () => {
    setShowKarContent((prevShow) => !prevShow);
  };

  const pieData = [
    { name: 'Windows', value: 40 },
    { name: 'Linux', value: 30 },
    { name: 'Other OS', value: 30 },
  ];

  const pieColors = ['#FE4A4B', '#5EFF81', '#FEAA28'];

  const barData = [
    { name: 'Firewall', value: 35 },
    { name: 'Windows', value: 50 },
    { name: 'O365', value: 15 },
  ];

  const barColors = ['#5EFF81', '#FE4A4B', '#FEAA28'];

  const donutPieData = [
    { name: 'Patch', value: 45 },
    { name: 'SOC', value: 35 },
    { name: 'VAPT', value: 20 },
  ];

  const donutPieColors = ['#FE4A4B', '#FEAA28', '#5EFF81'];

  const doubleBarData = [
    { name: 'Entry 1', Apps: 5, Software: 10 },
    { name: 'Entry 2', Apps: 4, Software: 2 },
    { name: 'Entry 3', Apps: 10, Software: 2 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '99vh',
          backgroundColor: '#020A24',
          paddingTop: '20px',
        }}
      >
        <GlobalStyles
          styles={{
            '.recharts-bar-rectangle:hover': {
              fill: 'inherit !important',
            },
          }}
        />

        <Box
          onClick={toggleKarContent}
          sx={{
            backgroundColor: '#171E40',
            border: '2px solid #AD46F7',
            width: '100%',
            maxWidth: '98vw',
            height: '350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            position: 'relative',
            top: '10px',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              width: '100%',
              padding: '0 20px',
              height: '100%',
              gap: { xs: 0, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: flashingColor,
                borderRadius: 1,
                padding: '10px 20px',
                height: '40%',
                marginTop: {xs: '10px'},
                width: { xs:'90%' ,sm: '23%'},
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  color: '#FFFFFF',
                  textAlign: { xs: 'left', sm: 'inherit' },
                }}
              >
                Knowledge Assessment Results
              </Typography>

              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor:
                    flashingColor === '#FE4A4B' ? '#8B0000' : '#4B0082',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: { xs: 1, sm: 0 },
                }}
              >
                {showKarContent ? (
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: 24, color: '#FFFFFF' }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    sx={{ fontSize: 24, color: '#FFFFFF' }}
                  />
                )}
              </Box>
            </Box>

            {showKarContent && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                      variant="determinate"
                      value={65}
                      size={50}
                      thickness={3}
                      sx={{ color: '#8B00FF' }}
                      aria-label="65% correct"
                    />
                    <CheckCircleIcon
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#8B00FF',
                        fontSize: 40,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body3"
                    sx={{ color: '#FFFFFF', fontSize: '0.875rem' }}
                  >
                    65% correct
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                      variant="determinate"
                      value={20}
                      size={50}
                      thickness={3}
                      sx={{ color: '#FE4A4B' }}
                      aria-label="20% incorrect"
                    />
                    <CancelIcon
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#FE4A4B',
                        fontSize: 40,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body3"
                    sx={{ color: '#FFFFFF', fontSize: '0.875rem' }}
                  >
                    20% incorrect
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                      variant="determinate"
                      value={15}
                      size={50}
                      thickness={3}
                      sx={{ color: '#8B00FF' }}
                      aria-label="15% don't know"
                    />
                    <CheckCircleIcon
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#8B00FF',
                        fontSize: 40,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body3"
                    sx={{ color: '#FFFFFF', fontSize: '0.875rem' }}
                  >
                    15% don't know
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        {showKarContent ? (
          <Kar />
        ) : (
          <Box
            sx={{
              backgroundColor: '#040D30',
              border: '2px solid #AD46F7',
              width: { xs: '88%', sm: '100%' },
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                width: 'auto',
              }}
            >
              <Button
                variant="contained"
                startIcon={<MenuBookIcon />}
                onClick={() => handleButtonClick('Summary')}
                sx={{
                  backgroundColor:
                    selectedButton === 'Summary' ? '#4C66D1' : '#040D30',
                  color: '#FFFFFF',
                  border: '2px solid #273269',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor:
                      selectedButton === 'Summary' ? '#4C66D1' : '#040D30',
                  },
                  width: '150px',
                  height: '50px',
                }}
              >
                Summary
              </Button>

              <Button
                variant="contained"
                startIcon={<SecurityIcon />}
                onClick={() => handleButtonClick('CyberKarma GPT')}
                sx={{
                  backgroundColor:
                    selectedButton === 'CyberKarma GPT' ? '#4C66D1' : '#040D30',
                  color: '#FFFFFF',
                  border: '2px solid #273269',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor:
                      selectedButton === 'CyberKarma GPT'
                        ? '#4C66D1'
                        : '#040D30',
                  },
                  width: '200px',
                  height: '50px',
                }}
              >
                CyberKarma GPT
              </Button>
            </Box>

            <Divider
              sx={{
                width: '100%',
                backgroundColor: '#AD46F7',
                height: '2px',
              }}
            />

            {selectedButton === 'Summary' && (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                  },
                  gap: 2,
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#171E40',
                    border: '2px solid #AD46F7',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        backgroundColor: '#43518E',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textAlign: 'center',
                      }}
                    >
                      Unpatched Assets since 30 Days
                    </Typography>
                  </Box>

                  <ResponsiveContainer width="100%" height="90%">
                    <PieChart aria-label="Distribution of Unpatched Assets by Operating System">
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ name }) => `${name}`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={pieColors[index % pieColors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>

                <Box
                  sx={{
                    backgroundColor: '#171E40',
                    border: '2px solid #AD46F7',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        backgroundColor: '#43518E',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textAlign: 'center',
                      }}
                    >
                      Unresolved Critical SOC Incident
                    </Typography>
                  </Box>

                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={barData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      aria-label="Unresolved Critical SOC Incidents by Category"
                    >
                      <XAxis dataKey="name" tick={false} />
                      <YAxis tick={false} />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36} />

                      <Bar
                        dataKey="value"
                        name="Incidents"
                        style={{ cursor: 'default' }}
                      >
                        <LabelList
                          dataKey="name"
                          position="top"
                          formatter={(name: string) => name}
                          style={{
                            fill: '#FFFFFF',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}
                        />
                        {barData.map((entry, index) => (
                          <Cell
                            key={`cell-bar-${index}`}
                            fill={barColors[index % barColors.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>

                <Box
                  sx={{
                    backgroundColor: '#171E40',
                    border: '2px solid #AD46F7',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        backgroundColor: '#43518E',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textAlign: 'center',
                      }}
                    >
                      Weak Points (EMP & Machines)
                    </Typography>
                  </Box>

                  <ResponsiveContainer width="100%" height="90%">
                    <PieChart aria-label="Distribution of Patch, SOC & VAPT">
                      <Pie
                        data={donutPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}
                        label={({ name }) => `${name}`}
                      >
                        {donutPieData.map((entry, index) => (
                          <Cell
                            key={`cell-donut-${index}`}
                            fill={donutPieColors[index % donutPieColors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>

                <Box
                  sx={{
                    backgroundColor: '#171E40',
                    border: '2px solid #AD46F7',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        backgroundColor: '#43518E',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        textAlign: 'center',
                      }}
                    >
                      Weak (Apps & Software)
                    </Typography>
                  </Box>

                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={doubleBarData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      aria-label="Weak Points in Apps & Software"
                    >
                      <XAxis dataKey="name" tick={false} />
                      <YAxis tick={false} />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36} />

                      <Bar
                        dataKey="Apps"
                        name="Apps"
                        fill="#5EFF81"
                        barSize={30}
                      >
                        <LabelList
                          dataKey="Apps"
                          position="top"
                          formatter={(value: number) => value}
                          style={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}
                        />
                      </Bar>

                      <Bar
                        dataKey="Software"
                        name="Software"
                        fill="#FE4A4B"
                        barSize={30}
                      >
                        <LabelList
                          dataKey="Software"
                          position="top"
                          formatter={(value: number) => value}
                          style={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            )}

            {selectedButton === 'CyberKarma GPT' && <CyberKarmaGPT />}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
