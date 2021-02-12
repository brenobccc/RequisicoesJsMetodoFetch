function fetchMl(){
	var valores;
	valores = document.getElementById('valor').value;//Leio os valores e armazeno na var values
	//exemplo original,  const url = 'http://localhost:5000/predict?features=[2.5, 1.2, 3.4, 4.5]'
	const url = 'http://localhost:5000/predict?features=['+valores+']'//URL da API junto com os valores para requisição

	//Método Fetch
	fetch(url)//mando por parametro minha url da API
	   .then(response => response.json())//resposta da promisse convertida em JSON
	   .then(n => {//visualização no console 
		//console.log(n.predict)
		//console.log(typeof(n))
		document.getElementById('result').innerHTML = n.predict;
	   }) 
}

/*
function capturar(){
	var capturando="";
	capturando = document.getElementById('valor').value;
	document.getElementById('result').innerHTML = capturando
}*/
//fetchMl()//Chamando a função