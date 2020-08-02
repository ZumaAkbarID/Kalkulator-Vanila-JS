function ambilHistori() {
    return document.querySelector('.result-his').innerHTML;
}

function cetakHistori(nomor) {
	document.querySelector('.result-his').innerHTML = nomor;
}

function ambilOutput() {
    return document.querySelector('.result').innerHTML;
}

function cetakOutput(nomor) {
	if( nomor == '' ){
		document.querySelector('.result').innerHTML = nomor;
	}
	else{
		document.querySelector('.result').innerHTML = formatNomor(nomor);
	}	
}

function formatNomor(nomor) { 
	if( nomor == "-" ){
		return "";
	}
	let n = Number(nomor);
	let values = n.toLocaleString("en"); // biar muncul koma koma
	return values;
}

function kembalikanNomorFormat(nomor){
	return Number(nomor.replace(/,/g,'')); // menghilangkan koma
}

const operator = document.getElementsByClassName("operator");
for( let i = 0 ; i < operator.length ; i++ ) {
	operator[i].addEventListener('click',function() {
		if( this.id == "kabeh" ) {
			cetakHistori("");
			cetakOutput("");
		}
		else if( this.id == "sijiwae" ) {
			let output = kembalikanNomorFormat(ambilOutput()).toString();
			if( output ) {// misal output ono value
				outputs = output.substr(0,output.length-1);
				cetakOutput(outputs);
			}
		}
		else{
			let output = ambilOutput();
			let histori = ambilHistori();
			if( output == "" && histori != "" ) {
				if(isNaN(histori [histori.length-1] )) {
					histori = histori.substr(0,histori.length-1);
				}
			}
			if( output != "" || histori != "" ) {
				output = output == "" ? output : kembalikanNomorFormat(output);
				histori = histori+output;
				if( this.id == "=" ) {
					let result = eval ( histori );
					cetakOutput(result);
					cetakHistori("");
				} else {
					histori = histori + this.id;
					cetakHistori(histori);
					cetakOutput("");
				}
			}
		}
		
	});
}
const nomor = document.getElementsByClassName("nomor");
for(let i = 0; i < nomor.length; i++){
	nomor[i].addEventListener('click', function() {
		let output = kembalikanNomorFormat(ambilOutput());
		if(output != NaN ) { //misal output nomor
			output = output + this.id;
			cetakOutput(output);
		}
	});
}

const hewahunja = document.querySelector('.by');
// YEN NAMAKU MOK GANTI, TAK SET CONTAINER DISPLAY NONE, TAPI FITUR IKI SOON YAA