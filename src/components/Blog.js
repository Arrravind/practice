import React, { Component } from 'react';
import './css/Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: {
                title: "",
                content: "",
            },
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            newPost: {
                ...prevState.newPost,
                [name]: value,
            },
        }));
    };

    handleAddPost = () => {
        const { posts, newPost } = this.state;
        const updatedPosts = [...posts, { id: posts.length + 1, ...newPost }];

        this.setState({
            posts: updatedPosts,
            newPost: {
                title: "",
                content: "",
            },
        });
    };

    render() {
        const { posts, newPost } = this.state;
        return (
            <div className="blog-container">
                <h1>My Blog</h1>
                <div className="posts-container">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="add-post-container">
                    <input
                        type="text"
                        name="title"
                        placeholder="Post Title"
                        value={newPost.title}
                        onChange={this.handleInputChange}
                    />
                    <textarea
                        name="content"
                        placeholder="Post Content"
                        value={newPost.content}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleAddPost}>Add Post</button>
                </div>
            </div>
        );
    }
}

export default Blog;
