import requests
import bs4 as bs
import json
import csv

number = 300
url = "http://annapurnapost.com/news/"

def scrape():
        resp = requests.get("http://bg.annapurnapost.com/api/news/list?page=0&per_page="+str(number)+"&category_alias=politics&isCategoryPage=1")
        p = json.loads(resp.text)
        data = p["data"]
        for post in data:
                title = post["title"]
                link = url+str(post["id"])
                print(link)
                with open("annapurna_post.txt",'a') as csv_file:
                        csv_file = csv.writer(csv_file,delimiter=',')
                        csv_file.writerow([title,link,url])
        #for post in data:

if __name__=="__main__":
        scrape()
