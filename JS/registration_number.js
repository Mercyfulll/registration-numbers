function registrationNumber(){
     let platesArr = []
    
    function validateRegNum(regNum){

        var char = /^[cjawlgCJAWLG\s0-9]*$/i
        var val = char.test(regNum)
        if(val){
            return regNum
        }
    }
    function limitTown(regNum){
        var reg = regNum.startsWith('C')
        if(!reg){
            return "Only enter registration from Paarl, Stellenbosch,Cape Town and George"
        }            
    }

    function regByTown(townPlate, regPlate){
        var town = townPlate.toLowerCase()
        var plate = regPlate.toUpperCase()
        if(town === "knysna" &&  plate.startsWith('CX')){
            return plate;
        }
        if(town === "capetown" && plate.startsWith('CA')){
            return plate
        }
        if (town === "paarl" && plate.startsWith('CJ')){
            return plate
        }
        if (town === "stellenbosch" && plate.startsWith('CL')){
            return plate
        }else {
            return ''
        }
    }
    function regPlates(regNum){
        platesArr.push(regNum)
     }
    function getPlates(){
        return platesArr
}

    return{
            validateRegNum,
            limitTown,
            regByTown,
            regPlates,
            getPlates
    }
}
