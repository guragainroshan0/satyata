import json
import bs4 as bs
import requests
import csv

def scrape():
        date = "2019/01/14"
        url = "https://www.kantipurdaily.com/news/"+date+"?json=true"
        r = requests.get(url)
        print(r.text)
        p = bs.BeautifulSoup(json.loads(r.text)["html"],"lxml")
        posts = p.find_all("h2")
        for title in posts:
                data = title.find("a")
                with open("kantipur_daily.txt",'a') as csv_file:
                        csv_write = csv.writer(csv_file,delimiter=',')
                        csv_write.writerow([data.text,data["href"],'www.kantipurdaily.com'])
                        print(data["href"])
                        print(data.text)
    

if __name__=="__main__":
        scrape()
        