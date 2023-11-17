import { useContext } from "react"
import { UAContext } from "../providers/ua"

export function Index() {
  const ua = useContext(UAContext)
  console.log(ua)
  return (
    <></>
  )
}
