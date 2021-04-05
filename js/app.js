
let Hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(Hour.length, Hour)
 function perHpur (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let Seattle = {
    min: 23,
    max: 65,
    avrage: 6.3,
    customerPerHour: [],
    avrageCookie:[],

    

    customerper: function () {
        for (let i = 0; i < Hour.length; i++) {
            let num = perHpur(this.min, this.max);
              Seattle.customerPerHour[i] = num;
              
            
            

        } },
        averageCookiesPurchased :function(){
            for(let i=0;i<Hour.length;i++){
    //      let num2=Seattle.customerPerHour[i]*Seattle.avrage;
     //          Seattle.avrageCookie[i]=num2;
              this.avrageCookie.push(Math.floor(this.customerPerHour[i]*this.avrage));
              
                 
                
            }
        }
    
    };

    
   console.log( Seattle.customerper());
   console.log(Seattle.customerPerHour)
   console.log(Seattle.averageCookiesPurchased())
   console.log(Seattle.avrageCookie)

  // let seattleDiv=document.createElement('div');
   //let ulElement=Document.createElement('ul');
   //seattleDiv.appendChild(ulElement)






