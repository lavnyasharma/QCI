import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function BookingCheckInWidgets({ chart, ...other }) {
  const theme = useTheme();

  const smUp = useResponsive('up', 'sm');

  const chartColors = chart.colors ?? [
    [theme.palette.primary.light, theme.palette.primary.main],
    [theme.palette.warning.light, theme.palette.warning.main],
  ];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    stroke: { width: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: chartColors[0][0], opacity: 1 },
          { offset: 100, color: chartColors[0][1], opacity: 1 },
        ],
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize,
            fontWeight: theme.typography.subtitle2.fontWeight,
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Feedback
      </Typography>

      <Card {...other}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
              sx={{ borderStyle: 'dashed' }}
            />
          }
        >
          {chart.series.map((item) => (
            <Box
              key={item.label}
              sx={{
               
                gap: 1.5,
                width: 1,
                display: 'flex',
                px: { xs: 3, sm: 0 },
                alignItems: 'center',
                justifyContent: { sm: 'center' },
              }}
            >
              <Chart
                type="radialBar"
                series={[item.percent]}
                options={{
                  ...chartOptions,
                  ...(item.label !== 'Sold' && {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        colorStops: [
                          { offset: 0, color: chartColors[1][0], opacity: 1 },
                          { offset: 100, color: chartColors[1][1], opacity: 1 },
                        ],
                      },
                    },
                  }),
                }}
                width={80}
                height={80}
              />

              <div>
                <Box sx={{ mb: 0.5, typography: 'h5' }}>{fNumber(item.total)}</Box>
                <Box sx={{ typography: 'body2', color: 'text.secondary' }}>{item.label}</Box>
              </div>
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
