describe("The registrationNumber test",function(){

    it("It has to return registration number if its alphanumeric", function (){
        let regNumb =registrationNumber();
        regNumb.validateRegNum('CA 12345');

        assert.equal('CA 12345',regNumb.validateRegNum('CA 12345'))
    })
})
describe("The regByTown test",function(){

    it("It has to return 'CAG' or 'CAW' if town is 'george'", function (){
        let regNumb = registrationNumber();
        regNumb.regByTown('george');

        assert.equal("CAG",regNumb.regByTown('george'))
    })
})

describe("The limitTown test",function(){

    it("It should return error message if registration is not from listed towns", function (){
        let regNumb = registrationNumber();
        regNumb.limitTown('GP 123');

        assert.equal("Only enter registration from Paarl, Stellenbosch,Cape Town and George",regNumb.limitTown())
    })
})