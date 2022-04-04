import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it} from 'mocha'
import app from '../src/Server.js'


Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect
const randomString = Math.random().toString(36).substring(7) 
console.log(randomString)

const newTodo = {
    task: 'Study',
    name: 'Carin',
    done: 'false'
}

const anotherTodo = {
    task: 'Cook',
    name: 'Carl',
    done: 'false'
}

const updateDonetoTrue = {
    done: 'true'
}

const newTask = {
    task: 'Play video games'
}

let createdTodo = {}


const testingExistingRoute = () => {
    describe('Testing a route that exist', () => {
        it('Expecting 200 OK', (done) => {
            Chai.request(app)
            .get('/todo')
            .end((request, response) => {
                response.should.have.a.status(200)
                done()
            })
        })
    })
}

const testingNonExistingRoute = () => {
    describe('testing a route that does not exist', () => {
        it('tests a route that does not exist and returns 404', (done) => {
            Chai.request(app)
            .get(`/${randomString}`)
            .end((request, response) => {
                response.should.have.a.status(404)
                done()
            })
        })
    })
}

const createTodo = () => {
    describe('Testing to create a todo (POST)', () => {
        it('expects to get an array with an object in it', (done) => {
            Chai.request(app)
            .post('/todo/')
            .send(newTodo)
            .end((error, response) => {
                expect(response.status).to.equal(201)

                const body = response.body
                const todo = body[0]
                createdTodo = todo
                expect(todo.task).to.equal('Study')
                expect(todo.name).to.equal('Carin')
                expect(todo.done).to.equal('false')
                expect(body.length).to.equal(1)
                done()
            })
        })
    })
}



const createAnotherTodo = () => {
    describe('Testing to create another todo (POST)', () => {
        it('expects to get an array with two objects in it', (done) => {
            Chai.request(app)
            .post('/todo/')
            .send(anotherTodo)
            .end((error, response) => {
                expect(response.status).to.equal(201)

                const body = response.body
                const todo = body[1]
                expect(todo.task).to.equal('Cook')
                expect(todo.name).to.equal('Carl')
                expect(todo.done).to.equal('false')
                expect(body.length).to.equal(2)
                done()
            })
        })
    })
}

const getAllTodos = () => {
    describe('Testing to to get all Todos (GET)', () => {
        it('expects to get an array with all objects', (done) => {
            Chai.request(app)
            .get('/todo/')
            .end((error, response) => {
                expect(response.status).to.equal(200)

                const body = response.body
                expect(body).to.be.an('array')
                expect(body.length).to.equal(2)
                done()
            })
        })
    })
}

const updateDone = () => {
    describe('Testing to update done to be true (PUT)', () => {
        it('expects to get an array with first object updated with done to true', (done) => {
            Chai.request(app)
            .put(`/done/${createdTodo._id}`)
            .send(updateDonetoTrue)
            .end((error, response) => {
                expect(response.status).to.equal(200)
                const body = response.body
                const todo = body[0]
                console.log(todo)
                
                done()
            })
        })
    })
}

const getCompletedTodos = () => {
    describe('Testing to get all objects with done = true (GET)', () => {
        it('expects to get an array with one object', (done) => {
            Chai.request(app)
            .get('/completed')
            .end((error, response) => {
                expect(response.status).to.equal(200)
                const body = response.body
                const todo = body[0]
                expect(body.length).to.equal(1)
                expect(todo.done).to.equal('true')
                done()
            })
        })
    })
}
const getUncompletedTodos = () => {
    describe('Testing to get all objects with done = false (GET)', () => {
        it('expects to get an array with an object', (done) => {
            Chai.request(app)
            .get('/uncompleted')
            .end((error, response) => {
                expect(response.status).to.equal(200)
                const body = response.body
                const todo = body[0]
                expect(body.length).to.equal(1)
                expect(todo.done).to.equal('false')
                done()
            })
        })
    })
}


const updateTask = () => {
    describe('Testing to update the task text (PUT)', () => {
        it('expects to get an array with first object updated to new task', (done) => {
            Chai.request(app)
            .put(`/todo/${createdTodo._id}`)
            .send(newTask)
            .end((error, response) => {
                expect(response.status).to.equal(200)
                const body = response.body
                const todo = body[0]
                expect(todo.task).to.equal('Play video games')
                done()
            })
        })
    })
}

const deleteTodo = () => {
    describe('Testing to delete a todo (DELETE)', () => {
        it('expects to get an array with an object', (done) => {
            Chai.request(app)
            .delete(`/todo/${createdTodo._id}`)
            .end((error, response) => {
                expect(response.status).to.equal(201)
                const body = response.body
                const todo = body[0]
                expect(body.length).to.equal(1)
                expect(todo.name).to.equal('Carl')
                done()
            })
        })
    })
}



describe('TESTING TODO API ROUTES', () => {
        testingExistingRoute()
        testingNonExistingRoute()
        createTodo()
        createAnotherTodo()
        getAllTodos()
        updateDone()
        getCompletedTodos()
        getUncompletedTodos()
        updateTask()
        deleteTodo()
})