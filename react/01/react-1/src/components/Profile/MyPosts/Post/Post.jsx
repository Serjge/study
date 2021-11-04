import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={c.item}>
                <img src='https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg'/>
                {props.message}
                <div>
                    <span>like {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
export default Post