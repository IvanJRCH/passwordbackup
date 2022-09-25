/* 
Programado por: Ivan Jesus Rojas Chaparro. 
*/

function encriptar(texto,clave) {
	//codePointAt(0);
	let hash = sha256(clave);
	let NumHash = [];
	let MaximaRedundancia = 0;
	let textoArray = [];
	let IndiceHash = 0;
	let OfucadorArray = []; // ofuscador al azar para ocultar la ovbiedad del cambio al comparar dos versiones diferentes
	let IndiceOfucadorArray = 0;
	let r = [];
	for(var i = 0; i < hash.length; i++) { NumHash.push( hash[i].codePointAt(0) ); if(MaximaRedundancia<250) MaximaRedundancia += hash[i].codePointAt(0); }
	
	//alert(MaximaRedundancia);
	// creo un array de puro contenido inutil para el usuario pero util para el algoritmo porque oculta mas la info
	for(var i = 0; i < MaximaRedundancia; i++) {
		let tm = Math.floor(Math.random()*1000);
		textoArray.push( tm );
		OfucadorArray.push( tm );
	}
	//console.log(OfucadorArray);
	
	textoArray.push( texto.length + textoArray[0] + textoArray[1] ); // guardo la longitud de la info para no perderme buscandola
	//alert(texto.length);
	
	for(var i = 0; i < texto.length; i++) textoArray.push( texto[i].codePointAt(0) );
	for(var i = MaximaRedundancia+1; i < textoArray.length; i++) {
		//let vv = textoArray[i];
		textoArray[i] += NumHash[ IndiceHash ] + OfucadorArray[ IndiceOfucadorArray ] ; // ofuscar
		//console.log( vv+' '+i+'v ' + NumHash[ IndiceHash ]+' + '+OfucadorArray[ IndiceOfucadorArray ]+ ' = '+textoArray[i] );
		IndiceHash++;
		IndiceOfucadorArray++;
		if( IndiceHash > NumHash.length-1 ) IndiceHash = 0;
		if( IndiceOfucadorArray > OfucadorArray.length-1 ) IndiceOfucadorArray = 0;
	}
	
	// coloco redundancia al final tambien Jajajajajaja para que sea BIEN COMPLICADO Jajajajajaj
	let m = Math.floor(Math.random()*100);
	for(var i = 0; i < m; i++) {
		textoArray.push( Math.floor(Math.random()*1000) );
	}

	return textoArray.join(",");
}

function desencriptar(texto,clave) {
	//  String.fromCodePoint(c-s);
	let hash = sha256(clave);
	let NumHash = [];
	let MaximaRedundancia = 0;
	let textoArray = texto.split(",");
	let IndiceHash = 0;
	let OfucadorArray = []; // ofuscador al azar para ocultar la ovbiedad del cambio al comparar dos versiones diferentes
	let IndiceOfucadorArray = 0;
	let r = "";
	for(var i = 0; i < hash.length; i++) { NumHash.push( hash[i].codePointAt(0) ); if(MaximaRedundancia<250) MaximaRedundancia += hash[i].codePointAt(0); }
	
	//alert( MaximaRedundancia );
	let longitudDeLaInfo = parseInt(textoArray[ MaximaRedundancia ]) -  parseInt(textoArray[0]) - parseInt(textoArray[1]);
	let maxX = (MaximaRedundancia+1+longitudDeLaInfo);
	
	// recolecto todos los numeros al azar del principio
	for(var i = 0; i < MaximaRedundancia; i++) {
		OfucadorArray.push( textoArray[i] );
	}
	//console.log(OfucadorArray);
	//alert(longitudDeLaInfo);
	
	for(var i = MaximaRedundancia+1; i < maxX; i++) {
		//let vv = textoArray[i];
		textoArray[i] -= (NumHash[ IndiceHash ] + parseInt(OfucadorArray[ IndiceOfucadorArray ]));
		//console.log( vv+' '+i+'v ' +typeof NumHash[ IndiceHash ]+' + '+parseInt(OfucadorArray[ IndiceOfucadorArray ]) + ' A= '+textoArray[i] );
		r += String.fromCodePoint(textoArray[i]);
		//alert(i + " < "+ maxX);
		IndiceHash++;
		IndiceOfucadorArray++;
		if( IndiceHash > NumHash.length-1 ) IndiceHash = 0;
		if( IndiceOfucadorArray > OfucadorArray.length-1 ) IndiceOfucadorArray = 0;
	}
	
	return r;
}
