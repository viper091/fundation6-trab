create database trabDB;

use trabDB;

create table airplanes (
	id int primary key auto_increment,
    name varchar(30) not null,
    manufacturer varchar(30) not null,
    cost real not null,
    role varchar(60) not null,
    passangers int not null,

);


create table users(
	id int primary key auto_increment,
    username varchar(30) not null,
    password varchar(30) not null
);

create table post(
	id int primary key auto_increment,
    title varchar(30) not null,
	content varchar(200) not null,
    author_id int not null,
    
    foreign key(author_id) references users(id)
);