import React, {useEffect, useState} from 'react'
import Container from '../container/Conatiner.jsx';
import PostForm from '../Components/Postform/PostForm.jsx';
import DBservice from '../Appwrite/Service.js';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            DBservice.getPost(slug).then((post) => {
                if (post) {
                     console.log("Fetched post:", post);
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost