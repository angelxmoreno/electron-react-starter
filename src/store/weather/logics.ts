import { createLogic } from 'redux-logic';
import { cancelWeatherAction, fulfilledWeatherAction, rejectedWeatherAction, fetchWeatherAction } from './actions';
import { getType } from 'typesafe-actions';

const API_KEY = process.env.REACT_APP_OWM_API_KEY

const fetchWeatherLogic = createLogic({
  type: getType(fetchWeatherAction),
  cancelType: getType(cancelWeatherAction),
  latest: true,
  processOptions: {
    dispatchReturn: true,
    successType: getType(fulfilledWeatherAction), // dispatch this success act type
    failType: getType(rejectedWeatherAction), // dispatch this failed action type
  },

  async process({ action }) {
    const location = (action as any).payload as string
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    const json= await res.json()

    if(json.cod === "404") {
      throw new Error(json.message)
    }

    return json
  }
});

const weatherLogic = [
  fetchWeatherLogic,
]

export default weatherLogic