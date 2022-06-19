import React from 'react'
import { Chrono } from 'react-chrono'
import _ from 'lodash'
import styles from './index.module.scss'

const activities = [
  { time: '6/13', item: '开始准备' },
  { time: '6/24 12:30', item: '从公司出发，坐大巴前往珠海横琴码头' },
  { time: '6/24 15:30', item: '在横琴码头取船票，等候乘船' },
  { time: '6/24 16:20', item: '乘船前往东澳岛' },
  { time: '6/24 17:00', item: '到达东澳岛码头 乘坐酒店接送车前往酒店' },
  { time: '6/24 17:15', item: '入住酒店。放下行李，短暂休息' },
  { time: '6/24 18:30', item: '晚餐' },
  { time: '6/24 20:00', item: '自由活动，晚上可以自由组局' },
  { time: '6/25 07:30', item: '酒店自助早餐' },
  { time: '6/25 09:00', item: '自由活动' },
  { time: '6/25 12:00', item: '午餐' },
  { time: '6/25 13:30', item: '收拾行李' },
  { time: '6/25 13:50', item: '酒店门前合影' },
  { time: '6/25 14:00', item: '东澳岛码头候船' },
  { time: '6/25 14:50', item: '乘船前往横琴码头' },
  { time: '6/25 15:30', item: '到达横琴码头，乘车回公司' }
]

const Timeline = () => {
  const items = activities.map(item => {
    return {
      title: item.time,
      cardDetailedText: item.item
    }
  })
  const activeItemIndex = _.findLastIndex(activities, item => {
    return new Date() > new Date(`2022 ${item.time}`)
  })

  return (
    <div className={styles.timeline}>
      <Chrono
        items={items}
        cardHeight={100}
        hideControls
        useReadMore={false}
        disableClickOnCircle
        activeItemIndex={activeItemIndex === -1 ? 0 : activeItemIndex}
      />
    </div>
  )
}

export default Timeline