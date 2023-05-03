input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 170)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.East)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 10)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
})
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.mouse)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
        basic.pause(100)
    } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.cat)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 10)
        basic.pause(100)
    } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.dog)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 45)
        basic.pause(100)
    } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.grape)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 135)
        basic.pause(100)
    } else {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 170)
        basic.pause(100)
    }
})
