// JavaScript Document
	var allmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    var date = new Date();//可以在date中指定日期转换
    console.log( 
     date.getDate() + 
     ' ' +
     allmonths[date.getMonth()] +
     ' ' + 
     date.getFullYear()
    );
    document.getElementById('date2').innerText = allmonths[date.getMonth()]; 