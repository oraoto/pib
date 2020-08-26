<?php

$db = new SQLite3('people.db');
$db->query('CREATE TABLE IF NOT EXISTS people (
	id INTEGER PRIMARY KEY,
   	name TEXT NOT NULL
);');

for($i = 0; $i < 100; $i++) {
	$insert = $db->prepare('INSERT INTO people (name) VALUES(:name)');
	$insert->bindValue(':name', str_repeat(chr($i+67), 5), SQLITE3_TEXT);

	$insert->execute();
}

$results = $db->query('SELECT * FROM people');

$rows = [];

while ($row = $results->fetchArray()) {
    $rows[] = $row;
}

var_dump($rows);
