sendMessage("DLVL")
sendMessage("PDEF")
sendMessage("DPP")
sendMessage("POINTS")
function sendMessage(a){
player.sendMessage(a+"  "+player.getStoredData(a))
}

reduceToZero("DLVL")
reduceToZero("PDEF")
reduceToZero("DPP")
reduceToZero("POINTS")
function reduceToZero(a){
player.setStoredData(a,0);
}
/**
*@Author Vallovely
*����Ȩ����Vallovely 2022/1/27����Ч
**/