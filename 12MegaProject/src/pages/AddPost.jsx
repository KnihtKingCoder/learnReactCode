import React from 'react';
import { Container,PostForm } from '../components';

function AddPost() {
    return (
        <div>
            <Container className='py-8'>
                <PostForm/>
            </Container>
        </div>
    );
}

export default AddPost;