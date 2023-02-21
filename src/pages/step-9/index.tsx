import '@/app/globals.css'

import PowerOn from '@/assets/images/power-on.jpg'
import { StepTemplate } from '@/components/StepTemplate'
import Image from 'next/image'

const Step9 = () => {
  return (
    <StepTemplate previousLink={'step-8'} nextLink={'step-10'}>
      <p style={{ marginBottom: '8px' }}>Turn the controller on</p>
      <p className="subtitle">If the controller turned on successfully, the motor can make beeping sound.</p>
      <Image alt="powering-on-diagram" src={PowerOn} />
    </StepTemplate>
  )
}

export default Step9
