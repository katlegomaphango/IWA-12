const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

let book1 = document.querySelector('[id="book1"]')
// status = selector(status)
let status1 = book1.querySelector('[class="status"]')
// reserve = selector(reserve)
let reserve1 = book1.querySelector('[class="reserve"]')
// checkout = selector(checkout)
let checkout1 = book1.querySelector('[class="checkout"]')
// checkin = selector(checkin)
let checkin1 = book1.querySelector('[class="checkin"]')

let book2 = document.querySelector('[id="book2"]')
// status = selector(status)
let status2 = book2.querySelector('[class="status"]')
// reserve = selector(reserve)
let reserve2 = book2.querySelector('[class="reserve"]')
// checkout = selector(checkout)
let checkout2 = book2.querySelector('[class="checkout"]')
// checkin = selector(checkin)
let checkin2 = book2.querySelector('[class="checkin"]')

let book3 = document.querySelector('[id="book3"]')
// status = selector(status)
let status3 = book3.querySelector('[class="status"]')
// reserve = selector(reserve)
let reserve3 = book3.querySelector('[class="reserve"]')
// checkout = selector(checkout)
let checkout3 = book3.querySelector('[class="checkout"]')
// checkin = selector(checkin)
let checkin3 = book3.querySelector('[class="checkin"]')

// checkin.0.color = none
checkin1.style.color = ''
// status.0.style.color = STATUS_MAP.status.color
status1.style.color = STATUS_MAP[status1.textContent].color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
reserve1.disabled = STATUS_MAP[status1.textContent].canReserve ? false : true
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkout1.disabled = STATUS_MAP[status1.textContent].canCheckout ? false : true
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
checkin1.disabled = STATUS_MAP[status1.textContent].canCheckIn ? false : true

// checkin.1.color = none
checkin2.style.color = ''
// status.1.style.color = STATUS_MAP.status.color
status2.style.color = STATUS_MAP[status2.textContent].color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
reserve2.disabled = STATUS_MAP[status2.textContent].canReserve ? false : true
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkout2.disabled = STATUS_MAP[status2.textContent].canCheckout ? false : true
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
checkin2.disabled = STATUS_MAP[status2.textContent].canCheckIn ? false : true

// checkin.2.color = none
checkin3.style.color = ''
// status.2.style.color = STATUS_MAP.status.color
status3.style.color = STATUS_MAP[status3.textContent].color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
reserve3.disabled = STATUS_MAP[status3.textContent].canReserve ? false : true
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkout3.disabled = STATUS_MAP[status3.textContent].canCheckout ? false : true
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
checkin3.disabled = STATUS_MAP[status3.textContent].canCheckIn ? false : true