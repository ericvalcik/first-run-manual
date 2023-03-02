import type { AppProps } from 'next/app'
import { State } from '@/app/types'
import React, { SetStateAction } from 'react'

export const StateContext = React.createContext({
  state: {} as State,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: (_: SetStateAction<State>) => {}
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = React.useState<State>({} as State)

  return (
    <StateContext.Provider value={{ state, setState }}>
      <div className="absolute left-10 top-10 shadow-lg p-4 rounded-2xl text-sm max-w-md">
        <span className="text-base-orange font-bold">This software is in early development!</span> Beware that you are
        using this on your own risk, siliXcon is not responsible for any damage caused by using this application.
      </div>
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}
