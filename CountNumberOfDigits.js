let a = [2,3,4,5,6,7,4]
let count = {}
for(let i=1;i<a.length;i++){
    if(count[a[i]]==undefined){
       count[a[i]]=1
    }else{
        count[a[i]]+=1
    }
}
    console.log(count)