'use strict'
let Hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(Hour.length, Hour);

function perHpur(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
//array to store obj
let salmon = [];
//constructor 
function City(nameCity, min, max, avrage) {
    this.nameCity = nameCity;
    this.min = min;

    this.max = max;
    this.avrage = avrage;
    this.customerPerHour = [];
    this.avrageCookie = [];
    this.total = 0;



    /*
    this.CustomPerHour=function(){
        for (let i = 0; i < Hour.length; i++) {
            let num = perHpur(this.min, this.max);
            this.customerPerHour[i] = num;
    
    
    
    
        }
    
    
    
    }
    */

    salmon.push(this);


}



//protoype customer
City.prototype.CustomPerHour = function () {
    for (let i = 0; i < Hour.length; i++) {
        let num = perHpur(this.min, this.max);
        console.log(num);
        //console.log(this.customerPerHour);
        this.customerPerHour.push(num);




    }


}


// protoype averageCookiesPurchased 
City.prototype.averageCookiesPurchased = function () {
    for (let i = 0; i < Hour.length; i++) {
        //      
        this.avrageCookie.push(Math.floor(this.customerPerHour[i] * this.avrage));
        this.total += this.avrageCookie[i];



    }
}

// seattle obj
let Seattle = new City('seattle', 23, 65, 6.3);

//Seattle.CustomPerHour();
//Seattle.averageCookiesPurchased();
console.log(Seattle);


// tokyo obj

let  Tokyo= new City('Tokyo',3, 21, 1.2);
console.log(Tokyo);
//Tokyo.CustomPerHour();
//Tokyo.averageCookiesPurchased();
 
//Dubai obj 
let Dubai = new City('Dubai',11, 38, 3.7);
console.log(Dubai);
//Dubai.CustomPerHour();
//Dubai.averageCookiesPurchased();
//paris
let Paris = new City('paris',20, 38, 2.3);
console.log(Paris);
//Paris.CustomPerHour();
//Paris.averageCookiesPurchased();
//Lima
let  Lima= new City('Lima',2, 16, 4.6);
console.log(Lima);
//Lima.CustomPerHour();
//Lima.averageCookiesPurchased();
/*
for(i=0;i<salmon.length;i++){
    salmon[i].averageCookiesPurchased();

}



console.log(salmon);
for(let i=0;i<salmon.length;i++){
    salmon[i].averageCookiesPurchased();
}
*/

//vreate global table 
let parent = document.getElementById('parent');
//create table
let tableElement = document.createElement('table');
//append 
parent.appendChild(tableElement);
//tr


   

    

//create the header  function
function headerTable(){

    let trtable = document.createElement('tr');
//append tr
tableElement.appendChild(trtable);

let thfirst = document.createElement('th');
    trtable.appendChild(thfirst);
    thfirst.textContent = "name   ";
    
    for (let i = 0; i < Hour.length; i++) {

        let thHeader = document.createElement('th');
        trtable.appendChild(thHeader);
        thHeader.textContent = Hour[i];


    }
    let thElementFinally = document.createElement('th');
trtable.appendChild(thElementFinally);
thElementFinally.textContent = "total  ";
}



//create render function

City.prototype.renderFun=function(){
    let trRow=document.createElement('tr');

    tableElement.appendChild(trRow);
    let tdName=document.createElement('td');
    trRow.appendChild(tdName);
    //make text contant to first td this contain the name of city
    tdName.textContent=this.nameCity;
    for(let i=0;i<Hour.length;i++){
        let tdData=document.createElement('td');
        trRow.appendChild(tdData);
        tdData.textContent=this.avrageCookie[i];

    }


 let tdTotal=document.createElement('td');
trRow.appendChild(tdTotal);
tdTotal.textContent=this.total;
}

//footer function
function footer(){
    let fooRow=document.createElement('tr');
    tableElement.appendChild(fooRow);
    let thFooter=document.createElement('th');
    fooRow.appendChild(thFooter);
    thFooter.textContent="total";
   
    let margeTotal=0;
    for(let i=0;i<Hour.length;i++){
        let totalHour=0;
        for(let j=0;j<salmon.length;j++){
            totalHour+=salmon[j].avrageCookie[i];
            margeTotal+=salmon[j].avrageCookie[i];

        }
        let footerTh=document.createElement('th');
        fooRow.appendChild(footerTh);
        footerTh.textContent=totalHour;
    }
    let finallyTotal=document.createElement('th');
    fooRow.appendChild(finallyTotal);
    finallyTotal.textContent=margeTotal;

}
/*

for (i = 0; i <= 4; i++) {
    let trE = document.createElement('tr');
    tableElement.appendChild(trE);

    for (j = 0; j <=14; j++) {
        let tdfirst = document.createElement('td');
        trE.appendChild(tdfirst);
        
        tdfirst.textContent =array3[i][j];

    }
}
 */
    
    






//Seattle.render();

headerTable();

for(let i=0;i<salmon.length;i++){
    salmon[i].CustomPerHour();
    salmon[i].averageCookiesPurchased();
    salmon[i].renderFun();
}
footer();

/*
 lab-6

let Seattle = {
    min: 23,
    max: 65,
    avrage: 6.3,
    customerPerHour: [],
    avrageCookie:[],
    total:0,



    customerper: function () {
        for (let i = 0; i < Hour.length; i++) {
            let num = perHpur(this.min, this.max);
              this.customerPerHour[i] = num;




        } },
        averageCookiesPurchased :function(){
            for(let i=0;i<Hour.length;i++){
    //      let num2=Seattle.customerPerHour[i]*Seattle.avrage;
     //          Seattle.avrageCookie[i]=num2;
              this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
             this.total+=this.avrageCookie[i];



            }
        },
        finaly:function(){
            let parent=document.getElementById('parent')
            parent.textContent='Seattle';
            console.log(parent);
            let child=document.createElement('ul');
            //console.log(child);
            parent.appendChild(child);
          for(i=0;i<Hour.length;i++)
          {
              let liElement=document.createElement('li')
              child.appendChild(liElement)
              liElement.textContent=Hour[i]+' '+Seattle.avrageCookie[i]+'cookies';
          }
          let total=document.createElement('li');
          child.appendChild(total);
          total.textContent='total     '+Seattle.total+'cookies';




        }



    };


   console.log( Seattle.customerper());
   console.log(Seattle.customerPerHour)
   console.log(Seattle.averageCookiesPurchased())
   console.log(Seattle.avrageCookie)
   Seattle.finaly();




//Tokyo

    let Tokyo  = {
        min: 3,
        max: 24,
        avrage: 1.2,
        customerPerHour: [],
        avrageCookie:[],
        total:0,



        customerper: function () {
            for (let i = 0; i < Hour.length; i++) {
                let num = perHpur(this.min, this.max);
                this.customerPerHour[i] = num;




            } },
            averageCookiesPurchased :function(){
                for(let i=0;i<Hour.length;i++){
        //
                  this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
                 this.total+=this.avrageCookie[i];



                }
            },
            finaly:function(){
                let divElement=document.getElementById('Tokyo2')
        divElement.textContent='Tokyo';
        console.log(divElement);
        let ulElement=document.createElement('ul');
        //console.log(ulElement);
        divElement.appendChild(ulElement);
      for(i=0;i<Hour.length;i++)
      {
          let liElement=document.createElement('li')
          ulElement.appendChild(liElement)
          liElement.textContent=Hour[i]+' '+this.avrageCookie[i]+'cookies';
      }
      let total=document.createElement('li');
      ulElement.appendChild(total);
      total.textContent='total     '+this.total+'cookies';



            }



        };
        console.log( Tokyo.customerper());
        console.log(Tokyo.customerPerHour)
        console.log(Tokyo.averageCookiesPurchased())
        console.log(Tokyo.avrageCookie)
        Tokyo.finaly();





    //Dubai

    let Dubai  = {
        min: 11,
        max: 38,
        avrage: 3.7,
        customerPerHour: [],
        avrageCookie:[],
        total:0,



        customerper: function () {
            for (let i = 0; i < Hour.length; i++) {
                let num = perHpur(this.min, this.max);
                this.customerPerHour[i] = num;




            } },
            averageCookiesPurchased :function(){
                for(let i=0;i<Hour.length;i++){
        //
                  this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
                 this.total+=this.avrageCookie[i];



                }
            },
            finaly:function(){
                let divElement=document.getElementById('Dubai')
        divElement.textContent='Dubai';
        console.log(divElement);
        let ulElement=document.createElement('ul');
        //console.log(ulElement);
        divElement.appendChild(ulElement);
      for(i=0;i<Hour.length;i++)
      {
          let liElement=document.createElement('li')
          ulElement.appendChild(liElement)
          liElement.textContent=Hour[i]+' '+Dubai.avrageCookie[i]+'cookies';
      }
      let total=document.createElement('li');
      ulElement.appendChild(total);
      total.textContent='total     '+Dubai.total+'cookies';



            }



        };
        console.log( Dubai.customerper());
        console.log(Dubai.customerPerHour)
        console.log(Dubai.averageCookiesPurchased())
        console.log(Dubai.avrageCookie)
        Dubai.finaly();



 //Paris

    let Paris  = {
        min: 20,
        max: 38,
        avrage: 2.3,
        customerPerHour: [],
        avrageCookie:[],
        total:0,



        customerper: function () {
            for (let i = 0; i < Hour.length; i++) {
                let num = perHpur(this.min, this.max);
                this.customerPerHour[i] = num;




            } },
            averageCookiesPurchased :function(){
                for(let i=0;i<Hour.length;i++){
        //
                  this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
                 this.total+=this.avrageCookie[i];



                }
            },
            finaly:function(){
                let divElement=document.getElementById('Paris')
        divElement.textContent='Paris';
        console.log(divElement);
        let ulElement=document.createElement('ul');
        //console.log(ulElement);
        divElement.appendChild(ulElement);
      for(i=0;i<Hour.length;i++)
      {
          let liElement=document.createElement('li')
          ulElement.appendChild(liElement)
          liElement.textContent=Hour[i]+' '+this.avrageCookie[i]+'cookies';
      }
      let total=document.createElement('li');
      ulElement.appendChild(total);
      total.textContent='total     '+this.total+'cookies';



            }



        };
        console.log( Paris.customerper());
        console.log(Paris.customerPerHour)
        console.log(Paris.averageCookiesPurchased())
        console.log(Paris.avrageCookie)
        Paris.finaly();


         //Lima

    let Lima  = {
        min: 2,
        max: 16,
        avrage: 4.6,
        customerPerHour: [],
        avrageCookie:[],
        total:0,



        customerper: function () {
            for (let i = 0; i < Hour.length; i++) {
                let num = perHpur(this.min, this.max);
                this.customerPerHour[i] = num;




            } },
            averageCookiesPurchased :function(){
                for(let i=0;i<Hour.length;i++){
        //
                  this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
                 this.total+=this.avrageCookie[i];



                }
            },
            finaly:function(){
                let divElement=document.getElementById('Lima')
        divElement.textContent='Lima';
        console.log(divElement);
        let ulElement=document.createElement('ul');
        //console.log(ulElement);
        divElement.appendChild(ulElement);
      for(i=0;i<Hour.length;i++)
      {
          let liElement=document.createElement('li')
          ulElement.appendChild(liElement)
          liElement.textContent=Hour[i]+' '+this.avrageCookie[i]+'cookies';
      }
      let total=document.createElement('li');
      ulElement.appendChild(total);
      total.textContent='total     '+this.total+'cookies';



            }



        };
        console.log( Lima.customerper());
        console.log(Lima.customerPerHour)
        console.log(Lima.averageCookiesPurchased())
        console.log(Lima.avrageCookie)
        Lima.finaly();



*/