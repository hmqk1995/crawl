#coding: utf-8

import sys, json
import requests
from bs4 import BeautifulSoup
reload(sys)
sys.setdefaultencoding('utf8')

#Read data from stdin
def read_in():
    line = sys.stdin.readline()
    return json.loads(line)
    #Since our input would only be having one line, parse our JSON data from that
    # return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    data = read_in()
    number = data['number']
    password = data['password']
    sessionId = data['sessionId']
    captcha = data['captcha']
    url = data['url']
    # 拼装成教务在线要求
    j_data = {
        'j_username': number,
        'j_password': password,
        'button1': '%B5%C7+%C2%BC',
        'j_captcha': captcha
    }

    # 模拟登录
    loginUrl = 'http://jw.cuc.edu.cn/academic/j_acegi_security_check'
    t = requests.post(loginUrl, data = j_data, cookies = {'JSESSIONID':sessionId})
    openHtml = requests.post(url, data = {u'para': '0'}, cookies = {'JSESSIONID':sessionId})
    print openHtml.text.encode('utf-8')

#start process
if __name__ == '__main__':
    main()
