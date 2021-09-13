// Import the dependencies for testing
import chai, { should } from 'chai';
import chaiHttp from 'chai-http';
import StudentController from '../controllers/studentcontroller';
import app from '../server';
const stud = require('../controllers/studentcontroller');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single student record
        it("should get a single student record", (done) => {
            const id = 1;
            //const message = "A single student record";
            chai.request(app)
                .get(`/${id}`)
                //.message("success")
                .end((err, res, message) => {
                    res.should.have.status(200);
                    let x = JSON.parse(JSON.stringify(res));
                    console.log("X is :\t", x);
                    let c = JSON.parse(x.text).message;
                    console.log("C is ", c);
                    console.log("Response is here",JSON.parse(JSON.stringify(res)).text.message);

                    //JSON.parse(JSON.stringify(res)).text.message.should.be("A single student record");
                   // should.exist(res.text.message);

                    //res.message.should.be("A single student record");
                    //JSON.parse(JSON.stringify(res)).text.message.should.be.a("A single student record");
                    //(JSON.stringify(c)).should.be.a("A single student record");
                    //x.text.message.should.be('A single student record');
                    // res.body.should.be.a('object');
                    // res.x.text.message.should.be("A single student record");
                    // res.should.have.message('success');
                     done();
                });
        });

        // Test to get no student record
        it("should not get a single student record", (done) => {
            const id = 5;
            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    ;
                    done();
                });
        });
    });
});