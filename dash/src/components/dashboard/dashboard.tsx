// src/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import CyberKarmaGPT from '../cyberkarma/cyberkarmagpt';
import {
  Box,
  Typography,
  Button,
  GlobalStyles,
  Divider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SecurityIcon from '@mui/icons-material/Security';
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
import '@fontsource/urbanist'; // Import Urbanist font
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import theme components

const theme = createTheme({
  typography: {
    fontFamily: 'Urbanist, sans-serif',
  },
});

const Dashboard: React.FC = () => {
  const [flashingColor, setFlashingColor] = useState('#FE4A4B');
  const [selectedButton, setSelectedButton] = useState<string | null>('Summary'); // Initialize with 'Summary'

  // Set up color flashing effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlashingColor((prevColor) =>
        prevColor === '#FE4A4B' ? '#502D86' : '#FE4A4B'
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName); // Update selected button state
  };

  // Chart Data and Configurations
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
          height: '90vh',
          backgroundColor: '#020A24',
          paddingTop: '20px',
        }}
      >
        {/* Global Styles to Override Bar Hover Effect */}
        <GlobalStyles
          styles={{
            '.recharts-bar-rectangle:hover': {
              fill: 'inherit !important',
            },
          }}
        />

        {/* Main Box */}
        <Box
          sx={{
            backgroundColor: '#171E40',
            border: '2px solid #AD46F7',
            width: '100%',
            maxWidth: '98vw',
            height: '150px',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            borderRadius: 5,
            position: 'relative',
            top: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              padding: '15px 20px',
              backgroundColor: flashingColor,
              borderRadius: 1,
              marginLeft: '20px',
              marginTop: '20px',
              marginBottom: '20px',
              flexDirection: 'row',
              height: '20px',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Knowledge Assessment Results
            </Typography>

            {/* Circular Container for Arrow Icon */}
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
              }}
            >
              <KeyboardArrowUpIcon sx={{ fontSize: 24, color: '#FFFFFF' }} />
            </Box>
          </Box>
        </Box>

        {/* New Box below the main box */}
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
          {/* Button Container */}
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
                    selectedButton === 'CyberKarma GPT' ? '#4C66D1' : '#040D30',
                },
                width: '200px',
                height: '50px',
              }}
            >
              CyberKarma GPT
            </Button>
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              width: '100%',
              backgroundColor: '#AD46F7',
              height: '2px',
            }}
          />

          {/* Conditional Rendering of Charts */}
          {selectedButton === 'Summary' && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
                width: '100%',
              }}
            >
              {/* Box 1 with Pie Chart */}
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
                {/* Separate Heading Box */}
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

                {/* Pie Chart */}
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

              {/* Box 2 with Bar Chart */}
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
                {/* Separate Heading Box */}
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

                {/* Bar Chart */}
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

              {/* Box 3 with Donut Pie Chart */}
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
                {/* Separate Heading Box */}
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

                {/* Donut Pie Chart */}
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
                      label={({ name, percent }) =>
                        `${name}`
                      }
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

              {/* Box 4 with Double Bar Chart */}
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
                {/* Separate Heading Box */}
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

                {/* Double Bar Chart */}
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

                    {/* Bar for Apps */}
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

                    {/* Bar for Software */}
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

          {/* Render content for CyberKarma GPT */}
          {selectedButton === 'CyberKarma GPT' && (
            <CyberKarmaGPT />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
