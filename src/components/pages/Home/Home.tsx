import './Home.scss'
import { useEffect, useState } from "react";
import { InputMui } from "../../UI/atoms/InputMui"
import { getRepositories } from "../../../api/services/GitHubService";
import { ButtonMui } from "../../UI/atoms/ButtonMui";
import { Repo } from '../../repo/Repo';
import { getAuth, signOut } from "firebase/auth";
import { ExitToApp } from '@mui/icons-material';
import { TransitionAlerts } from '../../UI/atoms/AlertMui';
import { LocalStorageService } from '../../services/LocalStorageService';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Tooltip from '@mui/material/Tooltip';
interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export const Home = () => {

    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState<Repository[]>([]);
    const auth = getAuth();
    const login = LocalStorageService.getItem('login');
    const SaveLikes = LocalStorageService.getItem('SaveLikes');
    const handleChange = (event: any) => {
        setUserName(event)
    }

    const handleSearch = (name: string) => {
        console.log(name);
        getRepositories(name)
            .then((repositories: Repository[]) => {
                setRepos(repositories)
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        console.log('entre en useeffect ', SaveLikes);
    }, [SaveLikes])

    return (
        <>
            <div className="homeChildren">
                <div className='homeChildren__alert'>
                {
                    (login) ? <TransitionAlerts severity='success' >Log in Succesful!!</TransitionAlerts> : ''
                }
                </div>
                <div className="homeContainer">
                    <div className="homeContainer__icon">
                    <Tooltip title="Introduce your GitHub user name to retrieve your repositories.">
                        <InfoRoundedIcon color="info" />
                    </Tooltip>
                    </div>
                    <div className="homeContainer__inputSearch">
                        <InputMui
                            style={{ width: '100%' }}
                            type='text'
                            variant='standard'
                            label='GitHub user Name'
                            onChange={(event) => handleChange(event)}
                        ></InputMui>
                    </div>
                    <div className="homeContainer__btn">
                        <ButtonMui
                            onClick={() => handleSearch(userName)}
                            variant='outlined'>Search
                        </ButtonMui>
                    </div>
                </div>
                {/* <Repo name='name' link='link'></Repo> */}
                <div className="repoContainer">
                    {repos.length > 0 ?
                        repos.map((ele) => {
                            return (
                                <Repo
                                    name={ele.name}
                                    link={ele.html_url}
                                ></Repo>
                            );
                        }) : ''
                    }
                </div>
                <div>
                    <Repo name='name' link='link'></Repo>
                </div>
            </div>
            <div className="logOut" onClick={() => signOut(auth)}>
                <h3>Sign out</h3>
                <ExitToApp />   
            </div>
        </>
    )
}
