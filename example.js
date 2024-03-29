(function () {
    $.ajax({
        url: "example.json",//向本地的json文件发送请求
        type: "GET",
        success: function (data) {
            pager.init(1);
            pager.setLayout('pagerDiv', data, 100, function () {
                $('#tbody').html('');
                for (var i = pager.start() - 1; i < pager.end(); i++) {
                    if (data[i]) {
                        $('#tbody').append('<tr><td>' + data[i].BookId + '</td>' + '<td>'+ data[i].ISBN+ '</td>' + '<td>'+data[i].Price + '</td>'+ '<td>'+data[i].Location + '</td>'+  '<td>'+data[i].BookName + '</td>'+  '</td>'+data[i].Author + '</td>'+ '<td>'+data[i].Press + '</td>'+'<td>'+data[i].Author + '</td>'+'<td>'+data[i].Description + '</td>'+'<td>'+data[i].PublishYear + '</td>'+'<td>'+data[i].TextLanguage + '</td>'+'<td>'+data[i].CopyNumbers +'</td></tr>');
                    }
                }
            });
        },
        error: function () {
            //请求失败之后做的事情
        }
    })
})();

// var jsonData = [
//     { 'id': 1, 'name': 'test1' },
//     { 'id': 2, 'name': 'test2' },
//     { 'id': 3, 'name': 'test3' },
//     { 'id': 4, 'name': 'test4' },
//     { 'id': 5, 'name': 'test5' },
//     { 'id': 6, 'name': 'test6' },
//     { 'id': 7, 'name': 'test7' },
//     { 'id': 8, 'name': 'test8' },
//     { 'id': 9, 'name': 'test9' },
//     { 'id': 10, 'name': 'test10' },
//     { 'id': 11, 'name': 'test11' },
//     { 'id': 12, 'name': 'test12' },
//     { 'id': 13, 'name': 'test13' },
//     { 'id': 14, 'name': 'test14' },
//     { 'id': 15, 'name': 'test15' },
//     { 'id': 16, 'name': 'test16' },
//     { 'id': 17, 'name': 'test17' },
//     { 'id': 18, 'name': 'test18' },
//     { 'id': 19, 'name': 'test19' },
//     { 'id': 20, 'name': 'test20' },
//     { 'id': 21, 'name': 'test21' },
//     { 'id': 22, 'name': 'test22' },
//     { 'id': 23, 'name': 'test23' },
//     { 'id': 24, 'name': 'test24' },
//     { 'id': 25, 'name': 'test25' },
//     { 'id': 26, 'name': 'test26' },
//     { 'id': 27, 'name': 'test27' },
//     { 'id': 28, 'name': 'test28' },
//     { 'id': 29, 'name': 'test29' },
//     { 'id': 30, 'name': 'test30' },
//     { 'id': 31, 'name': 'test31' },
//     { 'id': 32, 'name': 'test32' },
//     { 'id': 33, 'name': 'test33' },
//     { 'id': 34, 'name': 'test34' },
//     { 'id': 35, 'name': 'test35' },
//     { 'id': 36, 'name': 'test36' },
//     { 'id': 37, 'name': 'test37' },
//     { 'id': 38, 'name': 'test38' },
//     { 'id': 39, 'name': 'test39' },
//     { 'id': 40, 'name': 'test40' },
//     { 'id': 41, 'name': 'test41' },
//     { 'id': 42, 'name': 'test42' },
//     { 'id': 43, 'name': 'test43' },
//     { 'id': 44, 'name': 'test44' },
//     { 'id': 45, 'name': 'test45' },
//     { 'id': 46, 'name': 'test46' },
//     { 'id': 47, 'name': 'test47' },
//     { 'id': 48, 'name': 'test48' },
//     { 'id': 49, 'name': 'test49' },
//     { 'id': 50, 'name': 'test50' },
//     { 'id': 51, 'name': 'test51' },
//     { 'id': 52, 'name': 'test52' },
//     { 'id': 53, 'name': 'test53' },
//     { 'id': 54, 'name': 'test54' },
//     { 'id': 55, 'name': 'test55' },
//     { 'id': 56, 'name': 'test56' },
//     { 'id': 57, 'name': 'test57' },
//     { 'id': 58, 'name': 'test58' },
//     { 'id': 59, 'name': 'test59' },
//     { 'id': 60, 'name': 'test60' },
//     { 'id': 61, 'name': 'test61' },
//     { 'id': 62, 'name': 'test62' },
//     { 'id': 63, 'name': 'test63' },
//     { 'id': 64, 'name': 'test64' },
//     { 'id': 65, 'name': 'test65' },
//     { 'id': 66, 'name': 'test66' },
//     { 'id': 67, 'name': 'test67' },
//     { 'id': 68, 'name': 'test68' },
//     { 'id': 69, 'name': 'test69' },
//     { 'id': 70, 'name': 'test70' },
//     { 'id': 71, 'name': 'test71' },
//     { 'id': 72, 'name': 'test72' },
//     { 'id': 73, 'name': 'test73' },
//     { 'id': 74, 'name': 'test74' },
//     { 'id': 75, 'name': 'test75' },
//     { 'id': 76, 'name': 'test76' },
//     { 'id': 77, 'name': 'test77' },
//     { 'id': 78, 'name': 'test78' },
//     { 'id': 79, 'name': 'test79' },
//     { 'id': 80, 'name': 'test80' },
//     { 'id': 81, 'name': 'test81' },
//     { 'id': 82, 'name': 'test82' },
//     { 'id': 83, 'name': 'test83' },
//     { 'id': 84, 'name': 'test84' },
//     { 'id': 85, 'name': 'test85' },
//     { 'id': 86, 'name': 'test86' },
//     { 'id': 87, 'name': 'test87' },
//     { 'id': 88, 'name': 'test88' },
//     { 'id': 89, 'name': 'test89' },
//     { 'id': 90, 'name': 'test90' },
//     { 'id': 91, 'name': 'test91' },
//     { 'id': 92, 'name': 'test92' },
//     { 'id': 93, 'name': 'test93' },
//     { 'id': 94, 'name': 'test94' },
//     { 'id': 95, 'name': 'test95' },
//     { 'id': 96, 'name': 'test96' }
// ];
// pager.init(1);
// pager.setLayout('pagerDiv', jsonData, 100, function () {
//     $('#tbody').html('');
//     for (var i = pager.start() - 1; i < pager.end(); i++) {
//         if (jsonData[i]) {
//             $('#tbody').append('<tr><td>' + jsonData[i].id + '</td><td>' + jsonData[i].name + '</td</tr>');
//         }
//     }
// });