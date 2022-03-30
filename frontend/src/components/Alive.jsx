import AliveService from '../utils/api/services/AliveService.js'
import {useState} from 'react'

export const Alive = () => {

    const [data, setData] = useState('')

  const checkApiStatus = () => {
    AliveService.alive()
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(error => console.log(error))
  }



  return (
    <div>Alive
    <button onClick={checkApiStatus}>Check if Api is Alive</button>
    <h3>{data}</h3>
    </div>
  )
}
