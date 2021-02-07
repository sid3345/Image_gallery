import React from 'react';

const card = ({name,id, url}) =>    // Destructuring. instead of function (props)
{
  if (url)
  return(
    <div className= 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='images' src= {url}/>
        <div>
            <h2>{name}</h2>  
        </div>
    </div>
);

  else {
    return(
        <div className= 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='images' src= {`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>  
            </div>
        </div>
    );
  }
}

export default card;
