function choice_check(obj){
    let a=document.getElementsByClassName('form-check-input');
    c=0;
    for(i=0;i<a.length;i++){
        if(a[i].checked){
            c++;
            obj.food.push(a[i].value);
        }
    }
    return c>1;
}
function gender_check(obj){
    c=0;
    let a=document.getElementsByClassName('gender');
    for(i=0;i<a.length;i++){
        if(a[i].checked){
            obj.g=a[i].value;
            c++;
            break;
        }
    }
    return c>0;
}
function address(obj){
    let a=document.getElementsByClassName('form-control adr');
    for(i=0;i<a.length;i++)
        obj.adr.push(a[i].value);
}
function foo1(){
    let obj={
        fn:null,
        ln:null,
        adr:[],
        pin:null,
        g:null,
        food:[],
        state:null,
        country:null,
    };
    if(!choice_check(obj)){
        alert("Must select more than 1 food choice")
        return;
    }
    if(!gender_check(obj)){
        alert("Select your gender")
        return;
    }
    obj.fn=document.getElementById('fn').value;
    obj.ln=document.getElementById('ln').value;
    address(obj)
    obj.pin=document.getElementById('pin').value;
    obj.state=document.getElementById('st').value;
    obj.country=document.getElementById('c').value;
    console.log(obj);
    console.log(obj["adr"].join("<br>"))
    console.log(obj["food"].join("<br>"))
    addrow(obj);
    let fo=document.getElementById('abc')
    fo.reset();
    // $('input[type="checkbox"]').prop('checked', false);
}
function addrow(obj){
    let tbody=document.querySelector('tbody')
    let row=document.createElement('tr');
    for(i in obj){
        console.log(obj[i])
        if(obj=="food"){
            data=obj["food"].join([",\n"])
        }
        else if(obj=="adr"){
            data=obj["adr"].join("")
        }
        else{
            data=obj[i];
        }
        row.append(addcol(data)) 
    }
   tbody.append(row);
}
function addcol(data){
    let col=document.createElement('td');
    col.innerHTML=data;
    return col;
}
