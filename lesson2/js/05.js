const height = prompt("Enter height or your triangle")
for(let i = 1; i <= height; i++){
    for(let j = 1; j<=i; j++){
        document.write(" *")
    }
    document.write("<br />")
}