$(document).ready(function () {
    let planets = $('.planet')

    let planetTrails = $('.planetTrail')

    let positionArr = new Array($('.planet').length).fill(0)

    setInterval(() => {
        for (let x = 0; x < planets.length; x++) {

            let selectedPlanet = $(planets[x])

            let selectedPlanetTrail = $(planetTrails[x])

            let planetHeight = Number(selectedPlanet.css("top").split("px")[0])

            let planetWidth = Number(selectedPlanet.css("left").split("px")[0])

            let trailRadius = Number(selectedPlanetTrail.css("height").split("px")[0]) / 2

            switch (positionArr[x]) {
                case 0://bottom
                    $(planets[x]).css("left", (planetWidth + trailRadius) + "px")

                    $(planets[x]).css("top", (planetHeight - trailRadius) + "px")
                    break;
                case 1://middle right
                    $(planets[x]).css("left", (planetWidth - trailRadius) + "px")

                    $(planets[x]).css("top", (planetHeight - trailRadius) + "px")
                    break;
                case 2://top
                    $(planets[x]).css("left", (planetWidth - trailRadius) + "px")

                    $(planets[x]).css("top", (planetHeight + trailRadius) + "px")
                    break;
                case 3://middle left
                    $(planets[x]).css("left", (planetWidth + trailRadius) + "px")

                    $(planets[x]).css("top", (planetHeight + trailRadius) + "px")

                    positionArr[x] = -1
                    //If we set to -1, then ++, we get 0
                    break;
            }

            positionArr[x]++
        }
    }, 1000)
    // planets[0].css({
    //     left: 
    // })
})