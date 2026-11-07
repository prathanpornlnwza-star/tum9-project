function cs() {
    document.querySelector('.bg').style.display = 'none';
    console.log('close')
}


function rs() {
    let birthDate = document.getElementById('din').value;
    // const birthDate = document.getElementById('din').value;

    if (!birthDate) {
        alert("โปรดใส่วันเกิดของคุณ");
        return;
    }

    const dateObj = new Date(birthDate);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    console.log("วันที่เลือกคือ: " + birthDate);
    console.log("เดือน: " + month);
    console.log("วัน: " + day);


    let zodiac = "";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = "ราศีเมษ ♈";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = "ราศีพฤษภ ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = "ราศีเมถุน ♊";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = "ราศีกรกฎ ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = "ราศีสิงห์ ♌";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = "ราศีกันย์ ♍";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = "ราศีตุลย์ ♎";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = "ราศีพิจิก ♏";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = "ราศีธนู ♐";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = "ราศีมังกร ♑";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = "ราศีกุมภ์ ♒";
    } else {
        zodiac = "ราศีมีน ♓";
    }
    console.log("ราศีของคุณคือ: " + zodiac);
}

function selectCategory(categoryName, buttonElement) {
    selectedCategory = categoryName;
}