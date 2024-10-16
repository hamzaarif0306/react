import React from 'react';
import { Card, Collapse } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
import './job.css';

const text = (
    <ul className='text-left mt-2' style={{ fontSize: '16px' }}>
        <li>Design new software module to user requiements and integrate with current modules.</li>
        <li>Sound Knowledge to create and optimizze complex SQL quries stored Procedures, Packages, Scripts, Function and all Database Triggers in PL/SQL to support application functionality.</li>
        <li>Knowledge of Oracle Apex is Plus.</li>
        <li>Design, develop and maintain Oracle forms and reports(10g & 12g) applications to meet business requirements.</li>
        <li>Using Database 11g, PL/SQL, Toad.</li>
        <li>
            <Link to='/form' className='text-red-600 font-bold hover:text-red-600 mt-3 block'>Apply For Job</Link>
        </li>
    </ul>
);

const items = [
    {
        key: '1',
        label: <span className='text-[15px] text-red-600 abc'>Job Description</span>,
        children: text,
    },
];


const Job = () => (


    <Card
        hoverable
        style={{
            width: 340,
        }}
        title="Ass. Software Developer"
    >
        <Meta description="MIS(IT) Dep" />
        <Collapse items={items} bordered={false} />
    </Card>

);
export default Job;

