var inputEl = document.getElementById("txtInput");
var viTri1El = document.querySelector("#viTri1Input");
var numberArr = [];

function swap() {
    document.getElementById("doicho").style.display = "block";
}

function hienThiKetQua(tongSoChan, countDuong, minArr) {
    document.getElementById("resultEven").innerText = tongSoChan;
    document.getElementById("countEven").innerText = countDuong;
    document.getElementById("minNumber").innerText = minArr;
    document.getElementById("minDuongNum").innerText = minDuong(numberArr);
    document.getElementById("lastEven").innerText = lastEven(numberArr);
    document.getElementById("arrSort").innerText =
        sapXepTang(numberArrSort).join(" -> ");
    document.getElementById("firstSnt").innerText = sntDauTien(numberArr);
    document.getElementById("countNguyen").innerText = demNguyen;
    document.getElementById("swapPos").innerText = switchPlaceOfNumber(
        numberArr,
        viTri1Value,
        viTri2Value
    ).join(">");
    document.getElementById("numberArr1").innerText = mangHienCo;
}

function lastEven(arr) {
    for (var i = arr.length - 1; i >= 0; i--)
        if (arr[i] % 2 == 0) {
            return arr[i];
        }
    return -1;
}

function minDuong(arr) {
    var min = -1;
    for (var i = 0; i < arr.length; i++) {
        if ((min == -1 || min > arr[i]) && arr[i] > 0) {
            min = arr[i];
        }
    }
    return min;
}

function ktsnt(n) {
    if (n < 2) return 0;
    for (var i = 2; i < n; i++) if (n % i == 0) return false;
    return true;
}
function sntDauTien(arr) {
    for (var i = 0; i < arr.length; i++)
        if (ktsnt(arr[i]) == true) return arr[i];
    return -1;
}

function sapXepTang(arr) {
    var result = arr.sort(function (a, b) {
        return a - b;
    });
    return result;
}

function switchPlaceOfNumber(switcharr, viTri1, viTri2) {
    var result = switcharr.slice();
    viTri1Place = switcharr[viTri1 - 1];
    viTri2Place = switcharr[viTri2 - 1];
    result[viTri1 - 1] = viTri2Place;
    result[viTri2 - 1] = viTri1Place;
    return result;
}

function tinhSo() {
    var value = inputEl.value.trim() * 1;
    viTri1Value = document.querySelector("#viTri1Input").value.trim() * 1;
    viTri2Value = document.querySelector("#viTri2Input").value.trim() * 1;
    inputEl.value = "";
    numberArr.push(value);
    minArr = numberArr[0];
    countDuong = 0;
    countAm = 0;
    demNguyen = 0;
    mangHienCo = numberArr.join(" > ");
    tongSoChan = 0;
    numberArrSort = numberArr.slice();
    for (var i = 0; i < numberArr.length; i++) {
        currentValue = numberArr[i];
        //tổng số dương
        if (currentValue > 0) {
            tongSoChan += currentValue;
            countDuong++;
        }
        if (currentValue < 0) {
            countAm++;
        }

        if (minArr > currentValue) {
            minArr = currentValue;
        }

        if (countDuong > countAm) {
            document.getElementById("soSanhSo").innerText = ">";
        } else if (countAm > countDuong) {
            document.getElementById("soSanhSo").innerText = "<";
        } else document.getElementById("soSanhSo").innerText = "=";
        if (currentValue % Math.floor(currentValue) == 0) {
            demNguyen++;
        }
        hienThiKetQua(tongSoChan, countDuong, minArr);
    }
}
