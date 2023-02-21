import '@/app/globals.css'

import BatteryTerminals from '@/assets/images/battery-terminals.png'
import Image from 'next/image'
import { StepTemplate } from '@/components/StepTemplate'

const Step8 = () => {
  return (
    <StepTemplate previousLink={'step-7'} nextLink={'step-9'}>
      <p style={{ marginBottom: '8px' }}>Connect battery terminals to the controller</p>
      <p className="subtitle">Make sure the power switch is in the off position.</p>
      <Image alt="battery-terminals" src={BatteryTerminals} />
    </StepTemplate>
  )
}

export default Step8
