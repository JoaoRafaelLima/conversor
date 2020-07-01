

function teste (){
    let theme = document.getElementById("customSwitches");
    if (theme.value == "light") {
        theme.value = "dark";
    }else if (theme.value == "dark"){
        theme.value = "light";
    }
    alert(theme.value);
}

function comverter(base){
    let select = document.getElementById("select");
    let option = select.options[select.selectedIndex].value;

    let input = document.getElementById("inp");
    let resultado = "";

    if (option == "2"){      //         binario 
        console.log("if base 2")
        if (base == 8){
            resultado = binarioParaOctal(input.value);
        }
        else if (base == 10) {
            resultado = binarioParaDecimal(input.value);
        }
        else if (base == 16){
            resultado = binarioParaHexadecimal(input.value);
        }
        else{
            resultado = input.value;
        }
    }
    else if (option == "8"){ //         octal

        if (base == 2){
            resultado = octalParaBinario(input.value);
        }
        else if (base == 10){
            resultado = octalParaDeciaml(input.value);
        }
        else if (base == 16){
            resultado = octalParaHexaDecimal(input.value);
        }
        else {
            resultado = input.value;
        }

    }
    else if (option == "10"){ //        decimal 
        if (base == 2){
            resultado = decimalParaBinario(input.value);
        }
        else if (base == 8){
            resultado = decimalParaOctal(input.value);
        }
        else if (base == 16){
            resultado = decimalParaHexaDecimal(input.value);
        }
        else {
            resultado = input.value;
        }
    }
    else if (option == "16"){ //        hexaDecimal
        if (base == 2){
            resultado = hexaDecimalParaBinario(input.value);
        }
        else if (base == 8){
            resultado = hexaDecimalParaOctal(input.value);
        }
        else if (base == 10){
            resultado = hexaDecimalParaDecimal(input.value);
        }
        else {
            resultado = input.value;
        }
    }
    let result = document.getElementById("result");
    result.innerHTML = resultado; 
}


function binarioParaOctal(num){
    
    let lista = num.split("").reverse();
    let cont = 0;
  
    while (cont < 3){
       
        if (lista.length%3 != 0){
            lista.push("0");
    
            
        }else{
            console.log("acabou");
            break;
        }
        cont+=1;
    }
    let lr = lista.reverse();
    let conjunto = "";
    let res = "";

    for(let i = 0; i < lr.length; i++){
        conjunto+=lr[i];
        if (conjunto.length%3 == 0){
            conjunto = binarioParaDecimal(conjunto);
            res+=conjunto;
            conjunto = "";
        }
    }
    console.log(res);
    return res;
}

function binarioParaDecimal(num){
    
    let array = num.split("");
    potencia = array.length -1;
  
    let elevar = 0;
    
    let mult = 0;
    let res = 0;
    
    for (let i = 0; i < array.length; i++){
        inval = parseInt(array[i]);
        elevar = Math.pow(2, potencia);
        mult = parseInt(array[i]) * elevar;
        res+=mult;
        potencia-=1;
    }
    console.log("res: "+res);
    return res;
    
}

function binarioParaHexadecimal(num){
    let lista = num.split("").reverse();
    let cont = 0;
  
    while (cont < 4){
       
        if (lista.length%4 != 0){
            lista.push("0");
    
            
        }else{
            console.log("acabou");
            break;
        }
        cont+=1;
    }
    let lr = lista.reverse();
    let conjunto = "";
    let res = "";

    for(let i = 0; i < lr.length; i++){
        conjunto+=lr[i];
        if (conjunto.length%4 == 0){
            conjunto = binarioParaDecimal(conjunto);
            let cnj_int = parseInt(conjunto);
            if ( cnj_int > 9){
                if (cnj_int == 10){
                    conjunto ="A";
                }
                else if (cnj_int == 11){
                    conjunto ="B";
                }
                else if (cnj_int == 12){
                    conjunto ="C";
                }
                else if (cnj_int == 13){
                    conjunto ="D";
                }
                else if (cnj_int == 14){
                    conjunto ="E";
                }
                else if (cnj_int == 15){
                    conjunto ="F";
                }
            }
            res+=conjunto;
            conjunto = "";
        }
    }
    console.log(res);
    return res;

}

function octalParaBinario(num){
    let lista = num.split("");
    let res = "";
    let binario = "";
    let tmp = "";

    for (let i = 0; i < lista.length; i++) {
        console.log("octal "+lista[i]);
        binario = decimalParaBinario(lista[i]);
        let cont = 0;
        tmp = binario.split("").reverse();
        while (cont < 3) {
            if (tmp.length%3 != 0) {
                tmp.push("0");
            }
            else{
                break;
            }
        }
        binario = tmp.reverse().join("");
        console.log("binario "+binario);
        res+=binario;
    }
    lista = res.split("").reverse();
    let cont = 0;
  
    while (cont < 3){
       
        if (lista.length%3 != 0){
            lista.push("0");
    
            
        }else{
            console.log("acabou");
            break;
        }
        cont+=1;
    }
    return lista.reverse().join("");
}
function octalParaDeciaml(num) {
    let array = num.split("");
    potencia = array.length -1;
  
    let elevar = 0;
    
    let mult = 0;
    let res = 0;
    
    for (let i = 0; i < array.length; i++){
        inval = parseInt(array[i]);
        elevar = Math.pow(8, potencia);
        mult = parseInt(array[i]) * elevar;
        res+=mult;
        potencia-=1;
    }
    console.log("res: "+res);
    return res;

}

function octalParaHexaDecimal(num){
    return binarioParaHexadecimal(octalParaBinario(num));
}


function decimalParaBinario(num){
    let parar = false;
    let binString = "";
    while (!parar) {   // 10-2 = 0
        
        if(num%2==0){
            binString+="0";
        }else{
            binString+="1";
        }
        if (num == 1 || num == 0){
            parar = true;
        }
        num = num/2|0; 
    }
    binString = binString.split("").reverse().join("");
    console.log(binString);
    return binString;
}

function decimalParaOctal(num){
    return binarioParaOctal(decimalParaBinario(num));
}
function decimalParaHexaDecimal(num){
    return binarioParaHexadecimal(decimalParaBinario(num));
}

function hexaDecimalParaBinario(num){
    let lista = num.split("");
    let res = "";
    let temp = "";
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == "A"){
            lista[i] = "10";
        }
        else if (lista[i] == "B"){
            lista[i] = "11";
        }
        else if (lista[i] == "C"){
            lista[i] = "12";
        }
        else if (lista[i] == "D"){
            lista[i] = "13";
        }
        else if (lista[i] == "E"){
            lista[i] = "14";
        }
        else if (lista[i] == "F"){
            lista[i] = "15";
        }
        temp=decimalParaBinario(lista[i]);
        let cont = 0;
        let lista2 = temp.split("").reverse();
        while (cont < 4){
       
            if (lista2.length%4 != 0){
                lista2.push("0");
                
            }else{
                console.log("acabou");
                res+=lista2.reverse().join("");
                break;
            }
            cont+=1;
        }
    }
    return res;

}

function hexaDecimalParaOctal(num){
    return binarioParaOctal(hexaDecimalParaBinario(num));
}
function hexaDecimalParaDecimal(num){
    return binarioParaDecimal(hexaDecimalParaBinario(num));
}