let aqi_out = document.getElementById("aqi-output")
let result = document.getElementById("result")

let danger = "#ED7A3E"
let accept = "#D8D942"
let good = "#51AF0D"

let concern, effect, bg, color

function checkAirQuality(aqi) {
    aqi_out.innerHTML = aqi

    if (aqi > 100) {
        concern = "Unhealthy for sensitive groups"
        effect = "Generable publics not likely affected"
        bg = danger
        color = "#fff"
    } else if (aqi > 50) {
        concern = "Moderate"
        effect = "Acceptable quality"
        bg = accept
        color = " #000"
    }
    else {
        concern = "Good"
        effect = "Little or no risk"
        bg = good
        color = "#fff"
    }

    result.innerHTML = `<h4>Level of health concern: ${concern}</h4>
                        <h4>Level of health effect: ${effect}</h4>`

    document.body.style.backgroundColor = bg
    document.body.style.color = color
}