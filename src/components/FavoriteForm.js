import React from 'react';
import { Button, Form} from 'semantic-ui-react';
import styled from 'styled-components'


class FavoriteForm extends React.Component {
     
     state = {
          comment : ""
     }

     changeHandler = (e) => {
          this.setState({[e.target.name]: e.target.value})
     }

     
     render(){
     return(
         
          <OurComment>
             
          <Form onSubmit={(e) => this.props.submitHandler(e)} >
           
             <Form.TextArea onChange={this.changeHandler}  name="comment" value={this.state.comment} placeholder="Comments on the Artwork"/> 
                <Button
                  content='Add Comment'
                  labelPosition='left'
                  icon='edit'
                  primary
                />
              </Form>
             
          </OurComment>
     )
     }
 
}

export default FavoriteForm

const OurComment = styled.div`
     width: 450px;
     margin: 10px auto;

`

