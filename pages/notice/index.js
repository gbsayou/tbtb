import React from "react";
import Layout from '../../components/layout'
import styles from './index.module.scss';

const notices = [
    {
        title: '需要携带的东西',
        items: ['身份证', '手机', '充电器', '耳机', '防晒霜', '防晒衣', '帽子', '换洗衣物']
    },
    {
      title:'需要做的准备',
      items:['周三或者周四晚上做核酸']
    }
]

const Team = () => {
    return (
        <Layout
            title='注意事项'
        >
            <p>以下是本次活动开始前需要注意的事项，请您查收</p>
            {notices.map(notice => (
                <p key={notice.title}>
                    <h3 >{notice.title}</h3>
                    <span>{notice.items.join('，')} </span>
                </p>

            ))}
        </Layout>
    )
}

export default Team
