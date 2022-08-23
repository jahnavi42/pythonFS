for (let i=0;i<5;i++){
  let str="";
    for (let j=5;j>i;j--){
        str+=" ";
    }
    for(let k=0; k<=i;k++){
        str+="*";
    }
    for(let l=1;l<=i;l++){
        str+="*";
    }
    console.log(str);
}
for (let i=5;i>=0;i--){
    let str="";
    for (let j=5;j>i;j--){
        str+=" ";
    }
    for(let k=0; k<=i;k++){
        str+="*";
    }
    for(let l=1;l<=i;l++){
        str+="*";
    }
    console.log(str);
}
function functionName(param1,param2){
    let arr=[]
    for(let i=0;i<param1.length;i++){
        for(let j=i+1;j<param1.length;j++){
            if(param1[i]+param1[j]==param2){
                arr=[i,j]
            }
            
        }
    }
    if(arr.length==0) return[-1,-1];
    return arr;
}

console.log(functionName([3,2,4],6))

function Palindrome(num,rev){
    let number=num;
    
    while(num!=0){
        rev=(rev*10)+(num%10);
        num=num/10;
    }
    if(number==rev){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}
Palindrome(121);
Palindrome(1234);
function StrPalindrome(num){
    for(let i=0;i<num.length/2;i++){
        if(num[i]!==num[num.length-1-i]){
            return "it is not palindrome"
        }
    }
    return "it is palindrome"
    }
    console.log(StrPalindrome("madam"))

Palindrome(121);
Palindrome(1234);

function Roman(s){
        switch (s) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return -1;

       
                
        }
    }
    console.log(Roman("II"));

