import mysql from "mysql";


export const db = mysql.createConnection({
    host: 'Twenty',
    user: 'root',
    password: 'ANA@20mika',
    database:'blog',
});

//const q  ="ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ANA@20mika' ";
