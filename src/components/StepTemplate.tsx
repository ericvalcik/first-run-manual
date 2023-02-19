import Link from 'next/link'

import '@/app/globals.css'

export type StepTemplateProps = {
  children: React.ReactNode,
  previousLink: string,
  nextLink: string
}

export const StepTemplate: React.FC<StepTemplateProps> = ({ children, previousLink, nextLink }) => {
  return (
    <div className="flex flex-col max-w-2xl mx-12 gap-2">
      <div>
        {children}
      </div>
      <div className="flex">
        <Link href={`/${previousLink}`}>
          <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
            Previous step
          </button>
        </Link>
        <Link href={`/${nextLink}`}>
          <button style={{ alignSelf: 'flex-end', marginRight: '40px' }} type="button">
            Next step
          </button>
        </Link>
      </div>
    </div>
  )
}
