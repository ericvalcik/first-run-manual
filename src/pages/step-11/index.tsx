import '@/app/globals.css'

import React, { useContext, useState } from 'react'
import { StateContext } from '@/pages/_app'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SXApiService } from '@/service/sxapi-service'

// TODO remove
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const Step11 = () => {
  const { state } = useContext(StateContext)
  const [connState, setConnState] = useState('')

  // navigation
  const router = useRouter()

  if (connState === 'loading') {
    return (
      // TODO implement spinner
      <div className="mainCol">loading...</div>
    )
  }

  const identifyMotor = async () => {
    if (!state.handle) throw new Error('No handle')
    try {
      setConnState('loading')
      await SXApiService.exec(state.handle, 'identlin')
      await sleep(3000)
      if (state.sensortype === 'sincos') {
        await SXApiService.exec(state.handle, 'identrun')
        await sleep(3000)
        await SXApiService.exec(state.handle, 'identrun')
        await sleep(3000)
        await SXApiService.exec(state.handle, 'identrun')
      } else {
        await SXApiService.exec(state.handle, 'identrun')
      }
      await sleep(3000)
      await SXApiService.exec(state.handle, 'save', '-y')
      await router.push('/step-12')
    } catch (e) {
      setConnState('error')
    }
  }

  return (
    <div className="mainCol">
      <p style={{ marginBottom: '8px' }}>Identify the motor</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        <b>Warning!</b> The motor will start spinning.
      </p>
      <div className="flex mt-8">
        <Link href="/step-10">
          <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
            Previous step
          </button>
        </Link>
        <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button" onClick={identifyMotor}>
          Start identification
        </button>
      </div>
    </div>
  )
}

export default Step11
