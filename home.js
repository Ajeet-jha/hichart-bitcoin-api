(function () {
    var newData = []
    fetch(`https://blockchain.info/ticker`)
        .then(resp => resp.json())
        .then(data => hichart(data));

    function hichart(data) {
        Object.keys(data).forEach(value => {
            newData.push({
                "name": value,
                "data": [data[value].last, data[value].buy]
            })
        });
        higchart(newData);
    }

    function higchart(newData) {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Market Prices and exchanges rates'
            },
            subtitle: {
                text: 'https://blockchain.info/ticker'
            },
            xAxis: {
                categories: [
                    'LAST',
                    'BUY'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'most recent market price'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: newData
        });
    }

})()









































// setInterval(() => {
//     var link_login = document.getElementsByClassName("login-link")[0];
//     if (link_login != undefined && link_login != null) {
//         console.log(1)
//         var check_login = link_login.innerText;
//     }
//     if (check_login != "Login") {
//         console.log(2)
//         var css = `#nv_js-box_14026{
//                        display : none;
//                        }
//                        #nv_js-modal-overlay_14026{
//                         visibility :hidden
//                       }`;
//         var style = document.createElement('style');
//         style.type = "text/css";
//         if (style.styleSheet) {
//             console.log(3)
//             style.styleSheet.cssText = css;
//         } else {
//             console.log(4)
//             style.appendChild(document.createTextNode(css));
//         }
//         document.getElementsByTagName('head')[0].appendChild(style);

//     } else {
//         console.log(5)
//         if (style) {
//             console.log(6)
//             document.getElementsByTagName('head')[0].removeChild(style);
//         }
//     }
// console.log(7)
// }, 3000);

// check for 20sec limit
// var count = 0;
// var banner = setInterval(customBanner, 1000);

// function customBanner() {
//     while (count < 20000) {
//         var link_login = document.getElementsByClassName("login-link")[0];
//         if (link_login != undefined && link_login != null) {
//             console.log(1)
//             var check_login = link_login.innerText;
//         }
//         if (check_login != "Login") {
//             console.log(2)
//             var css = `#nv_js-box_14026{
//                        display : none;
//                        }
//                        #nv_js-modal-overlay_14026{
//                         visibility :hidden
//                       }`;
//             var style = document.createElement('style');
//             style.type = "text/css";
//             if (style.styleSheet) {
//                 console.log(3)
//                 style.styleSheet.cssText = css;
//             } else {
//                 console.log(4)
//                 style.appendChild(document.createTextNode(css));
//             }
//             document.getElementsByTagName('head')[0].appendChild(style);
//             clearInterval(banner)
//         }
//         count++;
//     }
// }