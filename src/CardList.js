import React from 'react';
import Card from './Card';

const CardList = ({images, user_upload}) =>
{
    if (user_upload.length>0){
        return (
            <div>
                      {
                 user_upload.map((user,i) => {
                         return (
                            <Card 
                            key = {i} 
                            url={user_upload.url} 
                            name={user_upload.name} 
                        />);
                })
            }
            </div>    
            )
    }
     else {
    return (
    <div>
              {
         images.map((user,i) => {
                 return (
                    <Card 
                    key = {i} 
                    id={images[i].id} 
                    name={images[i].name} 
                />);
        
    })
              }
    </div>    
    )
            }
}
export default CardList;