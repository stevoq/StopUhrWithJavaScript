/* Stopp Uhr */
	var rate		= 0;
	var status		= 0;
	var time		= 0;
	var hrOut		= 0;
	var minOut		= 0; 
	var secOut		= 0; 
	var msOut		= 0;

function start() {
	status = 1;
	document.getElementById("startBtn").style.display	= 'none';							//Die Anzeigeeigenschaftssätze oder gibt den Anzeigetyp des Elements.
	document.getElementById("stopBtn").style.display	= 'block';							// none ist unsichtbar und block ist sichtbar
	document.getElementById("recordBtn").style.display	= 'block';
	document.getElementById("restartBtn").style.display = 'none';
	timer();
}

function stop(){																			// zum Stoppen  
	status = 0;
	document.getElementById("stopBtn").style.display	='none';
	document.getElementById("startBtn").style.display	='block';
	document.getElementById("recordBtn").style.display	='none';
	document.getElementById("restartBtn").style.display ='block';
	takeMemo();
}

function restart() {																		// zum Zurueckstellen
	status = 0;
	time = 0;
	document.getElementById("restartBtn").style.display ='none';  
	document.getElementById("recordBtn").style.display	='block'; 
	document.getElementById("recordBtn").disabled		= false;
	document.getElementById("area").innerHTML			= "" ;
	document.getElementById("timerLabel").innerHTML		= "00:00:00:00";
	if (rate >= 1){																		// setzt die Anzahl der Aufnahme beim Drücken des Buttons wieder auf null.
		rate = 0 ;
	}
}
function timer() {																		// Die Funktion, mit der Stopuhr Funktioniert
	if (status == 1) {
		setTimeout(function () {
			time++;
			var hr = Math.floor(time / 100/ 60 /60);
			var min = Math.floor(time / 100 / 60);
			var sec = Math.floor(time / 100);
			var msec = time % 100;
			if (hr < 10){
				hr = "0" + hr;
			}
			 hrOut = hr;
			if (min >= 60){
				min = min % 60 ;
			}
			if (min < 10)
			{
				min = "0" + min;
			}
			 minOut = min;
			if (sec >= 60)
			{
				sec =  sec % 60;
			}
			 secOut = sec;
			 //sec_out = this[sec];
			if (sec < 10)
			{
				sec = "0" + sec;
			}
			 msecOut = msec;
			 // mSec_out = mSec
			document.getElementById("timerLabel").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
			timer();
		}, 10);
	}
}

function takeMemo(){
	var frame		= document.getElementById("area");									// alle Zeilen belegt
	var f			= document.createElement('div');									// Zeile , Eltern Element
	var numberCount = document.createElement('div');									// Node für counter 
	var showCounter = counter();														//Die Varaible hat den Rückgabewert von counter
	var nc			= document.createTextNode(showCounter);								// Element ein String hinzuzufügen 
	var text		= document.createElement('input');									// für text
	var showTime	= document.createElement('div');									// fuer Zeit und Datum
	var dateTime	= takeTime();														//Die Varaible hat den Rückgabewert von der Methode takeTime
	var	t			= document.createTextNode(dateTime);								// Element ein String hinzuzufügen 
	var timerRecord = document.createElement('div');									// für Mommentaufnahme
	var stopTime	= hrOut+":"+minOut+":"+secOut+":"+msecOut;
	var st			= document.createTextNode(stopTime);								// Element ein String hinzuzufügen 

	numberCount.setAttribute('class','info_2');		
	numberCount.appendChild(nc);
	f.appendChild(numberCount);

	text.setAttribute('class', 'info_3');
	text.setAttribute('type', 'text');
	f.appendChild(text);


	showTime.setAttribute('class', 'info');
	showTime.appendChild(t);
	f.appendChild(showTime);

	timerRecord.setAttribute('class', 'info');
	timerRecord.appendChild(st);
	f.appendChild(timerRecord);

	frame.prepend(f);																	//Eltern Element zu Frame hinzufügen
	stopRecord();
}
function counter(){
	rate += 1;	
	return rate;																		// Rückgabewert von counter 
}
function takeTime(){
	var d = new Date();
	return d.toUTCString();																// Rückgabewert von der Methode
}
