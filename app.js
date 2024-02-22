
const formulario =document.getElementById('inicioSesion')
const UserName =document.getElementById('inputUser')
const UserPass =document.getElementById('inputPass')
const successBox = document.getElementById('userBox')
const userBox = document.getElementById('userBox')

let users = [
    {user: 'Juana', pass: '1234'},
    {user:'Pedro',  pass: '5678'}
]

//paso 2. Creacion de la funcion 
function validar(e){
    e.preventDefault()
   /// Generar un cliclo for para recorrer e imprimir en consola los elementos del array user
    for (let i=0; i < users.length; i++){

        if(UserName.value == users[i].user && UserPass.value == users[i].pass){
           console.log('Bienvenido ' + users[i].user + ' a tu cuenta')
           successBox.style.display = 'flex'
           userBox.style.textTransform + 'capitalize'
           formulario.style.display = 'none'
            return 
        }
    }
}


//paso 3. Evento
formulario.addEventListener('click', validar);


/////////////////////////


function Aqua(){
    console.log('Aqua')
    ven1=Number(prompt('se registra tu venta, cuantos productos son?'))
    console.log('productos vendidos: ' + ven1)
    console.log('total de venta '+ ven1*200 + '.00usd' )
  }

function Emoción(){
    console.log('Emoción')
    ven2=Number(prompt('se registra tu venta, cuantos productos son?'))
    console.log('productos vendidos: ' + ven2)
   console.log('total de venta '+ ven2*180 + '.00usd' )
  }

function Alegría(){
    console.log('Alegría')
    ven3=Number(prompt('se registra tu venta, cuantos productos son?'))
    console.log('productos vendidos: ' + ven3)
    console.log('total de venta '+ ven3*160 + '.00usd' )
  }

  function Frescura(){
    console.log('Frescura')
    ven4=Number(prompt('se registra tu venta, cuantos productos son?'))
    console.log('productos vendidos: ' + ven4)
    console.log('total de venta '+ ven4*150 + '.00usd' )
  }

  function fin(){
    console.log( 'total de venta: ' + (ven1+ven2+ven3+ven4 )+ ' productos')
    console.log('total de usd ' + (ven1*200+ven2*180+ven3*160+ven4*150 )+'USD' )
  }

  