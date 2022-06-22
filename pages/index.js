import Link from 'next/link';
import Layout from '../components/layout'
import Timeline from '../components/timeline';

const menu = [
  { name:'酒店介绍', slug:'/intro'},
  { name:'人员与分组', slug:'/team' },
  { name:'行前注意事项', slug:'/notice'},
  { name:'费用明细', slug:'/fee'}
]

export default function Home() {
  return (
    <Layout home>
      <section>
        <p>
          所有关于本次 Team Build 的信息，都在这里了
        </p>
        <ul>
          {
            menu.map(item =>(
              <li key={item.name}>
              <Link href={item.slug}>
                <a >{item.name}</a>
              </Link>
              </li>
            ))
          }
        </ul>
        <Timeline />
      </section>
    </Layout>
  )
}
