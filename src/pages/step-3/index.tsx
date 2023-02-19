import { useForm } from 'react-hook-form'
import React, { useContext } from 'react'
import { StateContext } from '@/pages/_app'
import { useRouter } from 'next/router'

import '@/app/globals.css'
import Link from 'next/link'

interface FormValues {
  sensor: string
}

const Step3 = () => {
  const { state, setState } = useContext(StateContext)
  const router = useRouter()

  // form
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    state.sensortype = data.sensor as any
    setState(state)
    router.push('/step-4')
  })

  return (
    <div className="mainCol">
      <p style={{ marginBottom: '8px' }}>Connect your sensors</p>
      <p className="subtitle">
        Now we can send appropriate power to the motor, but we still need to get feedback from to motor about the
        current position of the rotor. For that we use sensors.
      </p>
      <p className="subtitle">
        We currently only support 3 types of sensor configurations, <b>Hall</b>, <b>SinCos</b> and <b>Sensorless</b>{' '}
        (which as the name suggests means no sensors).
      </p>
      <form onSubmit={onSubmit} style={{ width: '800px' }}>
        <div className="row g-3" style={{ width: '400px' }}>
          <div className="col-6">
            <label className="form-check-label" htmlFor="sensorSelect">
              Select sensor type
            </label>
          </div>
          <div className="col-6">
            <select
              className="form-select"
              id="sensorSelect"
              {...register('sensor')}
              defaultValue={state.sensortype ?? `sincos`}
            >
              <option value="sincos">SinCos</option>
              <option value="hall">Hall</option>
              <option value="sensorless">Sensorless</option>
            </select>
          </div>
        </div>
        <div className="flex mt-8">
          <Link href="/step-2">
            <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
              Previous step
            </button>
          </Link>
          <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="submit">
            Next step
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step3
