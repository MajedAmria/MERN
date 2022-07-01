import React,{useState} from "react";
import axios from 'axios';
import { Card,Button,CardBody,Input,Col,Form,Label,FormGroup } from 'reactstrap';
import { useHistory } from "react-router-dom";
export default (props) =>{

    const {clickButton,initialName,onSubmitProp}=props;
    const [authorName,setAuthorName]=useState(initialName);
    const[button,setButton]=useState(clickButton);
    
    const history =useHistory();

    const onSubmitHandeler=(e)=>{
      axios.post('http://localhost:8000/books', {
        authorName
    })
        .then(res=>console.log(res)) // If successful, do something with the response. 
        
        onSubmitProp(authorName);
    }

     
        

    return (
        
        <div>
   <Card>
    <CardBody>
    <Form onSubmit={onSubmitHandeler}>
   
  <FormGroup row>
    <Label for="exampleEmail" sm={2}>
      Name:
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="name"
        placeholder="Add new author"
        type="text"
        value={authorName}
        onChange={(e)=>setAuthorName(e.target.value)}
        required
      />
    </Col>

    </FormGroup>
    <Button   color="success"
    outline>{button}</Button>
     </Form>
    <Button color="info"
    outline onClick={()=>history.push("/")}>Cancel</Button>
    </CardBody>
  </Card> 
</div>
        
    )
}