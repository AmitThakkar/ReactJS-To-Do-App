/**
 * Created by Amit Thakkar on 02/03/15.
 */
var NewToDoBox = React.createClass({
  addTask: function (e) {
    e.preventDefault();
    var todo = this.refs.todo.getDOMNode().value.trim();
    if (!todo) {
      return;
    }
    this.props.addTask(todo);
    this.refs.todo.getDOMNode().value = '';
  },
  render: function () {
    return (
      <div className='newToDoBox'>
        <span>Add New Task: </span>
        <input className='todoInputBox' type="text" ref="todo" />
        <input type="button" value="Add" onClick={this.addTask} />
      </div>
    );
  }
});
var RightClickIcon = React.createClass({
  render: function() {
    return (
      <img className='rightClick' src="./images/greenCheck.png" onClick={this.props.removeTask} />
    );
  }
});
var ToDo = React.createClass({
  removeTask: function () {
    this.props.removeTask(this.props.index);
  },
  render: function () {
    return (
      <div className='todoTask'>
        <span className='todoIndex'>{this.props.index + 1}.</span>
        <span className='todoText'>{this.props.task}</span>
        <RightClickIcon removeTask={this.removeTask} />
      </div>
    );
  }
});
var ToDoList = React.createClass({
  removeTask: function (index) {
    this.props.removeTask(index);
  },
  render: function () {
    var that = this;
    var todoNodes = this.props.todos.map(function (todo, index) {
      return (
        <ToDo index={index} task={todo} removeTask={that.removeTask} />
      );
    });
    return (
      <div>
        <h4>To Do List: </h4>
        {todoNodes}
      </div>
    );
  }
});
var AddToDoBox = React.createClass({
  getInitialState: function () {
    return {todos: []};
  },
  addTask: function (task) {
    var todos = this.state.todos;
    var newToDos = todos.concat([task]);
    this.setState({todos: newToDos});
  },
  removeTask: function (index) {
    var todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos: todos});
  },
  render: function () {
    return (
      <div>
        <NewToDoBox addTask={this.addTask} />
        <ToDoList todos={this.state.todos} removeTask={this.removeTask} />
      </div>
    );
  }
});
React.render(
  <AddToDoBox />,
  document.getElementById('todo')
);
