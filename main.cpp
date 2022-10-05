/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <cstring>
using namespace std;

void revers(char* str)
{
    int size = strlen(str);
    for (int i = 0; i <size/2; i++) {
       char buf = str[i];
       str[i]= str[size - i -1];
       str[size-i-1] = buf;
    }
}

void strCat(char* str1,char* str2){
    int length=strlen(str1);
    for (int i = 0; i <= strlen(str2); i++) {
        str1[length]=str2[i];
        length++;
    }
}

void strset(char* str,char sim){
    int length=strlen(str);
    for (int i = 0; i < length; i++) {
        str[i]=sim;
    }
}



int main()
{
    char str[]="hello";
    revers(str);
    cout<<str;
    char str1[]="my";
    char str2[]="name";
    strCat(str1,str2);
    cout<<str1;
    strset(str,'m');
    cout<<str;
    return 0;
}
