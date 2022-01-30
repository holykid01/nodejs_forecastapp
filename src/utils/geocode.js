const request = require('request');
const qs = require('querystring');
// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/New%20Delhi.json?access_token=pk.eyJ1IjoiaG9seWtpZDAxIiwiYSI6ImNreW92ZGEzdDAzd3Qydm83d201MjF0ODYifQ.UDNTVnYlJVk9Hrh0d0ZFyQ&limit=1'

const geocode = (address,callback)=>{

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaG9seWtpZDAxIiwiYSI6ImNreW92ZGEzdDAzd3Qydm83d201MjF0ODYifQ.UDNTVnYlJVk9Hrh0d0ZFyQ&limit=1'

  request({url : url, json: true},(error,response)=>
  {
    var latit = ' ', longt = ' '

    if(error){
      callback('unable to connect to location services !',undefined)
    }
    else if(response.body.features.length === 0)
    {
      callback('unable to find the location!',undefined)
    }
    else{
      
      latit +=  response.body.features[0].center[1] 

      longt  +=  response.body.features[0].center[0]

      callback(undefined,{
        latitude: latit,
        longitude: longt,
        location: response.body.features[0].place_name

      })
    }
  })
  
}

module.exports= geocode