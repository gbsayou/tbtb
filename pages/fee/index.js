
import React from "react";
import Layout from '../../components/layout'

const items = [
    '大巴包车：2800',
    '保险：10*28人= 280',
    '酒店+早餐：双床房1050元/间 * 14间 = 14700',
    '晚餐：2388元/桌 * 3桌 = 7164',
    '午餐：待定',
    '大丰门景区活动：待定'
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
            {/* <h3>总计</h3>
            <span>27044</span>
            <h3>人均</h3>
            <span>27044 / 28 = 965</span> */}
        </Layout>
    )
}

export default Team
