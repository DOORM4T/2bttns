import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>2bttns Admin Panel</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>2bttns Admin Panel</h1>

                <div className={styles.grid}>
                    <a href="/games" className={styles.card}>
                        <h2>Games &rarr;</h2>
                        <p>Manage your games</p>
                    </a>

                    <a href="/lists" className={styles.card}>
                        <h2>Lists &rarr;</h2>
                        <p>Manage lists</p>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Home
