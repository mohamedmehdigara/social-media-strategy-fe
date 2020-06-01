import React from 'react';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Typography, makeStyles, Button } from '@material-ui/core';
import ScheduleTweet from '../kanban2/ScheduleTweet';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(3),
        backgroundColor: '#FFF',
    },
    contentContainer: {
        userSelect: 'none',
        padding: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        borderLeft: 'solid 3px gray',
        minHeight: '50px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1)
    },
    twitterIcon: {
        color: '#2196F3',
        width: '20px'
    },
    image: {
        width: '100%',
        maxHeight: '140px',
        objectFit: 'cover'
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(1),
        marginRight: theme.spacing(2),
        marginBottom: 0
    }
}));

const Post = ({ post, index }) => {
    const { user } = useSelector(state => state);
    const { 
        container,
        contentContainer,
        header,
        twitterIcon,
        image,
        actionsContainer
    } = useStyles();

    return (
        <Draggable key={post.id} draggableId={post.id} index={post.index}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={container}
                style={{ ...provided.draggableProps.style }}
                >
                    <div className={contentContainer}>
                        <div className={header}>
                            <TwitterIcon className={twitterIcon} />
                            <Typography variant='caption'>{`@${user.twitter_handle}`}</Typography>
                        </div>
                        {post.post_text}
                    </div>
                    {post.imageUrl && <img className={image}  src={post.imageUrl} alt="Post"/>}
                    <div className={actionsContainer}>
                        <ScheduleTweet />
                        <Button color='primary'>Post Now</Button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Post;