var React =  require("react");

var AddTodo = React.createClass({

  onFormSubmit : function(e) {
    e.preventDefault();

    var text = this.refs.text.value;

    if(text.length > 0) {
      this.refs.text.value = "";
      this.props.handleAddTodo(text);
    }else {
      this.refs.text.focus();
    }
  },


  render: function(){
    return (
      <div>
          <form onSubmit = {this.onFormSubmit} >
            <input type = "text" placeholder = "Enter a Todo" ref ="text" />
            <button className= "button"> Add Todo</button>
          </form>
      </div>
    );
  }
});

module.exports = AddTodo;
