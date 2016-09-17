# coding: utf-8

import urllib2
import requests
from bs4 import BeautifulSoup

# 模拟登录
class Spider:
    def __init__(self):
        # 登录post请求的地址
        self.url = 'http://jw.cuc.edu.cn/academic/j_acegi_security_check'
        # 提交的用户数据
        self.data = {
            'j_username': '201301123032',
            'j_password': 'qiankun957068',
            'button1': '%B5%C7+%C2%BC'
        }
        # 打开一个会话
        self.s = requests.Session()
        self.s.get('http://jw.cuc.edu.cn/academic/index.jsp')
        # print self.s.cookies
    # 处理验证码
    def getCaptcha(self):
        captchaUrl = 'http://jw.cuc.edu.cn/academic/getCaptcha.do'
        m = self.s.get(captchaUrl)
        f = open('captcha.jpg', 'wb')
        f.write(m.content)
        f.close()
    # 模拟登录
    def login(self):
        captchaCheck = self.getCaptcha()
        captcha = raw_input('请输入验证码')
        self.data['j_captcha'] = captcha
        # print self.data['j_captcha']
        self.s.post(self.url, data = self.data, cookies = self.s.cookies)
        openHtml = self.s.get('http://jw.cuc.edu.cn/academic/student/studentinfo/studentInfoModifyIndex.do?frombase=0&wantTag=0&groupId=&moduleId=2060')
    # 输出信息
        soup = BeautifulSoup(openHtml.text, 'html.parser')
        print soup.get_text()

if __name__ == "__main__":
    spider = Spider()
    spider.login()
