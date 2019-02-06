from np_lang.stem.itrstem import IterativeStemmer
from nltk.corpus import stopwords
import pandas as pd
from np_lang.tokenize.tokenizer import Tokenizer
from gensim import models
from gensim.similarities import WmdSimilarity

def preprocesstext(wakya):
    tokens = Tokenizer().word_tokenize(wakya)
    return [IterativeStemmer().stem(x) for x in tokens if x not in NEPALI_SW]

def get_cluster(samachar):
    processed_samachar = preprocesstext(samachar)
    newsindex = index[processed_samachar]
    for offset, simmilarity in newsindex:
        if simmilarity<0.55:
                continue
        yield [all_domain[offset], all_url[offset], all_title[offset]]


NEPALI_SW = stopwords.words("nepali")
nepali_stemmer = IterativeStemmer()
nepali_tokenizer = Tokenizer()
modellite = models.KeyedVectors.load("modellite")
news_database = pd.read_csv('NewsData.txt').dropna().drop_duplicates()
all_title = news_database['news title'].values.tolist()
all_url = news_database['url'].values.tolist()
all_domain = news_database['domain'].values.tolist()
newscorpus = [preprocesstext(news) for news in  all_title]
index = WmdSimilarity(newscorpus, modellite, num_best = 5)

if __name__ == "__main__":
    wakya1 = "प्रदेश २ का मन्त्रीले कुटे सचिव"
    print(dict(get_cluster(wakya1)))

