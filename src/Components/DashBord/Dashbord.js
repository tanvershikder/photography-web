import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import Pichart from '../PiChart/Pichart';

const Dashbord = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (

        <div className='d-flex m-5'>
            <div>
                <h1 className='text-success'>Month wise invest and revenue</h1>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" fill="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                </LineChart>
            </div>
            <div>
                <Pichart data={data}></Pichart>
            </div>
        </div>
    );
};

export default Dashbord;