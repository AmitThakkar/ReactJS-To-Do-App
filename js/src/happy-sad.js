/**
 * Created by Amit Thakkar on 03/03/15.
 */
var HappySadIcon = React.createClass({
  getInitialState: function () {
    return {isSad: true};
  },
  handelClick: function () {
    this.setState({isSad: !this.state.isSad});
  },
  render: function () {
    var imageSrc = this.state.isSad ? './images/sad.png' : './images/happy.png';
    return (
      <div>
        <img src={imageSrc} onClick={this.handelClick} />
      </div>
    );
  }
});
React.render(
  React.createElement(HappySadIcon, null),
  document.getElementById('happy-sad')
);
