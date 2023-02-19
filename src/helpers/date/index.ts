export function getFormatedDate(date: Date) {

	const today = new Date()
    
	if (date.getDate() < today.getDate()) {
		return date.toLocaleDateString('pt-BR', { 
			timeZone: 'America/Sao_Paulo'
		})
	}

	return date.toLocaleTimeString('pt-BR', { 
		timeZone: 'America/Sao_Paulo'
	}).replace(/(.*)\D\d+/, '$1')
}