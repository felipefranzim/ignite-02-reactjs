import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Histórico de tarefas</h1>
            
            <HistoryList>
                <table> 
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nome 1</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Status variant="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Nome 1</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Status variant="yellow">Em Andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Nome 1</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Status variant="red">Interrompido</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}