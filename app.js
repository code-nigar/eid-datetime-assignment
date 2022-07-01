function theFunc() {
  let currentTime = new Date().getTime();
  let EidTime = new Date("7/10/2022").getTime();
  console.log(currentTime + "-" + EidTime + " = " + (EidTime - currentTime));

  let remSec, remMin, remHr, remDay;

  remSec = Math.round(((EidTime - currentTime) / 1000) % 60);
  remMin = Math.floor(((EidTime - currentTime) / (60 * 1000)) % 60);
  remHr = Math.floor(((EidTime - currentTime) / (60 * 60 * 1000)) % 24);
  remDay = Math.floor((EidTime - currentTime) / (24 * 60 * 60 * 1000));
  console.log(
    remSec + "s \n" + remMin + "m \n" + remHr + "h \n" + remDay + "d"
  );

  document.getElementById("day-block").innerHTML = remDay;
  document.getElementById("hr-block").innerHTML = remHr;
  document.getElementById("min-block").innerHTML = remMin;
  document.getElementById("sec-block").innerHTML = remSec;
}

setInterval(theFunc,1000);
