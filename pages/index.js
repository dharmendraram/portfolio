import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Deep | portfilo website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main>

        {/* main section start  */}
        <Main/>
        {/* main section end  */}

        {/* about section start  */}
        <About/>
        {/* about section end  */}

        {/* skills section start  */}
        <Skill/>
        {/* skills section end  */}

        {/* Project section start  */}
        <Project/>
        {/* Project section end  */}

        {/* contact section start  */}
        <Contact/>
        {/* contact section end  */}

       
      </main>
    </>
  )
}
