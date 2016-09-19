# coding: utf-8

import urllib2
import requests
from bs4 import BeautifulSoup

# 图片存放路径存在问题（稍后创建临时图片并保存到数据库）
IMAGE_FILE_PATH = './public/captcha.jpg'

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
        # print self.s.cookies
    # 处理验证码
    def getCaptcha(self):
        captchaUrl = 'http://jw.cuc.edu.cn/academic/getCaptcha.do'
        m = requests.get(captchaUrl)
        print m.cookies['JSESSIONID']
        f = open(IMAGE_FILE_PATH, 'wb')
        f.write(m.content)
        f.close()

spider = Spider()
spider.getCaptcha()
