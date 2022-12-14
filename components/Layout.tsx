import {FC,ReactNode} from 'react'
import Head from 'next/head'

interface Props {
    children: ReactNode
    title:string
}

export const Layout:FC<Props> = ({children,title="welcome to nextjs"}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono'>
      <Head>{title}</Head>
      <header></header>
      <main className='flex flex-1 flex-col justify-center items-center w-screen'>{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className='flex items-center'
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          
            <img src="/vercel.svg" alt="Vercel Logo" className='h-4 ml-2' />
          
        </a>
      </footer>
    </div>
  )
}


