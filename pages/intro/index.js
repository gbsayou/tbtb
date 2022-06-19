import Image from 'next/image'
import Layout from "../../components/layout";
import styles from "./index.module.scss"

const views = [
    {
        name: '南沙湾沙滩',
        description: '南沙湾沙滩是万山群岛中最负盛名的沙滩泳场，享有"钻石沙滩"美誉，就在我们的酒店外面！',
        image: 'beach.png',
    },
    {
        name: '月牙环',
        description: '在佳兆业可域度假村，任何时候拍照都十分出片',
        image: 'moon-ring.png',
    },
    {
        name: '万觅书店',
        description: '纯白 ins 风',
        image: 'book-store.png',
    },
    {
        name: '蜜月阁',
        description: '全岛观海的最佳位置，可以看到东澳岛的无敌海景',
        image: 'honey-moon.png',
    },
    {
        name: '风车山',
        description: '这里可以看到海岛最美的风光，日出日落也很美，可以坐观光车去',
        image: 'wind-ring.png'
    },
    {
        name: '摩崖石刻',
        description: '跨越世纪的历史痕迹',
        image: 'mo-ya.png',
    }
]

const Intro = () => {
    return (
        <Layout title='行程介绍'>
            <p>我们本次出行的目的地是有着<i>“广东小马代”</i><i>“广东小塞班”</i><i>“钻石沙滩”</i>之称的<br /><b>珠海东澳岛</b>👏👏👏🎉🎉🎉</p>
            <h3>打卡点介绍</h3>
            {views.map(view => (
                <div key={view.name} className={styles.view}>
                    <span>{view.name}</span>
                    <p>{view.description}</p>
                    <Image
                        priority
                        src={`/images/${view.image}`}
                        height={350}
                        width={650}
                    />
                </div>
            ))}
        </Layout>
    )
}

export default Intro