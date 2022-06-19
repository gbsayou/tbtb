
import React from "react";
import Layout from '../../components/layout'
import styles from './index.module.scss';

const items = [
    '大巴包车：3000',
    '保险：10*30人=300',
    '客轮往返：70*2*30人=4200',
    '酒店+晚餐+早餐：1000*15间=15000',
    '午餐：998*3桌=2994',
]

const Team = () => {
    return (
        <Layout
            title='费用明细'
        >
            <p>以下是本次活动各项费用明细</p>
            {items.map(fee => (
                <p key={fee}>{fee}</p>
            ))}
            <h3>总计</h3>
            <span>25494</span>
            <h3>人均</h3>
            <span>25494 / 30 = 849.8</span>
        </Layout>
    )
}

export default Team