const rWNumbers = document.querySelectorAll(".rw-number");
let rwNumber = 0;

// Pętla obraca numery o 9.73 stopnii z 360 stopni koła

for (let i = 0; i < rWNumbers.length; i++) {
  rWNumbers[i].style.transform = `rotate(${(rwNumber*360/37)}deg) translateX(-50%)`;
  rwNumber++;
}