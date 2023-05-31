import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core';
import { useDataProvider } from 'react-admin';

const Dashboard = () => {
  const dataProvider = useDataProvider();

  React.useEffect(() => {
    // Fetch data from the API using the dataProvider
    const fetchData = async () => {
      const { data: activeUserCount } = await dataProvider.getOne('dashboard', {
        id: 'activeUserCount',
      });
      // Handle the activeUserCount data as needed
    };

    fetchData();
  }, [dataProvider]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Dashboard
        </Typography>
        {/* Render your dashboard components and graphs here */}
      </CardContent>
    </Card>
  );
};
export default Dashboard
