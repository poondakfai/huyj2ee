import type { Metadata } from 'next';
import Link from 'next/link';
import { AiOutlineDown } from 'react-icons/ai';
import SearchInput from '@/components/ui/SearchInput';
import './globals.css';

export const metadata: Metadata = {
  title: 'Welcome to huyj2ee blog',
  description: 'HuyJ2ee blogs, projects and CV',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div id='main'>
          <div id='header'>
            {/* Begin: nav */}
            <nav style={{display: 'inline-block'}}><ul id='nav'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/project'>Projects</Link></li>
              <li><Link href='/blog'>Blogs</Link></li>
              <li><Link href='/contact'>Contact</Link></li>
              <li>
                <span>
                  More
                  <AiOutlineDown className='nav-more-icon'/>
                </span>
                <ul className='subnav'>
                  <li><Link href='/cv'>CV</Link></li>
                </ul>
              </li>
            </ul></nav>
            {/* End: nav */}

            {/* Begin: search blogs */}
            <SearchInput />
            {/* End: search blogs */}
          </div>

          <div id='content'>
            {children}
          </div>

          <div id='footer'>
            <div>
              Powered by ReactJS
            </div>
            <div>
                &copy; huyj2ee.vercel.app
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
