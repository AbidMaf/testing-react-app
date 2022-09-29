import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((result) => {
            setPosts(result)
        })
    }, [posts])

    return(
        <>
            <a href='/'>
                <Button variant="primary">Back To Home</Button>
            </a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default PostsPage;