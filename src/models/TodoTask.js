export default class TodoTask {

    constructor(id = null, task = "") {
        this.id = id
        this.task = task
    }

    getTask() {
        return this.task
    }

    setTask(newTask) {
        this.task = newTask
    }

    getId() {
        return this.id
    }

    setId(newId) {
        this.id = newId
    }
}