import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import './piChart.css'

const Pichart = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h3 className='text-center text-primary'>Invest Vs Revenue</h3>
            <PieChart width={400} height={300}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
           
        </div>
    );
};

export default Pichart;