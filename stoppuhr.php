<?php ?>
<html>
	<head>
		<title>stop watch</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<script type="text/javascript" src="stoppuhr.js"></script>
		<link rel="stylesheet" type="text/css" href="stoppuhr.css">
	</head>
	<body>
		<div id="container" >
			<div id="content">
				<div id="imageFeld">
				<img id="img" src="http://stoppuhr-online.chronme.com/multi/images/stoppuhr_online.jpg" alt="stopuhr">
				</div>
				<div>
					<div >
						<button  class="btn" id="startBtn" onclick="start();" >Start</button>
						<button  class="btn" id="stopBtn" style="display: none" onclick="stop()" >Stop</button>
					</div>
					<div id="feldTimerLable">
						<h1 id="timerLabel">00:00:00:00</h1>
					</div>	
					<div >
						<button  class="btn" id="restartBtn"  onclick="restart()">Zur&uuml;ckstellen</button>			
						<button  class="btn" id="recordBtn" style="display:none" onclick="takeMemo()" >Runde</button>
					</div>
				</div>
				<div class="clear"></div>
				<div id="area">
				</div>
				<div id="rateArea"></div>
			</div>
		</div>
	</body>
</html>
