$(document).ready(function () {
    $('#fir').click(function () {
        let num1 = $('#num1').val();
        let num2 = $('#num2').val();
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
            $('<p></p>').text('입력값의 범위를 확인하고 다시 입력하세요')
                .appendTo('#result1');
            return;
        }
        let powerArr = [];
        for (let i = num1; i <= num2; i++)
            powerArr.push(2 ** i);
        let resultStr = '';

        for (let i = 0; i < powerArr.length; i++) {
            if ((i + 1) % 5 == 0) {
                resultStr += powerArr[i] + '<br>';
            }
            else {
                resultStr += powerArr[i];
                if (i < powerArr.length - 1) {
                    resultStr += ', ';
                }
            }
        }
        $('#result1').html(resultStr);
    });

    $('#sec').click(function () {
        let sentence = $('#sentence').val();
        let search = $('#search').val();
        let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
        let words = noPunct.split(' ');
        let count = 0;
        for (let word of words) {
            if (word == search)
                count++;
        }
        $('#result2').text(count + '번');
    });

    $('#tir').click(function () {
        let price = $('#price').val();
        let priceStrArr = price.split(';');

        let priceValArr = [];
        for (let element of priceStrArr)
            priceValArr.push(Number(element));
        let newPrices = priceStrArr.map(x => parseInt(x));

        newPrices.sort((a, b) => b - a);
        let resultStr = '';
        for (let element of newPrices)
            resultStr += element + ' ';

        $('#result3').html(resultStr);
    })

    $('#for').ready(function () {
        const twoDigit = function (num) {
            return (num < 10) ? ('0' + num) : String(num);
        }
        const myDateTime = function (date) {
            return `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())} ` +
                `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
        }
        setInterval(function () {
            const now = new Date();
            const week = '일월화수목금토'.split('');
            let dateStr = myDateTime(now).substring(0, 9);
            dateStr += '(' + week[now.getDay()] + ')';
            const timeStr = myDateTime(now).substring(10);
            $('#date').html(dateStr)
            $('#time').html(timeStr)
        }, 1000);

    });
})

