import React from 'react'
import c from './Profile.module.css'

const Profile = () => {
    return (

        <div className={c.content}>
            <div ><img
                src='https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1'/>
            </div>
            <div className={c.avatar}><img src='https://www.domashniy-comfort.ru/images/stories/picture/00000korgi/korg_007.jpg'/></div>
            <div>
                My post
                <div>
                    New post
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}
export  default Profile