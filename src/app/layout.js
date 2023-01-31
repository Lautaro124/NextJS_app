import Navigation from '~/app/components/naviagtion/navigation'
import '~/styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
