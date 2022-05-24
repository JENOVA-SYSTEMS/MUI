import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>スケジュール</Title>
      <div>
      <Iframe id = 'schedule'
                    url = 'https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&mode=AGENDA&showTitle=0&showNav=1&showPrint=0&showTz=0&showCalendars=1&showDate=1&src=amVub3Zha2FucmlAZ21haWwuY29t&src=bzd1OHU1OWJtaGRnNmwxdmZhbXQzMDlzZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23EF6C00&color=%2333B679&color=%230B8043" style="border:solid 1px #777" width="800" height="400" frameborder="0" scrolling="no"'
                    position='relative'
                    width='100%'
                    height='150%' />
        </div>
     </React.Fragment>
  );
}
