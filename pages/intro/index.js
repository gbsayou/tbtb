import Image from 'next/image';
import Layout from '../../components/layout';
import styles from './index.module.scss';

const views = [
  {
    name: '都喜泰丽温泉度假酒店',
    description:
      '绿树环绕的从化都喜泰丽温泉度假酒店，是一家豪华度假酒店，也是我们此次出行的重点所在。希望能给本就亮点不多的行程带来比较好的体验。',
    image: 'hotel.jpg',
  },
  {
    image: 'view.jpg',
  },
  {
    image: 'spring.jpg',
  },
];

const Intro = () => {
  return (
    <Layout title='酒店介绍'>
      <p>
        我们本次出行的目的地是山清水秀、风光旖旎、有着<i>“广东后花园”</i>之称的
        <br />
        <b>从化</b>👏👏👏🎉🎉🎉
      </p>
      {views.map((view) => (
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
  );
};

export default Intro;
