#include<stdio.h>
int main(){


int size,x, arr[size],i;
int count=0;
int first_position=-1;
printf("enter the size of an Array:");
scanf("%d",&size);

printf("enter the element in an array:\n");
for(i=0;i<size;i++){
    if(arr[i]==x){
        count++;
        if(first_position==-1){
            first_position=i;
        }
    }
}
printf("\nNumberof occurences of %d:%d\n",x,count);
if(first_position != -1){
    printf("first occurence of %d is at position:%d\n",x,first_position);
    
}
return 0;

}
