import React from 'react'

import Gallery from '../components/Gallery.js'
import styled from 'styled-components'
class GalleryContainer extends React.Component {

     state = {
          api : [],
          room_number: 0,
          total_rooms: 1
        }
        
     moveForward = () => {
          if (this.state.room_number < this.state.total_rooms){
               console.log(this.stateroom_number +1)
          }else{
               console.log("not possible")
          }
     }
     moveBackward = () => {
          if (this.state.room_number > 0){
               console.log(this.state.room_number - 1)
          }else{
               console.log("not possible")
          }
     }
        componentDidMount(){
          let token = localStorage.getItem("token")
          fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {headers:
          { Authorization: `Bearer ${token}` }})
          .then(resp => resp.json())
          .then(paintings => {
     
               
            this.setState({ api: paintings,
          total_rooms: Math.ceil(paintings.length/6)- 1})
            
          })
          .catch(console.log)
      
        }
    
     
     
     render(){
          
          return(
               <div className="GalleryContainer">
                    { this.state.api.length === 0 ? 
                    <Center>
                         <img src={'/assets/loading.gif'} />
                         
                    </Center>
                     :
                         <Gallery paintings={this.state.api.slice((this.state.room_number * 6)).slice(0, 6)} history={this.props.history}/>
                    }
               </div>




          ); 
     }



}

export default GalleryContainer 

const Center = styled.div`
     width: 100vh,
     height: 100vw,
     margin: 50px auto

`