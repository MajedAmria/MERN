import React from 'react';

const Show = (props) => {
  return (
    <textarea rows="4" cols="50" value={props.message===""?"":props.message+" content is showing here!"}
></textarea>
  )
}

export default Show