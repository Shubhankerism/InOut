let chai = require('chai');
let server = require('../index');
let should = chai.should();
let expect = chai.expect;
let request = require('supertest');

describe('POST /Check in visitor',()=>{
    
    const fakevisitor = {
        hemail : "shubhanker621@gmail.com",
        hphone : "9454932137",
        hname : "Shubhanker",
        vemail : "nookptwo@gmail.com",
        vphone : "9125611777",
        vname : "Nook"
    };

	it('Should check-in if a visitor email id is not currently checked-in',(done)=>{
		request(server)
			.post('/api/checkin')
			.send(fakevisitor)
			.end((err,res)=>{
				expect(res.statusCode).to.equal(200);				
				done();
			});
    });

    it('Should not check in if a visitor email id is currently checked-in',(done)=>{
		request(server)
			.post('/api/checkin')
			.send(fakevisitor)
			.end((err,res)=>{
				expect(res.statusCode).to.equal(403);				
				done();
			});
    });
});


describe('POST /Check out visitor',()=>{
    
    const fakevisitor = {
       
        vemail : "nookptwo@gmail.com",
        
    };

	it('Should check-out if a visitor email id is currently checked-in',(done)=>{
		request(server)
			.post('/api/checkout')
			.send(fakevisitor)
			.end((err,res)=>{
				expect(res.statusCode).to.equal(200);				
				done();
			});
    });

    it('Should not check out if a visitor email id not currently checked-in',(done)=>{
		request(server)
			.post('/api/checkout')
			.send(fakevisitor)
			.end((err,res)=>{
				expect(res.statusCode).to.equal(403);				
				done();
			});
    });
});