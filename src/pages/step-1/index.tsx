import Image from 'next/image'

import diagram from '@/assets/images/controller-battery.jpg'
import { StepTemplate } from '@/components/StepTemplate'

import '@/app/globals.css'

export default function Step1() {
  return (
    <StepTemplate nextLink="step-2" previousLink="">
      <p style={{ marginBottom: '8px' }}>Connect controller to your electric motor</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        <b>Make sure the controller is turned off!</b> The controller does not have any internal supply, so just make
        sure the controller is not connected to a battery or your PC via an USB cable.
      </p>
      <Image alt="controller-motor-diagram" src={diagram} style={{ width: '800px', objectFit: 'contain' }} />
    </StepTemplate>
  )
}
