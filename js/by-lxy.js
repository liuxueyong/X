// JavaScript - MADE BY LXY
	var allmonths = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var date = new Date();//可以在date中指定日期转换
        console.log("I HAVE A DREAM\n-"),
        console.log("MADE BY LXY"),
        console.log( 
           date.getDate() + 
                ' ' +
                allmonths[date.getMonth()] +
                ' ' + 
           date.getFullYear()
        );
    document.getElementById('date2').innerText = allmonths[date.getMonth()]; 