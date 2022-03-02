console.log("script loader")
var form1 = document.getElementById("form-1");
var content = document.getElementById("resultForm");

content.innerHTML = "<h1>Nodos Actuales</h1>";
var countNode = 0;
/*
var sectionOne = document.getElementById("Contenedor1");
var sectionTwo = document.getElementById("DeFi");
var sectionTree = document.getElementById("AplicacionesDeFi");
var sectionTFour = document.getElementById("RedesDePago");
var sectionFive = document.getElementById("form-1");
var sectionSix = document.getElementById("footer1");
*/



//LIstas Enlazadas


//Metodo para crear nodo
function Node (value) {
	this.value = value
	this.next = null //apuntador
  }
  
  //Crear Lista
  function LinkedList() {
	this.head = null //apuntador al principio
  }

  LinkedList.prototype.append = function(value, current = this.head){
	if(this.head === null){
	  return this.head = new Node(value)
	}
	if(current.next === null){
	  return current.next = new Node(value)
	}
	this.append(value, current.next)
  }

  LinkedList.prototype.prepend = function(value){
	if(this.head === null){
	  return this.head = new Node(value)
	}
	let newNode = new Node(value)
	newNode.next = this.head
	this.head = newNode
  }


  LinkedList.prototype.removeNode = function (value, current = this.head) {
	if(this.head === null){ //No hay inicio
	  return false
	}
  
	if (this.head.value === value){
	  return this.head = this.head.next
	}
  
	if(current.next !== null){
	  if(current.next.value === value){
		return current.next = current.next.next
	  }
	  this.removeNode(value, current.next)
	}
	return false // no se encontro nodo
  }

  //Buscar Nodo
  LinkedList.prototype.findNode = function (value, current = this.head){
	if(this.head === null) {
	  return false
	}
  
	if (current !== null) {
	  if (current.value === value){
		return true
	  } else {
		return this.findNode(value, current.next)
	  }
	}
	return false
  }

//Retorna la cabeza
  LinkedList.prototype.peekNode = function (value) {
	if(this.head === null) {
	  return false
	}
	return this.head
  }
//Tamaño de la lista 
  LinkedList.prototype.length = function (current = this.head, acum = 1) {
	if(this.head === null){
	  return 0
	}
	if (current.next !== null){
	  return this.length(current.next, acum = acum + 1)
	}
	return acum
  }

  list = new LinkedList();
  form1.addEventListener("submit" , function(event){
	
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	addElement(data);
	form1.reset();
	
	
});

function addElement(data){

	content.innerHTML += '<div id= "node'+countNode+'" onclick="clickDeleteElement( value='+Object.values(data)+')">'+Object.values(data)+' <br> </div>';
	countNode = countNode +1;
	list.append(Object.values(data));

}

function clickDeleteElement(event, value){
	
	alert("Se Borro:"+ value);
	list.removeNode(value);
	
}