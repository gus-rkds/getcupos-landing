import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout.js' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1>Hello there</h1> 
    </Layout>
  )
}
