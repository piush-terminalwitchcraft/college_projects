import { Provider } from 'react-redux'
import './globals.css'
import { Holtwood_One_SC, Inter } from 'next/font/google'
// import {store} from '../app/redux/store'
import { AppProvider } from './redux/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
          </body>
    </html>
  )
}
