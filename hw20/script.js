// hw 20

function PublicService(){
    this.services = [];

    this.tarrifs = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
    }
}

PublicService.prototype.addMeterReadings = function(amount, serviceName){
    if(!Object.keys(this.tarrifs).includes(serviceName)){
        throw new Error(`Service "${ServiceName}" is unavailable`)
    }

    if(this.services.some(( {key} ) => key === serviceName)){
        throw new Error(`Service "${serviceName}" is already included`)
    }

    this.services.push({key: serviceName, amount})
}

PublicService.prototype.deleteMeterReadings = function(serviceName){
    this.services = this.services.filter(({key}) => key !== serviceName)
}

PublicService.prototype.getSum = function(){
    let sum = 0

    this.services.forEach(({key, amount}) => {
        sum += this.tarrifs[key] * amount
    })

    return sum
}

const service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");

const res = service.getSum();
console.log(res)