import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useContext } from 'react'
import { StateContext } from '@/pages/_app'

import '@/app/globals.css'

const isEven = (input: number) => {
  return input % 2 === 0
}

type FormValues = {
  iref: number
  magnets: number
}

export default function Step1() {
  const router = useRouter()

  const { state, setState } = useContext(StateContext)

  // form for inputs
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const onSubmit = handleSubmit((data) => {
    state.iref = data.iref
    state.pp = data.magnets / 2
    setState(state)
    console.log(state)
    router.push('/step-3')
  })

  return (
    <div className="flex flex-col max-w-2xl mx-12 gap-2">
      <p className="mb-2">
        Set <b>maximal amplitude of motor current</b> and <b>number of magnets in the motor</b>.
      </p>
      <p className="subtitle mb-8">
        In our controller, we save these values under the names <b>iref</b> (for maximal amplitude) and <b>pp</b>, which
        is the number of magnets in the controller divided by 2 (You can look them up in our GUI if you want to change
        these values later).
      </p>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div>
          <div className="flex flex-col gap-2 items-center" style={{ width: '600px' }}>
            <div className="flex justify-start w-full items-center">
              <div className="w-24">
                <label htmlFor="irefInput" className="col-form-label">
                  iref
                </label>
              </div>
              <div className="w-40">
                <input
                  type="number"
                  className={`form-control${errors.iref ? ' is-invalid' : ''} w-full text-input`}
                  id="irefInput"
                  aria-describedby="passwordHelpInline"
                  {...register('iref', { required: true, valueAsNumber: true })}
                  defaultValue={state.iref}
                />
              </div>
              <div className="pl-4">
                <span className="form-text">Maximal amplitude of motor current.</span>
              </div>
            </div>
            <div className="flex justify-start w-full items-center">
              <div className="w-24">
                <label htmlFor="magnetsInput" className="col-form-label">
                  magnets
                </label>
              </div>
              <div className="w-40">
                <input
                  type="number"
                  className={`form-control${errors.magnets ? ' is-invalid' : ''} w-full text-input`}
                  id="magnetsInput"
                  aria-describedby="passwordHelpInline"
                  defaultValue={state.pp ? state.pp * 2 : undefined}
                  {...register('magnets', {
                    required: true,
                    valueAsNumber: true,
                    validate: isEven
                  })}
                />
              </div>
              <div className="pl-4 max-w-[20rem]">
                <span className="form-text">
                  The number of magnets inside the electric motors{' '}
                  <span style={errors.magnets ? { color: 'red' } : {}}>(has to be an even number)</span>.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-8">
          <Link href={`/step-1`}>
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
