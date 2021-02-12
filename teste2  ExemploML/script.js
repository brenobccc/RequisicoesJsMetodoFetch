const fetchMl = () => {

    values = prompt("insira os valores aqui ");//Leio os valores e armazeno na var values
	//exemplo original,  const url = 'http://localhost:5000/predict?features=[2.5, 1.2, 3.4, 4.5]'
	const url = 'http://localhost:5000/predict?features=['+values+']'//URL da API junto com os valores para requisição

	//Método Fetch
	fetch(url)//mando por parametro minha url da API
	   .then(response => response.json())//resposta da promisse convertida em JSON
	   .then(n => {//visualização no console 
	   	console.log(n)
	   }) 
}

fetchMl()//Chamando a função