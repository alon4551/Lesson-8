const namesId=[]
const items =[
    {name:'בננה',price:10,decription:'זה בננה חבר'},
    {name:'מלון',price:5,decription:'מל מל מל מלון'},
    {name:'חלב',price:16,decription:'אבא הלך להביא את החלב ולא חזר מאז'},
    {name:'עוגיות',price:3,decription:'אוריאו זה העוגייה האהובה עלי'},
    {name:'קפה',price:7,decription:'קפה תמיד'},
    {name:'מלפפון',price:12,decription:'להשים על חתול זה מצחיק'},
    {name:'עגבנייה',price:20,decription:'מומלץ לזרוק על שחקן במה גרוע'}
]
function exercise1(firstname,lastname){
let main = document.createElement('div'),p1=document.createElement('p'),p2=document.createElement('p'),remove = document.createElement('button');
if(namesId.filter(name=>name==firstname+lastname).length!=0){
    alert('יש כבר שם כזה במערך נתונים');
    return;
}
main.classList.add('container')
main.id=firstname+lastname
p1.textContent=firstname
p1.classList.add('firstName')
p2.textContent=lastname
p2.classList.add('lastName')
remove.textContent="לחץ למחיקה";
remove.addEventListener('click',()=>removeSection(firstname+lastname))
main.appendChild(p1)
main.appendChild(p2)
main.appendChild(remove)
namesId.push(firstname+lastname)
document.querySelector('#output').appendChild(main)
}
function removeSection(id){
    document.querySelector('#output').removeChild(document.querySelector(`#${id}`))
    namesId.splice(namesId.indexOf(id),1)
}
function search(){
    document.querySelector("#gallery").innerHTML=''
    let budget = Number(document.querySelector('#budget').value);
    let filterItems = items.filter(item=>item.price<=budget)
    filterItems.forEach(item=>{
        let main = document.createElement('div'),name=document.createElement("h3"),price=document.createElement("h4"),decription=document.createElement("p")
        main.classList.add('item')
        name.textContent=item.name
        price.textContent=`${item.price}₪`
        decription.textContent=item.decription
        main.appendChild(name)
        main.appendChild(price)
        main.appendChild(decription)
        document.querySelector("#gallery").appendChild(main)
    })

}
class trip{
    constructor(renter,date,travel){
        this.renterName=renter
        this.date=date
        this.travelKm=travel
    }
}
class car{
    constructor(company,model,isRented=false,travel=0,trips=[]){
        this.company=company
        this.model=model
        this.isRented=isRented
        this.travel=travel
        this.trips=trips
    }
    update(){
        this.travel=0
        this.trips.map(trip=>this.travel+=trip.travelKm)
    }
    addTrip(trip){
        this.trips.push(trip)
        this.update()
    }
}
class garage{
    constructor(company){
        this.company=company
        this.cars = []
    }
    addNewCar(car){
        this.cars.push(car)
    }
    mostTravelCar(){
        let travel = Math.max(...this.cars.map(car=>Number(car.travel)))
        return this.cars.filter(car=>car.travel==travel)[0]
    }
    freeCarsToRent(){
        this.cars.filter(car=>car.isRented==false).forEach(car=>console.log(car))
    }
    addTriptoCar(model,trip){
     let item = this.cars.filter(car=>car.model==model)[0]
     item.addTrip(trip)
    }
}
let garage1=new garage('kia')
let car1=new car('kia','forte'),car2=new car('kia','picanto')
car1.addTrip(new trip('Alon','12/05/2024',28))
car1.addTrip(new trip('Alon','20/05/2024',50))
garage1.addNewCar(car1)
garage1.addNewCar(car2)
garage1.addTriptoCar('picanto',new trip('Alon','12/05/2024',28))
let longestcar=garage1.mostTravelCar()
console.log(longestcar)
console.log(`car ${longestcar.model} with ${longestcar.travel} KM and ${longestcar.trips.length} trips`)
garage1.freeCarsToRent()
let test= [["אלון","שרייבמן"],["גילה","שרייבמן"],["לאון","יארובינסקי"],["יונתן","רודניצקי"],["נתנאלה","צחור"]]
test.forEach(fullname=>exercise1(fullname[0],fullname[1]))