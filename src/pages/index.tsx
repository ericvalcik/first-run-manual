import Image from 'next/image'
import logo from '@/assets/images/logo-small.png'

import '@/app/globals.css'
import { useRouter } from 'next/router'
import { SXApiService } from '@/service/sxapi-service'
import { useState } from 'react'

export default function Hello() {
  const router = useRouter()
  const [isConnected, setIsConnected] = useState<boolean>(true)

  const checkEmGUIAndRedirect = async () => {
    if (await SXApiService.checkConnection()) {
      router.push('/step-1')
    } else {
      setIsConnected(false)
    }
  }

  return (
    <div className="flex flex-col max-w-2xl mx-12 gap-2 items-center">
      <Image src={logo} alt="logo-small" className="logo" style={{ marginBottom: '20px', objectFit: 'contain' }} />
      <p className="mb-4">Thanks for buying a product from us!</p>
      {!isConnected ? (
        <div className="mb-4 text-center subtitle !font-bold">
          Your EmGUI is not running! Please go to LaunchPad and run emGUI and try again.
        </div>
      ) : null}
      <button type="button" style={{ marginBottom: '10px' }} onClick={checkEmGUIAndRedirect}>
        First setup
      </button>
      <p className="subtitle">Have your motor and battery ready</p>
    </div>
  )
}
