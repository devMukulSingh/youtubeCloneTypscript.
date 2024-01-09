
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './redux/Providers';
import Sidebar from './components/commons/Sidebar';
import Header from './components/commons/Header';
import { useAppSelector } from './redux/hooks';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}: { children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
 
          <Header/>
          <Sidebar/>
          <div className='px-20'>
            {children}
          </div>
        </Providers>
        </body>
    </html>
  )
}
