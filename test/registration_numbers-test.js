describe("The registrationNumber test",function(){

    it("It has to return registration number if its alphanumeric", function (){
        let regNumb =registrationNumber();
        regNumb.validateRegNum('CA 12345');

        assert.equal('CA 12345',regNumb.validateRegNum('CA 12345'))
    })
})
describe("The regByTown test",function(){

    it("It has to return 'CX' if town is 'knysna'", function (){
        let regNumb = registrationNumber();
        regNumb.regByTown('knysna');

        assert.equal("CX",regNumb.regByTown('knysna'))
    })
    it("It has to return 'CA' if town is capetown", function (){
        let regNumb = registrationNumber();
        regNumb.regByTown('capetown');

        assert.equal("CA",regNumb.regByTown('capetown'))
    })

})

describe("The regPlates test",function(){

    it("It should store and return apprpriate registration numbers in an array", function (){
        let regNumb = registrationNumber();
        regNumb.regPlates('Ca 1234');

        assert.equal("Ca 1234",regNumb.getPlates())
    })
})