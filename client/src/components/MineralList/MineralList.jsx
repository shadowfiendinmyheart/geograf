import React from 'react'
import { Link } from 'react-router-dom';
import { Mineral } from '../Mineral/Mineral';

import { ROUTES } from '../../constants/routes';

import styles from './MineralList.module.css';

const mock = [{
        image: 'https://coub-anubis-a.akamaized.net/coub_storage/channel/cw_avatar/8d89a290ca0/e1ac1cddbb4f7034d27db/profile_pic_big_1608017033_gwuwwg_1559524731_cropped.jpeg',
        heading: 'Вежливый кот',
        about: 'Он очень вежливый, вы только посмотрите на него!!!'
    }, {
        image: 'https://coub-anubis-a.akamaized.net/coub_storage/channel/cw_avatar/8d89a290ca0/e1ac1cddbb4f7034d27db/profile_pic_big_1608017033_gwuwwg_1559524731_cropped.jpeg',
        heading: 'Вежливый кот',
        about: 'Он очень вежливый, вы только посмотрите на него!!!'
    }, {
        image: 'https://coub-anubis-a.akamaized.net/coub_storage/channel/cw_avatar/8d89a290ca0/e1ac1cddbb4f7034d27db/profile_pic_big_1608017033_gwuwwg_1559524731_cropped.jpeg',
        heading: 'Вежливый кот',
        about: 'Он очень вежливый, вы только посмотрите на него!!!'
    }];

export const MineralList = () => {
    return (
        <div className={styles.wrapper}>
            {mock.map((mineral, index) => {
                return (
                    <Link to={ROUTES.MINERAL_PAGE + '/' + index}>
                        <Mineral key={index} {...mineral} />
                    </Link>
                )
            })}
        </div>
    )
}
