import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { title, body,user, _id }, onDelete, }) => {
  return (
    <div className="col-lg-12 col-md-6" style={{backgroundColor: 'white'}}>
    <div className="thumbnail" style={{padding: '0px'}}>
      <a href="/w3images/lights.jpg" target="_blank">
        <img src="/images/wheel-400.jpg" alt="Lights" style={{width: '100%'}} />
      </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
        </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
            <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
          </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
            </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>{title}</a>
          </h1>
          <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
            <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
          </h1>
          <div>
            <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>{body}</p>
          </div>
          <div>
          <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>{user}</p>
        </div>
        </div>
      </div>
    </div>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
     
    </div>
  );
};