import { useState } from 'react';
import './Repo.scss'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
interface Props {
    name: String,
    link: string,
    iconHandle: boolean,
    handleHeart: (itemps: data) => void;
}

interface data {
    name: String,
    link: string
}

export const Repo = ({name, link, iconHandle, handleHeart}:Props)  => {

    const [ heart, setHeart ] = useState(true);

    const repoData = {
        name: name,
        link: link
    };

    return(
        <>
            <div className="repo">
                <div className="repo__repoInfo">
                    <h3>Name: { name } </h3>
                    <div className="repo__heart" onClick={() => setHeart(!heart)}>
                        {   iconHandle ? '' :
                            heart ?
                                <FavoriteBorderRoundedIcon onClick={(event) => handleHeart(repoData)}/>
                            :
                                <FavoriteOutlinedIcon onClick={(event) => handleHeart(repoData)}/>

                        }
                    </div>
                    <h5>Link: { link } </h5>
                </div>
            </div>
        </>
    )
}
