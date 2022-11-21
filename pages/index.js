import Head from 'next/head'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export const READ_ALL_QUOTES = gql`query readAllQuotes {
  quotes {
    id
    quote
  }
}`

export default function Home() {
  const { data } = useQuery(READ_ALL_QUOTES);
  console.log({homePage: data});
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/quote">Quote Page</Link>
        </div>
      </main>
    </div>
  )
}
