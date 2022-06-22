import React,{useState} from "react";
import { Card,Button,CardBody,Input,Col,Form,Label,FormGroup } from 'reactstrap';
import { useHistory } from "react-router-dom";
export default (props) =>{

    const {clickButton,initialName,onSubmitProp}=props;
    const [authorName,setAuthorName]=useState(initialName);
    const[button,setButton]=useState(clickButton);

    const onSubmitHandeler=(e)=>{
      
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
      />
    </Col>

    </FormGroup>
    <Button>{button}</Button>
       
      </Form>
    </CardBody>
  </Card> 
</div>
        
    )
}