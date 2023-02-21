import '@/app/globals.css'

import powerSwitch from '@/assets/images/power-switch.jpg'
import Image from 'next/image'
import { StepTemplate } from '@/components/StepTemplate'

const Step6 = () => {
  return (
    <StepTemplate previousLink={'step-5'} nextLink={'step-7'}>
      <p style={{ marginBottom: '8px' }}>Connect powering switch to the controller</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        Connect the wires as shown on the diagram below. There should be only one dongle that looks like the one in the
        diagram. It should be a 3 pin female connector.
      </p>
      <Image src={powerSwitch} alt="power-switch" />
    </StepTemplate>
  )
}

export default Step6
