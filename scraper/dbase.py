import sqlite3

conn = sqlite3.connect('news.db')

c = conn.cursor()

c.execute('''CREATE TABLE news (title text , date text , link text)''')

c.execute("INSERT into news VALUES('THIS IS A CHECK','2019-01-05','www.roshanguragain.com.np')")

conn.commit()

conn.close()




