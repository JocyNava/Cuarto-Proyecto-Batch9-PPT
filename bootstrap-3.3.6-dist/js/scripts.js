



function resultado(){
    var jugar = document.querySelector('#jugador').value;
    var compu = "Piedra";
    if (jugar == compu) {
        alert("empate");
    }else {
        alert("hey");
    };
};



/*var radioButTrat = document.getElementsByName("nameUtilizado");
for (var i=0; i<radioButTrat.length; i++) {
if (radioButTrat[i].checked == true) { … código a ejecutar }
}



//Defino mi función
$(function() {

//Indico que se active al clickear en un radiobuton

    $('input[type="radio"]').click(function(){

//Guardo el valor de el radio button seleccionado en la variable "elemento"

        var elemento = $('input:radio[name=elemento]:checked').val();

//Creo una nueva variable "aleatorio" que tendrá un valor entre 1 y 5

        var aleatorio=Math.floor(Math.random() * 5) + 1;

//Segun el valor de "aleatorio" le asigno una opción

        if (aleatorio == 1) elemento_contra = "piedra";
        else if (aleatorio == 2) elemento_contra = "papel";
        else if (aleatorio == 3) elemento_contra = "tijera";
        else if (aleatorio == 4) elemento_contra = "lagarto";
        else elemento_contra = "spock";
        var ganador;

//Compruebo si ambas opciones (elemento y elemento_contra) son iguales y si esto ocurre digo que ganador es empate

        if (elemento == elemento_contra) ganador = "empate";

//Si esto no pasa y la opción de usuario es gana a la del ordenador digo que igualo ganador = gana usuario

        else if ((elemento == "piedra" && ( elemento_contra == "tijera" || elemento_contra == "lagarto" )) || (elemento == "lagarto" && ( elemento_contra == "spock" || elemento_contra == "papel" )) || (elemento == "spock" && ( elemento_contra == "tijera" || elemento_contra == "piedra" )) || (elemento == "papel" && ( elemento_contra == "piedra" || elemento_contra == "spock" )) || (elemento == "tijera" && ( elemento_contra == "papel" || elemento_contra == "lagarto" ))) {
            ganador = "gana usuario";

// Por ultimo me sumo un punto

            var actual = parseInt($('.usuario').html());
            actual += parseInt(1);
            $('.usuario').html(actual);
        }

// Si ninguna de las dos cosas anteriores pasan, entonces usuario a perdido, entonces igualo ganador = gana ordenador

        else {
            ganador = "gana ordenador";
// y claro le sumo un punto al ordenador.
            var actual = parseInt($('.ordenador').html());
            actual += parseInt(1);
            $('.ordenador').html(actual);
        }

//Finalmente genero un html con la descripción de la partida valiéndome de las variables que ya tengo y solo agregándole alguna texto que siempre sera el mismo

        $('#resultado').html("Usuario juega " + elemento + " - Ordenador juega " + elemento_contra + "<br> El resultado es " + ganador);
        
    });
});*/
