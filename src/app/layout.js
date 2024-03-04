import Providers from './Providers'
import ThemeSwitcher from './ThemeSwitcher'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-green-500 bg-red-600 dark:text-red-600 dark:bg-green-500">
      <Providers>
        <ThemeSwitcher/>
        {children}
      </Providers>
      </body>
    </html>
  )
}