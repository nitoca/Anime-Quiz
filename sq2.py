import requests
from bs4 import BeautifulSoup
result = requests.get('https://ja.dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fja.dbpedia.org&query=PREFIX+ont%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0A++++++++PREFIX+pro%3A+%3Chttp%3A%2F%2Fja.dbpedia.org%2Fproperty%2F%3E%0D%0A++++++++PREFIX+res%3A+%3Chttp%3A%2F%2Fja.dbpedia.org%2Fresource%2F%3E%0D%0A++++++++PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A++++++++PREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0A++++++++PREFIX+ctg%3A+%3Chttp%3A%2F%2Fja.dbpedia.org%2Fresource%2FCategory%3A%3E%0D%0A++++++++%0D%0A++++++++%0D%0A++++++++select+distinct+%3Fs%0D%0A++++++++WHERE%0D%0A++++++++%7B%0D%0A++++++++++%3Fs+rdf%3Atype+ont%3AAnime.%0D%0A++++++++++%3Fs+dct%3Asubject+ctg%3AMF%E6%96%87%E5%BA%ABJ%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1%E4%BD%9C%E5%93%81.%0D%0A++++++++%7D&format=text%2Fhtml&timeout=0&signal_void=on')
soup = BeautifulSoup(result.content, 'html.parser')
p = soup.find_all('td')
for i in p:
    text = i.a.get_text()
    if 'かのこん' in text:
        print(text)