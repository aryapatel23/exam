'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MUICardPage() {
  return (
    <div>
      <h1>/mui/card</h1>
      <Card sx={{ maxWidth: 345, marginTop: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Material UI Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple Material UI Card component rendered in the /mui/card route.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}