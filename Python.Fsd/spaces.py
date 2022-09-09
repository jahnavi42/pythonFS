#cnt=0
#sentence="Python is an Object Oriented programming language"
#for i in sentence:
 #   if(i.isspace()):
  #      cnt=cnt+1
#print(cnt)
Sentence="Python is an Object Oriented programming language"
space=[x for x in Sentence if x== ' ']
print(len(space))