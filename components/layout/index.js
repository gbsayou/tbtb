import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Layout({ children, home, title }) {
  return (
    <>
    <Head>
      <title>TB Team Build</title>
    </Head>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="The Bump Team Build"
      />
    </Head>
    <div className={styles.container}>
      <h1>{title}</h1>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← 返回主页</a>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}
