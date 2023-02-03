serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
    serial.writeValue("CO2", Math.round(COZIR.Co2()))
    serial.writeValue("Temp", Math.round(COZIR.temperature()))
    serial.writeValue("HR", Math.round(COZIR.relativeHumidity()))
})
