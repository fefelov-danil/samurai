import React  from 'react'
import { useAppSelector } from 'utils/hooks'

export function Alert() {
  const alert = useAppSelector(state => state.app.appAlert)
  console.log(alert)

  return (
    <div>

    </div>
  )
}
