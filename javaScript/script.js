let availableSeat = 12;
let total = 0;
let count=0;
let grandTotal=document.getElementById('grandTotal');
let sellCount=0;
let sellId=document.getElementById('sellCount');
let inputEle=document.getElementById("input1")
let apply=document.getElementById('apply')
let show=document.getElementById('show');
let Button=document.getElementById("Button")
let number=document.getElementById("phoneNumber");
let Modal=document.getElementById("Modal");



function seat(id,showId,AvailableSeat,Total){
    let element= document.getElementById(id);
    element.addEventListener('click',(event)=>{
        
        if(count===4) return
        
        element.style.background="rgb(29, 209, 0)";
        let div=document.createElement('div')
        showId.appendChild(div);
        div.classList.add("flex","justify-evenly","items-center","py-5")
        let h1=document.createElement('h1');
        h1.innerText=id;
        div.appendChild(h1);
        let h2=document.createElement('h2');
        h2.innerText="Economy"
        div.appendChild(h2)
        let h3=document.createElement('h2');
        h3.innerText=550;
        div.appendChild(h3)
        availableSeat-=1;
        document.getElementById(AvailableSeat).innerText=availableSeat;
        total+=550;
        document.getElementById(Total).innerText=total;
        grandTotal.innerText=total;
        if(count===3){
            inputEle.disabled=false;
            apply.addEventListener("click",()=>{
                if(inputEle.value==="NEW15"){
                    let discount=(total*15)/100;
                    grandTotal.innerText=total-discount;
                    Button.classList.add("hidden")
                }else if(inputEle.value==="Couple 20"){
                    let discount=(total*20)/100;
                    grandTotal.innerText=total-discount;
                    Button.classList.add("hidden")

                }
            })

            

        }

        count++;
        sellCount++;
        sellId.innerText=sellCount;
       
    })
}



document.querySelector("#phoneNumber").addEventListener('keyup',(event)=>{
    let Value=event.target.value;
    

    if(Value){
        Modal.removeAttribute("disabled")
    }

})





let seatNumber=["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4"]
for (let num of seatNumber){
    seat(num,show,"availableSeat","total")
}

