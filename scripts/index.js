let lbr = new LeftBar(document.getElementById('wrapper'))
let sbr = new SpeedBar(document.getElementById('wrapper'))
let hrz = new Horizon(document.getElementById('wrapper'))
let hbr = new HeightBar(document.getElementById('wrapper'))
let rbr = new RightBar(document.getElementById('wrapper'))
hrz.setPitch(0)
hrz.setRoll(0)
lbr.DoSomething()
hbr.DoSomething()

let pitch = 0
let pi = 1
let roll = 0
let ri = 0.5
let v = 0
let vi = 2
setInterval(()=>{
    hrz.setPitch(pitch)
    if(pitch > 20 || pitch < -20) pi = -pi
    pitch += pi
},50)

setInterval(()=>{
    hrz.setRoll(roll)
    if(roll > 45 || roll < -45) ri = -ri
    roll += ri
},100)

setInterval(()=>{
    rbr.setValue(v)
    if(v > 45 || v < -45) vi = -vi
    v += vi
},100)