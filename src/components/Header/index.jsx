import React from 'react'
import Link from 'next/link';

export default function Index() {
  return (
    <div className='flex gap-5 fixed p-10 z-10'>
        <Link scroll={false} href="/">Home</Link>
        <Link scroll={false} href="/about">About</Link>
        <Link scroll={false} href="/projects">Projects</Link>
    </div>
  )
}
