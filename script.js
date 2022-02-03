$('h1').fadeOut("3000").fadeIn("3000")//vai fazer um apagão no titulo de 3s
$('h1').append(" de Pessoas")//vai acrescentar (de pessoas) no h1

$('#btn').on("click",button)
function button(){
  $('li').css({'color':'blue'})
}//function faz a cor do (li) ficar azul

$('h1').css({'color' : 'blue'})

