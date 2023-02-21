import '@/app/globals.css'

import { useForm } from 'react-hook-form'
import { StateContext } from '@/pages/_app'
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Step7 = () => {
  const { state, setState } = useContext(StateContext)

  // use form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // navigation
  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    state.ibpos = Number.isNaN(data.ibpos) ? 0 : data.ibpos
    state.ibneg = Number.isNaN(data.ibneg) ? 0 : data.ibneg
    state.ubmax = Number.isNaN(data.ubmax) ? 0 : data.ubmax
    state.ubmin = Number.isNaN(data.ubmin) ? 0 : data.ubmin
    setState(state)
    router.push('/step-8')
  })

  return (
    <div className="mainCol">
      <p className="mb-2">Set basic limiters</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        Set limiters according to your battery. If you leave the field empty, no limitation for that limiter will be
        done.
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center w-full gap-4">
            <div className="w-[28rem]">
              <label>Minimum battery voltage (ubmin)</label>
            </div>
            <input
              type="number"
              step="0.1"
              className={`form-control${errors.ubmin ? ' is-invalid' : ''} text-input !w-36`}
              id="ubminInput"
              {...register('ubmin', {
                valueAsNumber: true
              })}
              defaultValue={state.ubmin}
            />
            V
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="w-[28rem]">
              <label>Maximum battery voltage (ubmax)</label>
            </div>
            <input
              type="number"
              step="0.1"
              className={`form-control${errors.ubmax ? ' is-invalid' : ''} text-input !w-36`}
              id="ubmaxInput"
              {...register('ubmax', {
                valueAsNumber: true
              })}
              defaultValue={state.ubmax}
            />
            V
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="w-[28rem]">
              <label>Maximum battery discharge current (ibpos)</label>
            </div>
            <input
              type="number"
              step="0.1"
              className={`form-control${errors.ibpos ? ' is-invalid' : ''} text-input !w-36`}
              id="ibposInput"
              {...register('ibpos', {
                valueAsNumber: true
              })}
              defaultValue={state.ibpos}
            />
            A
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="w-[28rem]">
              <label>Maximum battery recuperation current (ibneg)</label>
            </div>
            <input
              type="number"
              step="0.1"
              className={`form-control${errors.ibneg ? ' is-invalid' : ''} text-input !w-36`}
              id="ibnegInput"
              {...register('ibneg', {
                valueAsNumber: true
              })}
              defaultValue={state.ibneg}
            />
            A
          </div>
        </div>
        <div className="flex mt-8">
          <Link href="/step-6">
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

export default Step7
