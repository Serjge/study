import React from 'react'
import c from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={c.item}>
                <img src='https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg'/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}
export default Post