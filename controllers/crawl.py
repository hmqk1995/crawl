#coding: utf-8

import sys, json
import requests
from bs4 import BeautifulSoup

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
    # 拼装成教务在线要求
    j_data = {
        'j_username': number,
        'j_password': password,
        'button1': '%B5%C7+%C2%BC',
        'j_captcha': captcha
    }

    # 模拟登录
    url = 'http://jw.cuc.edu.cn/academic/j_acegi_security_check'
    t = requests.post(url, data = j_data, cookies = {'JSESSIONID':sessionId})
    openHtml = requests.get('http://jw.cuc.edu.cn/academic/student/studentinfo/studentInfoModifyIndex.do?frombase=0&wantTag=0&groupId=&moduleId=2060', cookies = {'JSESSIONID':sessionId})
    print openHtml.text.encode('utf-8')

#start process
if __name__ == '__main__':
    main()
