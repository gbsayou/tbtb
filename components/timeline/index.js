import React from 'react'
import { Chrono } from 'react-chrono'
import _ from 'lodash'
import styles from './index.module.scss'

const activities = [
  { time: '6/13', item: '开始准备' },
  { time: '6/24 13:45', item: '公司楼下集合，等候大巴车' },
  { time: '6/24 14:00', item: '乘坐大巴前往酒店' },
  { time: '6/24 15:30', item: '入住酒店。放下行李，短暂休息' },
  { time: '6/24 19:00', item: '晚餐' },
  { time: '6/24 20:00', item: '自由活动，晚上可以自由组局' },
  { time: '6/25 07:30', item: '酒店自助早餐' },
  { time: '6/25 10:00', item: '早餐结束，自由活动，泡温泉' },
  { time: '6/25 11:15', item: '退房' },
  { time: '6/25 11:30', item: '乘车前往大丰门景区' },
  { time: '6/25 12:30', item: '农家乐午餐' },
  { time: '6/25 13:30', item: '大丰门景区游玩' },
  { time: '6/25 16:30', item: '乘车返回公司' }
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
