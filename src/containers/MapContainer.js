import React from "react";
import Floor from '../components/Floor.js';
import {Route, Switch} from 'react-router-dom'

class MapContainer extends React.Component {

     state = {
          api : []
     }
     
     componentDidMount= () => {
          let token = localStorage.getItem("token")
          fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {
               method: "GET",
               headers:
                    { Authorization: `Bearer ${token}` }
          })
          .then(resp => resp.json())
          .then(paintings => {
            
            this.setState({ api: paintings})
           
          })
          .catch(console.log)
      
        }
    
     
    
     
     
     
     render(){
          //      if(this.props.history.location === "/maps/1"){
          //          return("gotcha")
          //     }
              

          return(
          <div className="maps-container">
               <h1>Maps</h1>
               <Switch>
               <Route path='/maps/:id' render={(routerprops) => <Floor history={this.props.history} {...routerprops}/>}/>
               <Route path="/maps" render={(routerprops) => <Floor history={this.props.history} {...routerprops}  />}/>
               </Switch>
          </div>
               )
     }
}


export default MapContainer