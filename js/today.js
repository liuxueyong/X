/*！
 * 时间同步系统组件
 * 随机语录库
 — — —
 * By Alix
 */

//英文日期
function showLocale(objD){
	var str,colorhead,colorfoot;	
	var week = objD.getDay();
	if ( week==0 ) colorhead="<font color=\"#9e9e9e\">";  //定义星期天字体颜色
	if ( week > 0 && week < 6 ) colorhead="<font color=\"#9e9e9e\">";  //默认字体颜色
	if (week==0) week="SUNDAY";
	if (week==1) week="MONDAY";
	if (week==2) week="WEDNESDAY";
	if (week==3) week="WEDNESDAY";
	if (week==4) week="THURSDAY";
	if (week==5) week="FRIDAY";
	if (week==6) week="SATURDAY";
	colorfoot="</font>"
		str = colorhead + week + colorfoot;
	return(str);
}
	function tick(){
	var today;
	today = new Date();
	document.getElementById("today").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
}
tick();

//数字日期
	var date = new Date()
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate(); 
	document.getElementById("date0").innerHTML = y;
	document.getElementById("date1").innerHTML = d;
	document.getElementById("ymd").innerHTML = "# "+y+" / "+m+" / "+d;

//英文月份
	var allmonths = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var date = new Date();  //可以在date中指定日期转换
        console.log("I HAVE A DREAM \n\n\n\n— — —"),
        console.log("MADE BY LXY"),
        console.log( 
           date.getDate() + 
                ' ' +
                allmonths[date.getMonth()] +
                ' ' + 
           date.getFullYear()
        );
    document.getElementById('date2').innerText = allmonths[date.getMonth()]; 

//随机语录库
	var r=parseInt((Math.random()*20));  //词条总数
		arr=new Array();

		arr[ 0]="LESS IS MORE";
		arr[ 1]="等风来 不如追风去";
		arr[ 2]="凡是过去 皆为序曲";
		arr[ 3]="风雪一更 共度余生";
		arr[ 4]="保持热爱 奔赴山海";
		arr[ 5]="不忘初心 方得始终";
		arr[ 6]="浮生皆纵 恍如一梦";
		arr[ 7]="一日不见 如隔三秋";
		arr[ 8]="夜色匆忙 暮暮是你";
		arr[ 9]="生活明朗 万物可爱";
		arr[10]="岁月漫长 值得等待";
		arr[11]="唯有热爱 能抵漫长岁月";
		arr[12]="世间美好 与你环环相扣";
		arr[13]="人生如逆旅 我亦是行人";
		arr[14]="斯人若彩虹 遇上方知有";
		arr[15]="仰望星空";
		arr[16]="你保护世界 我保护你";
		arr[17]="风月都浪漫 何况是你";
		arr[18]="美好的事情即将发生";
		arr[19]="所有的相遇 都是久别重逢";
		arr[20]="人生若只如初见";

	document.getElementById('yulu').innerText = (arr[r]);