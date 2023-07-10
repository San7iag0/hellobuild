import './Home.scss'
import { useState } from "react";
import { InputMui } from "../../UI/atoms/InputMui"
import { getRepositories } from "../../../api/services/GitHubService";
import { ButtonMui } from "../../UI/atoms/ButtonMui";

interface Repository {
    name: string;
    description: string;
  }
  
export const Home = () => {

    const [userName, setUserName] = useState('');
    const [ repos, setRepos ] = useState<Repository[]>([]);

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
            // Handle errors
            console.error('Error:', error);
        });
    }

    return (
        <>
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
        </>
    )
}
