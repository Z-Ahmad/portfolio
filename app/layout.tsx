import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaki Ahmad | Portfolio',
  description: 'Zaki Ahmad is a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        {/* Background circle red */}
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] 
        h-[31.24rem] w-[31.24rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]'></div>

        {/* Background circle blue */}
        <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] 
        h-[31.24rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <div></div>

        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider> 
        {/* Footer */}
        <Toaster position='bottom-right'/>
      </body>
    </html>
  )
}
