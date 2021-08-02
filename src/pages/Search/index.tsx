import { useState } from 'react';

import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { User } from '../../core/types/User';
import Api from '../../core/utils/api';
import './styles.css';

function Search() {
    const [userName, setUserName] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [dataUser, setDataUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    async function handleSearch() {
        setIsClicked(true);
        setIsLoading(true);
        Api({
            url: `/${userName}`,
        }).then(response => setDataUser(response.data))
            .finally(() => {
                setIsLoading(false);
            });

        console.log(dataUser);
    };

    return (
        <div className="container-search">
            <div className="content-search">
                <h1 className="text-title">Encontre um perfil Github</h1>
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="input-user"
                    placeholder="Usuário GitHub"
                />

                <button onClick={handleSearch} className="button">
                    Encontrar
                </button>
            </div>

            {
                isClicked &&
                <div className="container-data-user">
                    <div className="content-data-user">
                        {
                            isLoading ? (
                                <>
                                    <ImageLoader />
                                    <InfoLoader />
                                </>
                            ) : (
                                <>
                                    <div className="container-img">
                                        <img src={dataUser?.avatar_url} className="avatar-git" />
                                        <button className="button">
                                            <a href={dataUser?.html_url} target="_blank">
                                                Ver perfil
                                            </a>
                                        </button>
                                    </div>
                                    <div className="data-user">
                                        <div className="content-data">
                                            <span className="data-span">Repositórios públicos: {dataUser?.public_repos}</span>
                                            <span className="data-span">Seguidores {dataUser?.followers}</span>
                                            <span className="data-span">Seguindo: {dataUser?.following}</span>
                                        </div>
                                        <div className="content-infor">
                                            <h3 className="title">Informações</h3>
                                            <h4>
                                                Empresa:
                                                <span> {dataUser?.company}</span>
                                            </h4>
                                            <h4>
                                                Website/blog:
                                                <span> {dataUser?.blog}</span>
                                            </h4>
                                            <h4>
                                                Localidade:
                                                <span> {dataUser?.location}</span>
                                            </h4>
                                            <h4>
                                                Membro desde:
                                                <span> {dataUser?.created_at}</span>
                                            </h4>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Search;