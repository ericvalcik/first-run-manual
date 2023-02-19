import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo-small.png'

import '@/app/globals.css'

export default function Hello() {
  return (
    <div className="flex flex-col max-w-2xl mx-12 gap-2 items-center">
      {/* <img
        alt="logo-small"
        src={logo}
        className="logo"
        style={{ marginBottom: '20px' }}
      /> */}
      <Image src={logo} alt="logo-small" className="logo" style={{ marginBottom: '20px', objectFit: 'contain' }} />
      <p className="mb-4">Thanks for buying a product from us!</p>
      <Link href="/step-1">
        <button type="button" style={{ marginBottom: '10px' }}>
          First setup
        </button>
      </Link>
      <p className="subtitle">Have your motor and battery ready</p>
    </div>
  )
}
