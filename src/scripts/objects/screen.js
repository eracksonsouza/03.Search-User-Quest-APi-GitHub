const screen = {
    userProfile: document.querySelector('.profile-data'),
    repositoriesEvents: document.querySelector('.repositories-events'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="foto do perfil do usuario" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado ❌'}</h1>
                                <p>${user.bio  ?? 'Não possui bio cadastrada ⭕'}  </p>
                                <div class="seguidores">
                                <h2>Seguindo</h2>
                                <p>Seguindo: ${user.following  ?? 'Não está seguindo ninguém'}  </p>
                                <p>Seguidores: ${user.followers  ?? 'Não há seguidores'}  </p>
                                </div>
                            </div>
                        </div>`
    },
    renderRepositories(repositories){
        let repositoriesItems = ''        
        repositories.forEach(repo => repositoriesItems += `<li>
                                                                <a href="${repo.html_url}" target="_blank">${repo.name} 
                                                                        <div class="repo-updates">
                                                                        <p class="forks">${repo.forks} Forks</p>
                                                                        <p class="star">${repo.stargazers_count} star</p>
                                                                        <p class="watch">${repo.watchers_count} watchs</p>
                                                                        <p class="language"> ${repo.language} Linguagem</p>
                                                                        </div>
                                                                </a>
                                                                    </li>
                                                                        
                                                                        
                                                                        `)

        
        if(repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItems}
                                            </ul>
                                        </div>`
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>O usuário não foi encontrado ❌</h3>"
    },
    renderEvents(events) {
        let eventsItems = ''
        events.repoName.forEach(event =>{
        eventsItems += 
        this.repositoriesEvents.innerHTML += `
                                            
                                            <div class="dados-repositorios">
                                                <div class="tipo"> ${event.type}</div>
                                                <div class="event">
                                                        <li>
                                                            <a>${event.repo.name}</a>
                                                        </li>
                                                </div>
                                            </div>
                                            `
        });
    }
};

export { screen }