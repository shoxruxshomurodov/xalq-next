import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

interface GraphProps {
  data?: any;
  dataKey: string;
  hasDot?: boolean;
  strokeColor?: string;
}

const LineGraph = ({ data, dataKey, hasDot, strokeColor }: GraphProps) => {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={strokeColor || '#000'}
          dot={hasDot}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
