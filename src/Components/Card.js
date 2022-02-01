import React from 'react';


const Card = ({name,email,id}) => {
    return (
        <div className='tc bg-light-green br3 dib bw2 pa2 ma2 shadow-5 grow '>
        <div>
            <img src = {`https://robohash.org/${id}?200x200`} alt='robot'/> 
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
        </div>
    )
}

export default Card