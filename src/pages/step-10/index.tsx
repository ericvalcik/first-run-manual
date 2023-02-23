import '@/app/globals.css'

import React, { useState } from 'react'
import UsbConnector from '@/assets/images/usb-connector.png'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPrest = (sensortype: string | undefined) => {
  switch (sensortype) {
    case 'hall':
      return 2
    case 'sincos':
      return 3
    default:
      return 1
  }
}

const Step10 = () => {
  // const { state } = useContext(StateContext)

  // navigation
  const router = useRouter()
  const [connState, setConnState] = useState<string>('')
  if (connState === 'loading') {
    return (
      <div className="mainCol">
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
      </div>
    )
  }

  const connectAndUpload = async () => {
    setConnState('loading')
    try {
      // TODO implement
      // await set('driver/prest', getPrest(state.sensortype))
      // await set('driver/limiter/ibneg', state.ibneg)
      // await set('driver/limiter/ibpos', state.ibpos)
      // await set('driver/limiter/ubmax', state.ubmax)
      // await set('driver/limiter/ubmin', state.ubmin)
      // await set('driver/motor/pp', state.pp)
      // await set('driver/limiter/mtemphi', state.mtemphi)
      // await set('driver/limiter/mtemplo', state.mtemplo)
      // await set('driver/iref', state.iref)
      // await exec('save -y')
      // await reboot()
      await router.push('/step-11')
    } catch (e) {
      setConnState('error')
    }
  }

  return (
    <div className="mainCol">
      <p style={{ marginBottom: '8px' }}>Connect controller to your PC</p>
      <p className="subtitle">
        Connect the controller via USB with the cable that was included in the package. The USB cable should fit in the
        4 pin female connector.
      </p>
      <Image alt="USB controller" src={UsbConnector} className="w-72 py-8 self-center" />

      <div className="flex mt-8">
        <Link href="/step-9">
          <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
            Previous step
          </button>
        </Link>
        <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button" onClick={connectAndUpload}>
          Next step
        </button>
      </div>
    </div>
  )
}

export default Step10
