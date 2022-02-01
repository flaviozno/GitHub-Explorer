import { useState, useEffect } from "react"

import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

// https://api.github.com/users/flaviozno/repos

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/flaviozno/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    // se estiver vazio, ela so executa uma unica vez
    // sem o [] ele vai entrar em loop
    // render novamente quando o estado muda
    // sempre que usar map no react precisa de uma key unica

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repo => (
                    <RepositoryItem key={repo.name} repository={repo} />
                ))}
            </ul>
        </section>
    )
}