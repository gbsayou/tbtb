import React from "react";
import Layout from '../../components/layout'
import styles from './index.module.scss';

const teams = [
    {
        lead: 'Jim He',
        members: ['Chloe Chen', 'Sunny Sun', 'Mallory Cui', 'Lynn Lin', 'Ben Ge']
    },
    {
        lead: 'Adri Pan',
        members: ['Sandy Xiong', 'Gray Feng', 'Jason Zhang', 'Hugh Li', 'Denny Liang']
    },
    {
        lead: 'Ken Liu',
        members: ['Kano Dai', 'Jay Huang', 'Andy An', 'Thomas Li', 'Thomas 家属']
    },
    {
        lead: 'Rex Xu',
        members: ['Jovins Huang', 'Alfred Liang', 'Alfred 家属', 'Vincent Wen', 'Roy Chen']
    },
    {
        lead: 'Calla Yang',
        members: ['Rachel Liu','Lala Zhang', 'Jomanda Zhang','Yoyo Li','Joey Cao']
    }
]

const Team = () => {
    return (
        <Layout
            title='人员分组'
        >
            <p>以下是本次活动的人员分组详细，每位组长需要在集体活动时确认本组人员全部到齐。</p>
            <ul>
        {teams.map(team => (
            <li
            key={team.lead}>
            <h3 className={styles.lead}>组长： {team.lead}</h3>
                <span>{team.members.join('，')} </span>
            </li>

        ))}
            </ul>
        </Layout>
    )
}

export default Team