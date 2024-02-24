const dateTime = (30437.5 / 365)
var dayCount = 0
var startPerformance;

onmessage = (event) =>{
    startPerformance = performance.now()

    dayCount = event.data + 1

    console.log(dateTime - (performance.now() - startPerformance))

    setTimeout(postMessage(dayCount), dateTime - (performance.now() - startPerformance))
}
