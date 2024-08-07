const events = {
    url: '',
    type: '',
    repoName: [],
    setEvents(repoName){
        this.url = repoName.html_url
        this.type = repoName.type
        this.repoName = repoName
    }

}

export { events }