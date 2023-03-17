import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Analytics from '@/components/Analytics'
import Newsletter from '@/components/Newsletter'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
      <title>Data app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}
