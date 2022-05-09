const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},

	{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(arr, media) {
    let aprovados = []; //declara fora do for se não o for cria um array novo pra cada loop que der

    for(let i=0; i < arr.length; i++) {

        const {nota, nome} = arr[i]; //ta chamando apenas as propriedades que quer dentro de cada item do array

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));