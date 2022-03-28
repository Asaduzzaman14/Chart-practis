import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Spacialchart = () => {
    const [phone, setPhone] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const lodedData = data.data.data;
                const phoneData = lodedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parts[1]
                    }
                    return ph
                })
                setPhone(phoneData)
                console.log(phoneData);
            })
    }, [])


    return (

        <BarChart width={800} height={400} data={phone}>
            <Bar dataKey="value" fill="#8884d8" />
            <YAxis></YAxis>
            <XAxis dataKey={'name'}></XAxis>
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default Spacialchart;