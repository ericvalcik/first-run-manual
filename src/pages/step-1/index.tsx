import Image from 'next/image'
import Link from 'next/link'

import diagram from '@/assets/images/controller-battery.jpg'
import '@/app/globals.css'

export default function Step1() {
  return (
    <div className="mainCol">
      <p style={{ marginBottom: '8px' }}>Connect controller to your electric motor</p>
      <p className="subtitle" style={{ marginTop: '0px', marginBottom: '0px' }}>
        <b>Make sure the controller is turned off!</b> The controller does not have any internal supply, so just make
        sure the controller is not connected to a battery or your PC via an USB cable.
      </p>
      <Image alt="controller-motor-diagram" src={diagram} style={{ width: '800px', objectFit: 'contain' }} />
      <Link href="/step-2">
        <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
          Next step
        </button>
      </Link>
    </div>
  )
}
