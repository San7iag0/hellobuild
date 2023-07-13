import { useState } from 'react';
import './Repo.scss'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { LocalStorageService } from '../services/LocalStorageService';
interface Props {
    name: String,
    link: string
}

export const Repo = ({name, link}:Props)  => {

    const [ heart, setHeart ] = useState(true);

    const chnageHeart = () => {

        const localSaveLikes: Props[] | null = LocalStorageService.getItem('SaveLikes');
        const likes: Props  = {
            name: name,
            link: link
        }

        console.log(localSaveLikes);
        if(localSaveLikes !== null && localSaveLikes !== undefined){            
            localSaveLikes.push(likes);
            LocalStorageService.setItem('SaveLikes', localSaveLikes);
        } else {
            LocalStorageService.setItem('SaveLikes', localSaveLikes);
        }

        setHeart(!heart);
        console.log('saveLikes ', localSaveLikes);
    }

    return(
        <>
            <div className="repo">
                <div className="repo__repoInfo">
                    <h3>Name: { name } </h3>
                <div className="repo__heart">
                    { heart ? <FavoriteBorderRoundedIcon onClick={() => chnageHeart()}/>  : <FavoriteOutlinedIcon onClick={() => chnageHeart()}/> }
                </div>
                    <h5>Link: { link } </h5>
                </div>
            </div>
        </>
    )
}
