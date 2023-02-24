import '@/app/globals.css'

import { useContext, useState } from 'react'
import { SXApiService } from '@/service/sxapi-service'
import { StateContext } from '@/pages/_app'

const Step12 = () => {
  const { state } = useContext(StateContext)
  const [value, setValue] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  const runMotor = async () => {
    setDisabled(true)
    fetch('http://localhost:8000/', {
      method: 'GET'
    }).then((res) => {
      // eslint-disable-next-line no-console
      res.json().then((data) => console.log(data))
    })
    setTimeout(() => {
      setDisabled(false)
    }, 1000)

    if (!state.handle) {
      throw new Error('No handle')
    }
    try {
      if (value === 0) {
        await SXApiService.exec(state.handle, 'stop')
      } else {
        await SXApiService.run(state.handle, value)
      }
    } catch (e) {
      // TODO handle error
    }
  }

  return (
    <div className="mainCol">
      <p style={{ marginBottom: '8px' }}>Run the motor.</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '20px' }}>
        Everything was setup correctly, so now you can spin the motor! But watch out sudden changes can be{' '}
        <b>dangerous</b>. Also beware that, when you move the slider the motor will start spinning <b>immediately</b>!
      </p>
      <p className="subtitle" style={{ marginBottom: '20px' }}>
        Set the intensity for the motor, all the way to the left side on the slider is 0% and all the way to the right
        side is 100%
      </p>
      <div className="row g-3" style={{ width: '800px' }}>
        <div className="col-6">
          <input
            type="range"
            className="form-range w-[80%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="1"
            step="0.01"
            id="commandRange"
            defaultValue="0"
            onChange={(e) => setValue(e.target.valueAsNumber)}
          />
        </div>
        <div className="col-3" style={{ height: '100%', alignSelf: 'center' }}>
          <p className="subtitle">{Math.round(value * 100)} %</p>
        </div>
        <div className="col-3">
          <button type="button" onClick={runMotor} className="mt-6" disabled={disabled}>
            Run motor
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step12
