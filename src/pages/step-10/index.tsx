import '@/app/globals.css'

import React, { useContext, useState } from 'react'
import UsbConnector from '@/assets/images/usb-connector.png'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { SXApiService } from '@/service/sxapi-service'
import { StateContext } from '@/pages/_app'

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
  const { state, setState } = useContext(StateContext)

  // navigation
  const router = useRouter()
  const [connState, setConnState] = useState<string>('')
  if (connState === 'loading') {
    // TODO implement spinner
    return <div className="mainCol">Loading...</div>
  }

  const connectAndUpload = async () => {
    setConnState('loading')
    try {
      await SXApiService.search()
      const { handle } = await SXApiService.node()
      state.handle = handle
      setState(state)
      await SXApiService.setVarValue(handle, 'driver/prest', getPrest(state.sensortype))
      await SXApiService.setVarValue(handle, 'driver/limiter/ibneg', state.ibneg)
      await SXApiService.setVarValue(handle, 'driver/limiter/ibpos', state.ibpos)
      await SXApiService.setVarValue(handle, 'driver/limiter/ubmax', state.ubmax)
      await SXApiService.setVarValue(handle, 'driver/limiter/ubmin', state.ubmin)
      await SXApiService.setVarValue(handle, 'driver/motor/pp', state.pp)
      await SXApiService.setVarValue(handle, 'driver/limiter/mtemphi', state.mtemphi)
      await SXApiService.setVarValue(handle, 'driver/limiter/mtemplo', state.mtemplo)
      await SXApiService.setVarValue(handle, 'driver/iref', state.iref)
      await SXApiService.exec(handle, 'save', '-y')
      const { handle: newHandle } = await SXApiService.reboot(handle)
      state.handle = newHandle
      setState(state)
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
