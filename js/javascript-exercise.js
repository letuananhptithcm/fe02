BaiTap6();


function BaiTap1() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    var dayOfWeekText = '';
    
    switch (dayOfWeek) {
        case 0:
            dayOfWeekText = 'Chu Nhat';
            break;
        case 1:
            dayOfWeekText = 'Thu Hai';
            break;
        case 2:
            dayOfWeekText = 'Thu Ba';
            break;
        case 3:
            dayOfWeekText = 'Thu Tu';
            break;
        case 4:
            dayOfWeekText = 'Thu Nam';
            break;
        case 5:
            dayOfWeekText = 'Thu Sau';
            break;
        case 6:
            dayOfWeekText = 'Thu Bay';
            break;
    }
    
    function get12Hour(hour24) {
        var kq = "";
        if (hour24 >= 0 && hour24 < 12) {
            kq = hour24 + " AM";
        } else {
            kq = (hour24 != 12 ? hour24 - 12 : 12) + " PM";
        }
        return kq;
    }
    
    console.log("Hom nay la: " 
    + dayOfWeekText 
    + ", gio hien tai la " 
    + get12Hour(date.getHours()) 
    + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function BaiTap2() {
    window.print();
}

function BaiTap3() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10 ) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    console.log(mm + "/" + dd + "/" + yyyy);
}

function BaiTap4(canh1, canh2, canh3) {
    var p = (canh1 + canh2 + canh3) / 2;
    var x = p * (p - canh1) * (p - canh2) * (p - canh3);
    var s = Math.sqrt(x);
    console.log(s);
}

function BaiTap5() {
    for(var i = 2014; i <= 2050; i++) {
        var date = new Date(i, 0, 1);
        if(date.getDay() == 0) {
            console.log(date);
        }
    }
}

function BaiTap6() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);
    var result = prompt("Nhap so:");
    if(randomNumber == result) {
        alert("Doan Dung");
    } else {
        alert("Doan Sai");
    }
}