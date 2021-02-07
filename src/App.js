import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';
//import {  BrowserRouter as Router, Route, Redirect, Switch  } from 'react-router-dom';

class App extends Component {

    constructor() {
        super()
        this.state = {
            image_url: '',
            image_name:'',
            images: [],
            searchfield: '',
            user_upload:[]
        }
    this.Image_url = this.Image_url.bind(this);
    this.Image_name = this.Image_name.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(users => {
            this.setState({images: users});
        })
        /*
        return (<Router>
        <Route path='/upload' component={ User_upload } />
        </Router>)
        */   
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({user_upload:{name:this.state.image_name, image_url: this.state.image_url}});
        //console.log(this.state.image_name,this.state.image_url);
        window.location.reload(false);
        alert('Submitted: '+this.state.image_name)
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
      Image_url(event) {
        this.setState({image_url: event.target.value});
      }
      
      Image_name(event) {
        this.setState({image_name: event.target.value});
      }

    //onSubmit = () => {return  <Redirect  to="/upload" />}

    render() {
        const filteredImages = this.state.images.filter(images =>{
            return images.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.images.length === 0){
            return <h1>Loading</h1>
        }
        else {
        return (<React.Fragment>

            <div className = 'tc'>
            <h1 className = 'f1'>Image Gallery</h1>
            {/* <button type="button" onClick={this.onSubmit}>Upload</button> */}
            
            <form onSubmit={this.handleSubmit}>
          <input className = 'pa3 ba b--green bg-lightest-blue' placeholder = 'Image URL' type="text" value={this.state.image_url} onChange={this.Image_url} />
          <br></br><br></br>
          <input className = 'pa3 ba b--green bg-lightest-blue' placeholder = 'Image Name' type="text" value={this.state.image_name} onChange={this.Image_name} />
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>

            <br></br>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList images = {filteredImages} user_upload={this.state.user_upload}/> 
                </ErrorBoundry>
            </Scroll>
            </div>   
            </React.Fragment>    
    );
        }
    }
    
}

export default App;








/* props never change. Props are always just inputs we get and we never modified them */

/* And that's what "state" is in React. "State" - and you'll hear this in computer programming
a lot simply means the description of your app. A "state" is simply an object - an object 
that describes your application And this "state" which describes our application is 
the images, and whatever's entered in the search box and "state" is able to change

Props are simply things that come out of "state" So a parent feeds "state" into
a child component and as soon as a child (components) component receives a
"state" it's a property. That child can never change that property.  */