import React from 'react';

const Card = (props) => {
    // console.log(props);
    let cloths = props.cloths;
    // console.log(cloths);  array of obejts


    return (<>

        {
            cloths.map((element) => {
                return (
                 <div key={element.id} style={{backgroundColor:"aqua",margin:"10px",}} >
                    <p>{element.title}</p>
                    <p1>{element.description}</p1>
                    <img src={element.image} alt="" />

                </div>
                );
            })
        }

    </>)


    // return (
    //     <div>
    //  <p1>{cloths[0].description}</p1>
    //         <h1>card element{}</h1>
    //     </div>
    // );
}

export default Card;
