str="java"
def remove_vowel(str):
    
    vowels=['a', 'e', 'i', 'o', 'u']
    res=[x for x in str if x.lower() not in vowels]
    res=''.join(res)
    print(res)
remove_vowel(str)
    

        