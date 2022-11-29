# 모듈 import
import requests
import pprint

#인증키 입력
encoding = '4d157ec8-734e-40a7-a3b5-a12acbddf203'
decoding = '4d157ec8-734e-40a7-a3b5-a12acbddf203'

#url 입력
url = 'http://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList'
params ={'p_cert_key' : encoding,
         'p_cert_id' : '2788',
         'p_product_cls_code':'02', 
         'p_country_code' : '1101', 
         'p_regday' : '2015-10-01', 
         'p_convert_kg_yn' : 'N', 
         'p_item_category_code' : '200',
         'p_cert_key' : '111',
         'p_cert_id' : '222',
         'p_returntype' : 'xml'}

response = requests.get(url, params=params)

# xml 내용
content = response.text

# 깔끔한 출력 위한 코드
pp = pprint.PrettyPrinter(indent=4)
##print(pp.pprint(content))

### xml을 DataFrame으로 변환하기 ###
from os import name
import xml.etree.ElementTree as et
import pandas as pd
import bs4
from lxml import html
from urllib.parse import urlencode, quote_plus, unquote

'''
condition	string	요청 메세지
item_name	string	품목명
itemcode	string	품목코드
kind_name	string	품종명
kindcode	string	품종코드
rank	string	상태(상품, 중품)
unit	string	단위
day1	string	일자(조회일자)
dpr1	string	조회일자 가격
day2	string	1일전 일자(조회일자 기준)
dpr2	string	1일전 가격
day3	string	1주일전 일자(조회일자 기준)
dpr3	string	1주일전 가격
day4	string	2주일전 일자(조회일자 기준)
dpr4	string	2주일전 가격
day5	string	1개월전 일자(조회일자 기준)
dpr5	string	1개월전 가격
day6	string	1년전 일자(조회일자 기준)
dpr6	string	1년전 가격
day7	string	평년일자
price	string	응답 메세지
dpr7	string	평년 가격
'''

#bs4 사용하여 item 태그 분리

xml_obj = bs4.BeautifulSoup(content,'lxml-xml')
rows = xml_obj.findAll('item')
#print(rows)

# 각 행의 컬럼, 이름, 값을 가지는 리스트 만들기
row_list = [] # 행값
name_list = [] # 열이름값
value_list = [] #데이터값

# xml 안의 데이터 수집
for i in range(0, len(rows)):
    columns = rows[i].find_all()
    #첫째 행 데이터 수집
    for j in range(0,len(columns)):
        if i ==0:
            # 컬럼 이름 값 저장
            name_list.append(columns[j].name)
        # 컬럼의 각 데이터 값 저장
        value_list.append(columns[j].text)
    # 각 행의 value값 전체 저장
    row_list.append(value_list)
    # 데이터 리스트 값 초기화
    value_list=[]

print(name_list)
#kamisdata_df = pd.DataFrame(row_list, columns=name_list)
#print(kamisdata_df.head(19))

#DataFrame CSV 파일로 저장
#kamisdata_df.to_csv('kamisdata_df.csv', encoding='utf-8-sig')