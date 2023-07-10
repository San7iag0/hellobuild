import './Repo.scss'

interface Props {
    name: String,
    link: string
}

export const Repo = ({name, link}:Props)  => {
    return(
        <>
            <div className="repo">
                <div className="repo__repoInfo">
                    <h3>Name: { name } </h3>
                    <h5>Link: { link } </h5>
                </div>
            </div>
        </>
    )
}
