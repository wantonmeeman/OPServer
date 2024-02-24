$(document).ready(function () {
    /*creates a new rotate function in jquery*/
    jQuery.fn.animateRotate = function (degrees, duration) {

        $(this).animate(
            { deg: degrees },
            {
                duration: duration,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                },
                easing: "linear"
            }
        );

        return $(this);
    };
    /*Worker that handles the iteration of dates and animation prevents chrome 
    throttling when focus is switched to another tab*/
    const planetWorker = new Worker("../logic/planetWorker.js");

    var dayCounter = $("#dayCount")
    var yearCounter = $("#yearCount")

    var mercury = $("#mercuryFulcrum")
    var venus = $("#venusFulcrum")
    var earth = $("#earthFulcrum")
    var mars = $("#marsFulcrum")
    var jupiter = $("#jupiterFulcrum")
    var saturn = $("#saturnFulcrum")
    var uranus = $("#uranusFulcrum")
    var neptune = $("#neptuneFulcrum")

    const dateTime = (30437.5 / 365) //Time it takes for 1 day

    function calculateDegree(dayCount, timeForOneFullRotation) {
        return (
            (dayCount * /*Day Iterator */
                (360 / timeForOneFullRotation)/*Amount of degrees per millisecond, One rotation divided by time it takes for that rotation*/
                * dateTime) /*How long a day takes*/)
    }

    var iterateDay = function (dayCount) {

        //Chrome throttling bypass
        //https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

        planetWorker.postMessage(dayCount)

        planetWorker.onmessage = (event) => {
            dayCount = event.data

            yearCounter.text(Math.floor(dayCount / 365))

            dayCounter.text(dayCount % 365)
            console.log(dayCount)

            if (!(dayCount % 5)) {//Planets only update once every 5 days
                //Rotate planets

                //Calculate the amount of degrees the planet rotates everyday
                mercury.animateRotate(calculateDegree(dayCount, 7333.333333), dateTime * 5)
                venus.animateRotate(calculateDegree(dayCount, 18750), dateTime * 5)
                earth.animateRotate(calculateDegree(dayCount, 30437.5), dateTime * 5)
                mars.animateRotate(calculateDegree(dayCount, 57244.166666666665), dateTime * 5)
                jupiter.animateRotate(calculateDegree(dayCount, 361083.3333333333), dateTime * 5)
                saturn.animateRotate(calculateDegree(dayCount, 894862.5000000001), dateTime * 5)
                uranus.animateRotate(calculateDegree(dayCount, 2557250), dateTime * 5)
                neptune.animateRotate(calculateDegree(dayCount, 5015833.333333333), dateTime * 5)
                console.log("Animate Planets")
            }

            iterateDay(dayCount)
        }
    }

    iterateDay(0)
});