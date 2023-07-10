import './Home.scss'
import { useState } from "react";
import { InputMui } from "../../UI/atoms/InputMui"
import { getRepositories } from "../../../api/services/GitHubService";
import { ButtonMui } from "../../UI/atoms/ButtonMui";
import { Repo } from '../../repo/Repo';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export const Home = () => {

    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState<Repository[]>([]);

    const handleChange = (e: any) => {
        setUserName(e)
        console.log(userName);
    }

    const handleSearch = (name: string) => {
        console.log(name);
        getRepositories(name)
            .then((repositories: Repository[]) => {
                setRepos(repositories)
                console.log('Repositories:', repos);
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className="homeChildren">
                <div className="homeContainer">
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
            </div>
        </>
    )
}
