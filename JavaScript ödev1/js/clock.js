
// İsim bilgisi alınıp ekrana yazdırıldı.
let name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName")
myName.innerHTML = name

// Saat ve Gün bilgisi alınıp ekrana yazdırıldı.
var myClock = document.querySelector("#myClock")
var tarih=new Date();
    var yil=tarih.getFullYear();
    var ay=tarih.getMonth();
    var gun=tarih.getDay();
    var saat=tarih.getHours();
    var dakika=tarih.getMinutes();
    var saniye=tarih.getSeconds();	

var gunadi;
if(gun == 1){
    gunadi = "Pazartesi"
}
else if(gun == 2){
    gunadi = "Salı"
}
else if(gun == 3){
    gunadi = "Çarşamba"
}
else if(gun == 4){
    gunadi = "Perşembe"
}
else if(gun == 5){
    gunadi = "Cuma"
}
else if(gun == 6){
    gunadi = "Cumartesi"
}
else if(gun == 0){
    gunadi = "Pazar"
}

myClock.innerHTML = (saat + ":" + dakika + ":" +saniye + " " + gunadi)




