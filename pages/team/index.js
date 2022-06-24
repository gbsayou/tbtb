import React from "react";
import Layout from '../../components/layout'
import styles from './index.module.scss';

const teams = [
    {
        lead: 'Jim He',
        members: ['Ken Liu', 'Chloe Chen', 'Sunny Sun', 'Mallory Cui', 'Lynn Lin']
    },
    {
        lead: 'Hugh Li',
        members: ['Ben Ge',  'Sandy Xiong', 'Denny Liang']
    },
    {
        lead: 'Gray Feng',
        members: ['Kano Dai', 'Jay Huang', 'Andy An', 'Thomas Li', 'Thomas 家属']
    },
    {
        lead: 'Rex Xu',
        members: ['Jovins Huang', 'Alfred Liang', 'Alfred 家属', 'Vincent Wen', 'Roy Chen']
    },
    {
        lead: 'Joey Cao',
        members: ['Rachel Liu', 'Lala Zhang', 'Jomanda Zhang', 'Yoyo Li', 'Calla Yang']
    }
]

const driftingTeams = [
  {
    lead:'Rex Xu',
    members:['Ben Ge', 'Kano Dai', 'Jovins Huang','Ken Liu','Sandy Xiong']
  },
  {
    lead:'Joey Cao',
    members:['Rachel', 'Mallory Cui', 'Lynn Lin', 'Chloe Chen', 'Yoyo Li']
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
            
          <h2>漂流</h2>
            <p>以下是参加漂流的人员，漂流结束之后统一返回园区与大家会和。</p>
            <ul>
        {driftingTeams.map(team => (
            <li
            key={team.lead}>
            <h3 className={styles.lead}>{team.lead}</h3>
                <span>{team.members.join('，')} </span>
            </li>

        ))}
            </ul>
        </Layout>
    )
}

export default Team
