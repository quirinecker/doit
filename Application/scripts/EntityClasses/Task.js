class Task {
    constructor(name, dueDate, parentTaskListID) {
        this.tagList = new Array();
        this.tagList.push(tagList == null ? console.log() : tagList);
        this._name = name;
        this._dueDate = dueDate;
        this._parentTaskListID = parentTaskListID;
        this._tagList = tagList;
        Task.idNumber++;
    }

    get name() {
        return this._name;
    }

    get dueDate() {
        return this._dueDate;
    }

    get parentTaskListID() {
        return this._parentTaskListID;
    }

    get tagList() {
        return this._tagList;
    }
}

Task.idNumber = 0;

export {Task}