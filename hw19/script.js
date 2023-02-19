
const BASE_URl = 'https://ipapi.co/json/'
const BASE_URL_FLAG = 'https://restcountries.com/v2/name'
const preloader = document.getElementById('preloader')

const cardCont = document.getElementById('card-container')

const showPreloader = (show) => {
    if(show === true){
        preloader.style.display = 'block'
    }else{
        preloader.style.display = 'none'
    }
}

const renderFlag = (flag) =>  {
    let div = document.createElement('div')

    let imgFlag = document.createElement('img')
    imgFlag.setAttribute('src', flag)
    imgFlag.classList.add('flag-cont')

    div.append(imgFlag)

    return div
}


const getCountryFlag = async (place, url) => {

    let {country_name: country} = place

    try{
        let response = await fetch(`${url}/${country}`)
        // console.log(response)
        if(response.status === 200){
            let flag = await response.json()
            let flagSrc = renderFlag(flag[0].flag)

            showCountry(place, flagSrc)
        }else{
            throw new Error(`Произошла ошибка\n
            Код ошибки: ${response.status}`)
        }
    }catch (error){
        let errText = error.message
        alert(errText)
    }

}

const showCountry = ({country_name: country, country_capital: capital, currency}, flag) => {

    let card = document.createElement('div')
    card.classList.add('card')

    let countryText = document.createElement('h1')
    countryText.innerText = country
    countryText.classList.add('country-text')

    let capitalText = document.createElement('h2')
    capitalText.innerText = capital
    capitalText.classList.add('capital-text')

    let currencyText = document.createElement('p')
    currencyText.innerText = currency
    currencyText.classList.add('currency-text')

    showPreloader(false)
    card.append(countryText, capitalText, currencyText, flag)
    cardCont.append(card)

}

const getUserIpAddress = async (url) => {

    showPreloader(true)

    try{
        let response = await fetch(url)
        if(response.status === 200){
            let place = await response.json()
            getCountryFlag(place, BASE_URL_FLAG)

        }else{
            throw new Error(`Произошла ошибка\nКод ошибки: ${response.status}`)

        }
    }catch (error){
        let errText = error.message
        alert(errText)
    }

}

getUserIpAddress(BASE_URl)


  