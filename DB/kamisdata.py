import sqlite3
import os
import urllib.request 
import json
import pandas as pd
from datetime import datetime, timedelta
import re
import jinja2
import random

conn = sqlite3.connect("kamis_data.db")
c = conn.cursor()

def create_items_table():
	c.execute(
		'CREATE TABLE items('
		'id INTEGER PRIMARY KEY AUTOINCREMENT,'
		'item_name TEXT,'
		'item_code INTEGER,'
		'kind_name TEXT,'
		'UNIQUE(item_code, kind_name) ON CONFLICT REPLACE)'
		)

def input_data_items(item_name, item_code, kind_name):
	c.execute(
		"INSERT OR IGNORE INTO items(item_name, item_code, kind_name) VALUES(?, ?, ?)",
		(item_name, item_code, kind_name)
	)
	conn.commit()

def fill_items():
	path_to_current_file = os.path.realpath(__file__)
	current_directory = os.path.split(path_to_current_file)[0]
	path_to_file = os.path.join(current_directory, "code_only.json")
	with open(path_to_file,encoding="utf-8") as mydata:
		my_json_data = json.load(mydata)
	for item in my_json_data:
		input_data_items(item['item_name'], item['item_code'], item['kind_name'])

#create_items_table()
#fill_items()

def create_items_unit_table():
	c.execute(
		'CREATE TABLE items_unit('
		'item_code INTEGER,'
		'unit TEXT,'
		'ratio REAL,'
		'FOREIGN KEY(item_code) REFERENCES items(item_code))'
	)

def input_data_items_unit(item_code, unit, ratio):
	c.execute(
		"INSERT OR IGNORE INTO items_unit(item_code, unit, ratio) VALUES(?, ?, ?)",
		(item_code, unit, ratio)
	)
	conn.commit()

def fill_items_unit():
	path_to_current_file = os.path.realpath(__file__)
	current_directory = os.path.split(path_to_current_file)[0]
	path_to_file = os.path.join(current_directory, "category_code.json")
	with open(path_to_file,encoding="utf-8") as mydata:
		my_json_data = json.load(mydata)
	for item in my_json_data:
		input_data_items_unit(item['item_code'], item['unit'], item['ratio'])

#create_items_unit_table
#fill_items_unit()

def create_wiki_table():
	c.execute(
		'CREATE TABLE wiki('
		'item_code INTEGER UNIQUE PRIMARY KEY,'
		'item_name TEXT,'
		'wiki TEXT,'
		'FOREIGN KEY(item_code) REFERENCES items(item_code),'
		'UNIQUE(item_code) ON CONFLICT REPLACE)'
	)

def fill_wiki():
	path_to_current_file = os.path.realpath(__file__)
	current_directory = os.path.split(path_to_current_file)[0]
	path_to_file = os.path.join(current_directory, "wiki.json")
	with open(path_to_file,encoding="utf-8") as mydata:
		my_json_data = json.load(mydata)
	for item in my_json_data:
		c.execute(
			"INSERT OR IGNORE INTO wiki(item_code, item_name, wiki) VALUES(?, ?, ?)",
			(item['item_code'], item['item_name'], item['wiki'])
		)
		conn.commit()
		

def input_data_wiki(item_code, item_name):
	c.execute(
		"INSERT OR IGNORE INTO wiki(item_code, item_name) VALUES(?, ?)",
		(item_code, item_name)
	)
	conn.commit()

def fill_wiki():
	c.execute("SELECT item_code, item_name FROM items")
	data = c.fetchall()
	for row in data:
		print(row[0])
		input_data_wiki(row[0], row[1])
  
#create_wiki_table()
#fill_wiki()
