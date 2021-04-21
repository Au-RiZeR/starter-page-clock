$(document).ready(function () {
    for (var ic = 0; ic < 10; ic++) {
        setTimeout(() => {
            for (let i = 1; i < 5; i++) {
                resetter(i)
                eval(`n${Math.floor(Math.random()*10)}(${i})`)
            } 
        }, 100*ic);  
    }
    var flicker = 1
    setInterval(() => {
        var hour = moment().format('HH')
        var minute = moment().format('mm')
        var first = hour.split('')[0]
        var second = hour.split('')[1]
        var third = minute.split('')[0]
        var forth = minute.split('')[1]
        for (let i = 1; i < 5; i++) {
            resetter(i)
        }
        eval(`n${first}(1)`)
        eval(`n${second}(2)`)
        eval(`n${third}(3)`)
        eval(`n${forth}(4)`)
        flash()
    }, 1000);
    function flash() {
        for (let i = 1; i < 3; i++) {
            const element = $(`#d${i}`);
            let existingClasses = $(element).attr('class');
            if (flicker == 1) {
                $(element).attr('class', existingClasses + ' lit');
            } else {
                let newClasses = existingClasses.replace(' lit', '');
                $(element).attr('class', newClasses)
            }
        }
        if (flicker == 1) {
            flicker++
        } else {
            flicker--
        }
    }
    function resetter(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            let newClasses = existingClasses.replace(' lit', '');
            $(element).attr('class', newClasses)
        }
    }
    function n0(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 3) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n1(placement) {
        for (let i = 2; i < 7; i += 3) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n2(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 1 || i == 5) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n3(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 1 || i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n4(placement) {
        for (let i = 1; i < 7; i++) {
            if (i == 4 || i == 6) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n5(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 2 || i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n6(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 2) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n7(placement) {
        for (let i = 0; i < 7; i += 2) {
            if (i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n8(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n9(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
});