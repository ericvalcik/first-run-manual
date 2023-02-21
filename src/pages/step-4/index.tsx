import '@/app/globals.css'

import { useForm } from 'react-hook-form'
import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '@/pages/_app'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

interface FormValues {
  mtemplo: number
  mtemphi: number
}

const Step4 = () => {
  const { state, setState } = useContext(StateContext)
  const [sensor, setSensor] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setSensor(!!state.mtemphi || !!state.mtemplo)
  }, [state.mtemphi, state.mtemplo])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    state.mtemplo = data.mtemplo ?? undefined
    state.mtemphi = data.mtemphi ?? undefined
    setState(state)
    if (state.sensortype === 'sensorless' && state.mtemplo === 0) {
      router.push('/step-6')
    } else {
      router.push('/step-5')
    }
  })

  return (
    <div className="mainCol" style={{ justifyContent: 'flex-start' }}>
      <p style={{ marginBottom: '8px' }}>Temperature sensor</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        Does the motor have a temperature sensor?
      </p>
      <form onSubmit={onSubmit}>
        <div style={{ width: '800px' }}>
          <div className="mb-4">
            <input
              className="w-4 h-4 text-base-orange bg-gray-100 border-gray-300 rounded focus:ring-base-orange focus:ring-2 focus:outline-base-orange"
              type="checkbox"
              value=""
              id="temperatureSensor"
              onChange={(e) => {
                setSensor(e.target.checked)
              }}
              defaultChecked={!!state.mtemphi || !!state.mtemplo}
            />
            <label className="ml-4" htmlFor="temperatureSensor">
              Temperature sensor
            </label>
          </div>
        </div>
        {sensor && (
          <>
            <label htmlFor="mtemploInput" className="form-label">
              When to start the limitation
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                step="0.1"
                placeholder="value in [Ohm]"
                className={`form-control${errors.mtemplo ? ' is-invalid' : ''} text-input`}
                id="mtemploInput"
                defaultValue={state.mtemplo}
                {...register('mtemplo', {
                  valueAsNumber: true,
                  required: sensor
                })}
              />
              Ohm
            </div>
            <div className={clsx('invalid-feedback', !errors.mtemplo && 'invisible')}>
              If you want to use a temperature sensor, these fields are required.
            </div>
            <label htmlFor="mtemphiInput" className="form-label">
              When to fully limit (no power to motor)
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                step="0.1"
                placeholder="value in [Ohm]"
                className={`form-control${errors.mtemphi ? ' is-invalid' : ''} text-input w-40`}
                id="mtemplhiInput"
                defaultValue={state.mtemphi}
                {...register('mtemphi', {
                  valueAsNumber: true,
                  required: sensor
                })}
              />
              <div className="grow-0">Ohm</div>
            </div>
            <div className={clsx('invalid-feedback', !errors.mtemphi && 'invisible')}>
              If you want to use a temperature sensor, these fields are required.
            </div>
          </>
        )}
        <div className="flex mt-8">
          <Link href="/step-3">
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

export default Step4
