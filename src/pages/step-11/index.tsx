import '@/app/globals.css'

import React, { useContext, useState } from 'react'
import { StateContext } from '@/pages/_app'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Step11 = () => {
  const { state } = useContext(StateContext)
  const [connState, setConnState] = useState('')

  // navigation
  const router = useRouter()

  if (connState === 'loading') {
    return (
      <div className="mainCol">
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
      </div>
    )
  }

  const identifyMotor = async () => {
    try {
      setConnState('loading')
      // await exec('identlin');
      if (state.sensortype === 'sincos') {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 3; i++) {
          // eslint-disable-next-line no-await-in-loop
          // await exec('identrun');
        }
      } else {
        // await exec('identrun');
      }
      // await exec('save -y');
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
