import React from 'react'
import Link from 'next/link'

const headerLinks = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerLinks.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
