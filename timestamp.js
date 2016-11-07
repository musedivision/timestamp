var reply = {
  unix: null,
  natural: null
}

// checks the type of date unix/natural/null
function checkType(date) {
    // check number
    var re = /\D/g
    var letters = (date.search(re) > -1)
    !letters ? date = Number(date) : ""
    var valid = (new Date(date)).getTime() > 0

    var datetype = "null"
    if(valid) {
      datetype = letters ? "natural" : "unix"
    }

    return datetype

}
//
//converts unix date to natural
function toNatural(date) {
  var fullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var d = new Date(Number(date))

  var day = d.getDate()
  var month = d.getMonth()
  var year = d.getFullYear()

  var natural = `${fullNames[month]} ${day}, ${year}`
  return natural
}
//converts natural date to unix
function toUnix(date) {
  var unix = new Date(date).getTime() / 1000
  return unix
}

// my init function
function init(param) {
    var query = param["0"].slice(1)

    if(checkType(query) === "natural") {
      reply.natural = query
      reply.unix = toUnix(query)
    } else if (checkType(query) === "unix") {
      reply.natural = toNatural(query)
      reply.unix = Number(query)
    } else if(checkType(query) === "null") {
      reply.natural = null
      reply.unix = null
    }
    console.log(checkType(query))
    return JSON.stringify(reply)
}

module.exports = init
