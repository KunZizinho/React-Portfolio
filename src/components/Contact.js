import React from 'react';
class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return(
     <div className="contact" style={{width:'50%', backgroundImage:'linear-gradient(lightgray, white)', position: 'relative', bottom:'-30px',height:'98%', marginLeft:'450px', alignSelf:'center', borderRadius:'15px', padding:'7px', boxShadow:'10px 10px 10px 10px', zIndex:'4px'}}>
     <form id="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {
  }
  }
  
  export default Contact;


                