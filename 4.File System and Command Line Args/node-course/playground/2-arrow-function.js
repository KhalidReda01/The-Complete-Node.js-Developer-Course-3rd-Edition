// const square = function (x) {
//   return x*x
// }

// const square = (x) => {
//   return x*x
// }
// const square = (x) => x * x;
// console.log(square(2))

const event = {
  name: 'Birthday Party',
  guestList:['Khalid','Reda','Youssef'],
  printGuestList() {
    const that=this
    console.log('Guest list for ' + this.name)
    this.guestList.forEach(function (guest) {
      console.log(guest+' is attending '+that.name)
    })
  }
}
event.printGuestList()