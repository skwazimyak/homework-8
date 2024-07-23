let age = prompt("Enter your age")
if(age < 12){
    alert("Дитина")
}
else if(12 <= age && age < 18){
    alert("Підліток")
}
else if(18 <= age && age < 60){
    alert("Дорослий")
}
else{
    alert("Пенсіонер")
}