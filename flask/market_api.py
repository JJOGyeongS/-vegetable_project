import requests
from bs4 import BeautifulSoup
import re
#item_name = '쌀'


def get_ssg(item_name):
	req = requests.get('http://www.ssg.com/search.ssg?target=all&query='+ item_name)
	html = req.text
	soup = BeautifulSoup(html, 'html.parser')
	name = [name.text for name in soup.select('div > a > em.tx_ko')[:2]]
	price = [price.text for price in soup.select('div > em')[:2]]
	image = [ "http:"+ image.get('src') for image in soup.select('div > a > img.i1')[:2]]
	link = ["http://ssg.com" + link.get('href') for link in soup.select('div.thmb > a')[:2]]
	result = [{
		'site' : "ssg",
		'name' : name[i],
		'price' : price[i],
		'image' : image[i],
		'link' : link[i]
		} for i in range(len(name))]
	return result

def get_hanaro(item_name):
	req = requests.get('http://www.nonghyupmall.com/BC1F010M/srchTotalList.nh?searchTerm_main=' + item_name + '%40undefined&CHAN_C=1102&chanC=1102')
	html = req.text
	soup = BeautifulSoup(html, 'html.parser')
	name = [name.text for name in soup.select('div > a > p')][:2]
	price = [re.search(r'\d*,*\d+', price.text) for price in soup.select('div > p.product-price-sale')][:2]
	image = [image.get('src') for image in soup.select('div.product-thumb > img')][:2]
	link = ['http://www.nonghyupmall.com/BC14010R/viewDetail.nh?wrsC=' + code.get('data-wrs-c') +'&basketCnt=0' for code in soup.select('div.product-info-area > a')][:2]
	result = [{
	    'site' : "hanaro",
	    'name' : name[i],
	    'price' : price[i].group(),
	    'image' : image[i],
	    'link' : link[i]
	    } for i in range(len(name))]
	return result



def get_nonghyup(item_name):
	req = requests.get('http://www.nonghyupmall.com/BC1F010M/srchTotalList.nh?searchTerm_main=' + item_name + '%40undefined&CHAN_C=1101&chanC=1101')
	html = req.text
	soup = BeautifulSoup(html, 'html.parser')
	name = [name.text for name in soup.select('div > a > p')][:2]
	price = [re.search(r'\d*,*\d+', price.text) for price in soup.select('div > p.product-price-sale')][:2]
	image = [image.get('src') for image in soup.select('div.product-thumb > img')][:2]
	link = ['http://www.nonghyupmall.com/BC14010R/viewDetail.nh?wrsC=' + code.get('data-wrs-c') +'&basketCnt=0' for code in soup.select('div.product-info-area > a')][:2]
	result = [{
	    'site' : "nonghyup",
	    'name' : name[i],
	    'price' : price[i].group(),
	    'image' : image[i],
	    'link' : link[i]
	    } for i in range(len(name))]
	return result


def add_all_market(item_name):
	ssg = get_ssg(item_name)
	hanaro = get_hanaro(item_name)
	nonghyup = get_nonghyup(item_name)
	result = ssg + nonghyup + hanaro + kurly
	return result
