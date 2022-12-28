/*！
 * 时间同步系统组件
 — — —
 * By Alix
 */

//数字日期
	var date = new Date()
	var y = date.getFullYear();
	var d = date.getDate(); 
	document.getElementById("date0").innerHTML = y;
	document.getElementById("date1").innerHTML = d;

//英文月份
	var allmonths = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var date = new Date();  //可以在date中指定日期转换
        console.log( 
           date.getDate() + 
                ' ' +
                allmonths[date.getMonth()] +
                ' ' + 
           date.getFullYear()
        );
    document.getElementById('date2').innerText = allmonths[date.getMonth()]; 