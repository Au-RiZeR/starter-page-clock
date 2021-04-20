$(document).ready(function () {
    setInterval(() => {
        var hour = moment().format('H')
        var minute = moment().format('m')
        var first = hour.split('')[0]
        var second = hour.split('')[1]
        var third = minute.split('')[0]
        var forth = minute.split('')[1]
        // console.log(first)
        // console.log(second)
        // console.log(third)
        // console.log(forth)
    }, 1000);
    var flip = 1
    function resetter(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            // console.log(existingClasses)
            let newClasses = existingClasses.replace(' lit', '');
            
            $(element).attr('class', newClasses)
            
        }
    }

function seizure1() {
    document.body.style.backgroundColor = 'white'
    flip++
}

function seizure2() {  
    document.body.style.backgroundColor = 'black'
    flip--
}

setInterval(() => {
    n8(1)
    n8(2)
    n8(3)
    n8(4)
    eval(    `seizure${flip}()`    )
}, 100);
    function n8(placement) {
        // $(`#number${placement} > div`).attr('class', 'lit')
        // console.log($(`#number${placement} > div`)[0])
            for (let i = 0; i < 7; i++) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');

            }
            setTimeout(() => {
                resetter(placement)
                // console.log($(`#number${placement} > div`)[i])
            }, 50);
        

    }


});