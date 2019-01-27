class news:
    
    def __init__(self,title,link,source,date=""):
        self._title = title
        self._link = link
        self._source = source
        self._date = date

    def title(self):
        return self._title

    def link(self):
        return self._link

    def date(self):
        return self._date

    def insert(self):
        str = "INSERT INTO news VALUES(" + self._title+","+self._link+","+self._source+","+self._date+")"
        return str

    