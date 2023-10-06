temp_celsius = document.getElementById("c")
temp_fahrenheit = document.getElementById("fah")
temp_kelvin = document.getElementById("kel")
str =""
temp_celsius.addEventListener ('keypress',function(e){
    str += e.key
    console.log(e)
    console.log("hellow")
    if(str == temp_celsius.value)
    {  
       temp_fahrenheit.value = eval("str*9/5+32")
       temp_kelvin.value = eval("273.15+str")
    }
    else
    {
        temp_fahrenheit.value = eval("temp_celsius.value*9/5+32")
        temp_kelvin.value = eval("temp_celsius.value + 273.15")
        str ="";
        str = temp_celsius
    }

})
// temp_fahrenheit.addEventListener ('keypress',function(e){
//     str += e.key
//     temp_celsius.value = eval(str-32*5/9)
//     temp_kelvin.value = eval("temp_celsius.value + 273.15")
//  })
//  temp_kelvin.addEventListener ('keypress',function(e){
//      str += e.key
//      temp_celsius.value = eval("str - 273.15")
//      temp_fahrenheit.value = eval(temp_celsius.value*9/5+30)

//  })

