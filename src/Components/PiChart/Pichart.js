import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Pichart = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1 className='text-center text-primary'>Invest Vs Revenue</h1>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
           
        </div>
    );
};

export default Pichart;