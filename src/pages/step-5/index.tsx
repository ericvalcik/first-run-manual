import '@/app/globals.css'

import { StepTemplate } from '@/components/StepTemplate'
import { StateContext } from '@/pages/_app'
import temp from '@/assets/images/sensor-connections/temp.jpg'
import sincosTemp from '@/assets/images/sensor-connections/sincos-temp.jpg'
import sincos from '@/assets/images/sensor-connections/sincos.jpg'
import hallTemp from '@/assets/images/sensor-connections/hall-temp.jpg'
import hall from '@/assets/images/sensor-connections/hall.jpg'
import { useContext } from 'react'
import Image from 'next/image'

const Step5 = () => {
  const { state } = useContext(StateContext)

  let imgSrc = temp
  if (state.sensortype === 'sincos') {
    if (state.mtemplo) {
      imgSrc = sincosTemp
    } else {
      imgSrc = sincos
    }
  } else if (state.sensortype === 'hall') {
    if (state.mtemplo) {
      imgSrc = hallTemp
    } else {
      imgSrc = hall
    }
  }
  return (
    <StepTemplate previousLink={'step-4'} nextLink={'step-6'}>
      <p style={{ marginBottom: '8px' }}>Connect your sensors</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        There is only one dongle coming from the controller with 8 wires that looks like the one on the diagram, and
        that one is for the sensors.
      </p>
      <Image src={imgSrc} alt="connectionDiagram" style={{ width: '800px' }} />
    </StepTemplate>
  )
}

export default Step5
