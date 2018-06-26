function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}


function checkPreAuth() {
	var form = $("#loginForm");
	if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
		$("#username", form).val(window.localStorage["username"]);
		$("#password", form).val(window.localStorage["password"]);
		consql();
	}
}

function consql(){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : '192.168.10.102',
        user : 'proj',
        password : '0000',
        database : 'test'
    });

    connection.connect();

    connection.query('insert into t values(1123,"12313")');

    connection.end();
}


function deviceReady() {

    $("#loginForm").on("submit",consql);

}





