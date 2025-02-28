import Grid from '@mui/material/Unstable_Grid2';
import { Box, Divider, Typography } from "@mui/material";
import { useState } from 'react';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import {
  _analyticTasks,
  _analyticPosts,
  _analyticTraffic,
  _analyticOrderTimeline,
  _appInvoices,
} from 'src/_mock';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';
import { AppNewInvoice } from '../../app/app-new-invoice';
import { EcommerceYearlySales } from '../../e-commerce/ecommerce-yearly-sales';
import { EcommerceSaleByGender } from '../../e-commerce/ecommerce-sale-by-gender';
import { BookingCheckInWidgets } from '../../booking/booking-check-in-widgets';
import { CourseProgress } from '../../course/course-progress';



// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DashboardContent maxWidth="xl">
 <Typography variant="h4" sx={{ mb: { xs: 2, md: 3 }, textAlign: "center" }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid xs={12} display="flex" justifyContent="center" alignItems="center" sx={{ my: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 600 }}>
          <Divider sx={{ flex: 1, bgcolor: "grey.500" }} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              sx={{ mx: 2, width: 250 }}
            />
          </LocalizationProvider>
          <Divider sx={{ flex: 1, bgcolor: "grey.500" }} />
        </Box>
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-bag.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-users.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
            <EcommerceSaleByGender
              title="Sale by gender"
              total={2324}
              chart={{
                series: [
                  { label: 'Mens', value: 25 },
                  { label: 'Womens', value: 50 },
                  { label: 'Kids', value: 75 },
                ],
              }}
            />
          </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EcommerceYearlySales
            title="Yearly sales"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    {
                      name: 'Total income',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Total expenses',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    {
                      name: 'Total income',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Total expenses',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
     {/* <BookingCheckInWidgets
                 chart={{
                   series: [
                     { label: 'Like', percent: 10,  },
                     { label: 'Dislike', percent: 90 },
                   ],
                 }}
                 sx={{ boxShadow: { md: 'none' } }}
               /> */}
              
          <AnalyticsCurrentVisits
            title="Devices"
            chart={{
              series: [
                { label: 'Desktop', value: 3500 },
                { label: 'Tablet', value: 2500 },
                { label: 'Mobile', value: 1500 },
                { label: 'Whatsapp', value: 500 },
              ],
            }}
          />
        </Grid>
     
        
        <Grid xs={12} md={6} lg={4}>
           <CourseProgress
                       title="Course progress"
                       chart={{
                         series: [
                           { label: 'To start', value: 45 },
                           
                         ],
                       }}
                     />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
           <CourseProgress
                       title="Course progress"
                       chart={{
                         series: [
                           { label: 'To start', value: 45 },
                           { label: 'In progress', value: 25 },
                           
                         ],
                       }}
                     />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
           <CourseProgress
                       title="Course progress"
                       chart={{
                         series: [
                           { label: 'To start', value: 45 },
                           { label: 'In progress', value: 25 },
                           { label: 'Completed', value: 20 },
                         ],
                       }}
                     />
        </Grid>
   


        <Grid xs={12}>
  <AppNewInvoice
    title="New invoice"
    tableData={_appInvoices}
    headLabel={[
      { id: 'id', label: 'Invoice ID' },
      { id: 'category', label: 'Category' },
      { id: 'price', label: 'Price' },
      { id: 'status', label: 'Status' },
      { id: '' },
    ]}
  />
</Grid>


   

      

   
      </Grid>
    </DashboardContent>
  );
}
