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
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}
