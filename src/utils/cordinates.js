const request = require('request')

const cordinates = (latitude,longitude,callback)=>{

    const options = {
  
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current/units=I',
        qs: {lat: latitude, lon: longitude},
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key': 'd8622bc4f1msh7ba4e3a5273c6efp1a80bajsn522d72a65fb0',
          useQueryString: true
        }
      }

      request(options,(error, response,body)=>{
        if (error)
        {
          callback('unable to connect....:(',undefined)
        }
        else if(response.body.length === 39)
        {
            callback(undefined,response.body)
        }
        else{
  
          const datas = JSON.parse(body)
          callback(undefined,'it is currently '+ datas.data[0].datetime+"and temp is "+datas.data[0].temp+".chance of rain is"+ datas.data[0].precip)
        }
  
      })

}

module.exports=cordinates
