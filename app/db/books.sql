
drop table files.book;
drop table files.song;
drop table files.video;

CREATE DATABASE files;

CREATE TABLE files.book ( id SERIAL PRIMARY KEY, BookName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.book ( BOOKNAME, AUTHORNAME, PRICE) VALUES ('BookJones', 'Jonathan', 85000.00);


CREATE TABLE files.song ( id SERIAL PRIMARY KEY, SongName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.song ( SONGNAME, AUTHORNAME, PRICE) VALUES ('SongJones', 'Jonathan', 35000.00);

CREATE TABLE files.video ( id SERIAL PRIMARY KEY, VideoName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.video ( VIDEONAME, AUTHORNAME, PRICE) VALUES ('VideoJones', 'Jonathan', 25000.00);




