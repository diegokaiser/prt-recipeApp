import { useContext } from 'react'
import { UAContext } from '@/providers/ua'

export function Index() {
  const ua = useContext(UAContext)
  console.log(ua)
  return (
    <div className="container">
      <div className="main__content"></div>
    </div>
  )
}
