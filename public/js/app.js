const weatherForm = document.querySelector('.searchbox')
const search = document.querySelector('.sbx-custom__input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message_time = document.querySelector('#message-time')
const message_temp = document.querySelector('#message-temp')
const message_rain = document.querySelector('#message-prep') 



document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() { this.parentNode.querySelector('input').focus();});


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    // message2.textContent= '';
    message_rain.textContent='';
    message_temp.textContent='';
    message_time.textContent='';

    message1.textContent= 'loading...'; 
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
                console.log(data.error)
            } else {
               
                
                message1.textContent = data.location
                message_time.textContent = "Time:- "+ data.forecast.time
                message_temp.textContent = "Temp:- "+ data.forecast.temp + " .C"
                message_rain.textContent = "Precepitation:- "+data.forecast.prep+ " % Chance"
                
                console.log(data.location)
               // console.log(data.forecast)
            }
        })
    })
})