import React from 'react';

const Card = (props) => {
    console.log(props.ecomData);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {props.ecomData.map((element) => (
                <div
                    key={element.id}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '16px',
                        width: '200px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        background: '#fff',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={element.image}
                        alt={element.title || 'Product'}
                        style={{ width: '100%', height: '120px', objectFit: 'contain', marginBottom: '8px' }}
                    />
                    <h3 style={{ fontSize: '1.1rem', margin: '8px 0' }}>{element.title}</h3>
                    <p style={{ color: '#888', margin: '4px 0' }}>ID: {element.id}</p>
                    <p style={{ fontWeight: 'bold', margin: '4px 0' }}>₹{element.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
