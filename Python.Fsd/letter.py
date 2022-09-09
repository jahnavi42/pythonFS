s="find the words in a string that are less than five letters"
a=s.split()
res=[x for x in a if len(x)<5]
print(res)