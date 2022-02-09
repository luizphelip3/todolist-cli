export default function validateField(field: string) {

    // Função criada para verificar se existe algum nível de prioridade em alguma tarefa
    const isValid = field === 'alta' ? 1 : field === 'media' ? 1 : field === 'baixa' ? 1 : 0
    return isValid
  }