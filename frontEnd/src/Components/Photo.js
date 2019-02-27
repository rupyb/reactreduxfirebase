import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegComment } from 'react-icons/fa';
function Photo(props) {
    const post = props.post;
    return (
        <figure className="figure">
            <Link to={`/single/${post.id}`}>
                <img className="photo" src={post.imageLink} alt="lion" />
            </Link>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button"
                    onClick={() => {
                        props.startRemovingPosts(props.index, post.id)
                        props.history.push('/');
                    }
                    }>
                    Remove
                </button>
                <Link className="commentIcon" to={`/single/${post.id}`}>
                    <p className="commentP">
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </p>
                    <FaRegComment size={40} />
                </Link>
            </div>
        </figure>

    );
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;