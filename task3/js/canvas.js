var sales = new array();
sales[0] = "jan,30";
sales[1] = "feb,40";
sales[2] = "mar,60";
sales[3] = "apr,20";
sales[4] = "may,30";
sales[5] = "jun,50";
sales[6] = "jul,10";

function createAxis(context,startx,starty,endx,endy) {
	context.beginPath();
	context.moveTo(startx,starty);
	context.lineTo(endx,endy);
	context.closePath();
	context.stroke();
}

function createBar(context,x,y,width,height) {
	context.beginPath();
	context.rect(x,y,width,height);
	context.closePath();
	context.stroke();
	context.fill();
}

function drawChart() {
	var canvas = document.getElementById('barChart');

	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		createBarChart( context , sales , 30 , 20 , (canvas.height - 20),50);
	}
}

function createBarChart(context, data, startX, barWidth, chartHeight) {
	context.lineWidth = "1";
	var startY=200;

	createAxis(context, startX, startY ,startX, 30);
	createAxis(context, startX, startY ,150, startY);

	context.lineWidth="0.0";
	var maxValue = 0;
	for(var i=0;i < data.length; i++) {
		var item = data[i].split(",");
		var itemName = item[0];
		var itemValue = parseInt(item[1]);
		if(parseInt(itemValue) > parseInt(maxValue)) maxValue=itemValue;

		context.fillStyle = "green";
		createBar(context,20 + startX + (i*barWidth)+ i + (i * 30),(chartHeight - itemValue))
	}
}