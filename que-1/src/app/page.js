'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to  Next.js</h1>
      </header>
      
      <main>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/mui/drawer" className="nav-link"> MUI Drawer</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/button" className="nav-link"> MUI Button</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/card" className="nav-link"> MUI Card</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/dialog" className="nav-link"> MUI Dialog</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/typography" className="nav-link"> MUI Typography</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/navigation/appbar" className="nav-link"> MUI AppBar</Link>
          </li>
          <li className="nav-item">
            <Link href="/mui/navigation/tabs" className="nav-link"> MUI Tabs</Link>
          </li>
          <li className="nav-item">
            <Link href="/profile/yourname" className="nav-link"> Profile Page</Link>
          </li>
          <li className="nav-item">
            <Link href="/blog/123" className="nav-link"> Blog Post</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}