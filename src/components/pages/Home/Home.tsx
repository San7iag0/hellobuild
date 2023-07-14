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
    html_url: string;
}

export const Home = () => {

    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState<Repository[]>([]);
    const auth = getAuth();
    const login = LocalStorageService.getItem('login');
    const handleChange = (event: any) => {
        setUserName(event)
    }
    const [ saveData, setSaveData ] = useState<any[]>([]);

    const addFavRepos = (obj: any) => {
        setSaveData(data => [...data, obj])
    };

    //check
    const removeOpt = (e: any) => {
        console.log(e);
        const name = e.name;
        setSaveData(saveData.filter((item: Repository) => item.name !== name));
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
                { repos.length > 0 ?
                    <div className="repoContainer">
                    <h4>Repositories</h4>
                        {
                            repos.map((ele) => {
                                return (
                                    <Repo
                                        handleHeart={addFavRepos}
                                        name={ele.name}
                                        link={ele.html_url}
                                    ></Repo>
                                );
                            })
                        }
                    </div>
                : '' }
                { saveData.length > 0 ? 
                    <div className="repoContainer">
                    <h4>Favorite Repositories</h4>
                        {saveData.map((ele) => {
                            return(
                                <Repo
                                    handleHeart={removeOpt}
                                    name={ele.name}
                                    link={ele.link}
                                ></Repo>
                            )
                        })}
                    </div>
                : '' }
            </div>
            <div className="logOut" onClick={() => signOut(auth)}>
                <h3>Sign out</h3>
                <ExitToApp />   
            </div>
        </>
    )
}
