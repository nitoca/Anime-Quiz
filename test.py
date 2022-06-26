f = open('アニメ作品.txt', 'r')

print('<select name="anime">')
for line in f.readlines():

    print('<option>' + line + '</option>')


print('</select>')