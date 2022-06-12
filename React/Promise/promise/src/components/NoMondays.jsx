import React from 'react'

    const NoMondays = new Promise( (resolve, reject) => {
        if(new Date().getDay() !== 1) {
            resolve("Good, it's not Monday!");
        } else {
            reject("Someone has a case of the Mondays!");
        }
    });
    noMondays
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
  return (
    <>
    <h1>Promise</h1>
    <div></div>
    </>
  )

export default NoMondays