app.controller('certificadoHapkidoCtrl',function($scope, $rootScope, $location){
	var graduacoes = {
		"Hapkido":[
			{nome: "Branca", valor:"Branca", certificado: ""},
			{nome: "Cinza", valor:"Cinza", certificado: ""},
			{nome: "Amarela", valor:"Amarela", certificado: ""},
			{nome: "Ponta Verde", valor:"Ponta Verde", certificado: ""},
			{nome: "Verde", valor:"Verde", certificado: ""},
			{nome: "Ponta Azul", valor:"Ponta Azul", certificado: ""},
			{nome: "Azul", valor:"Azul", certificado: ""},
			{nome: "Ponta Vermelha", valor:"Ponta Vermelha", certificado: ""},
			{nome: "Vermelha", valor:"Vermelha", certificado: ""},
			{nome: "Ponta Preta", valor:"Ponta Preta", certificado: ""},
			{nome: "Preta", valor:"1º", certificado: "last"},
			{nome: "2º Dan", valor:"2º", certificado: "last"},
			{nome: "3º Dan", valor:"3º", certificado: "last"},
			{nome: "4º Dan", valor:"4º", certificado: "last"}
		],
		"Taekwondo":[
			{nome: "Branca", valor:"Branca", certificado: ""},
			{nome: "Ponta Amarela", valor:"Ponta Amarela", certificado: ""},
			{nome: "Amarela", valor:"Amarela", certificado: ""},
			{nome: "Ponta Verde", valor:"Ponta Verde", certificado: ""},
			{nome: "Verde", valor:"Verde", certificado: ""},
			{nome: "Ponta Azul", valor:"Ponta Azul", certificado: ""},
			{nome: "Azul", valor:"Azul", certificado: ""},
			{nome: "Ponta Vermelha", valor:"Ponta Vermelha", certificado: ""},
			{nome: "Vermelha", valor:"Vermelha", certificado: ""},
			{nome: "Ponta Preta", valor:"Ponta Preta", certificado: ""},
			{nome: "Preta", valor:"1º", certificado: "last"},
			{nome: "2º Dan", valor:"2º", certificado: "last"},
			{nome: "3º Dan", valor:"3º", certificado: "last"},
			{nome: "4º Dan", valor:"4º", certificado: "last"}
		],
		"Muay Thai":[
			{nome: "Cinza", valor:"Cinza", certificado: ""},
			{nome: "Cinza e Branco", valor:"Cinza e Branco", certificado: ""},
			{nome: "Branco", valor:"Branco", certificado: ""},
			{nome: "Branco e Vermelho", valor:"Branco e Vermelho", certificado: ""},
			{nome: "Vermelho", valor:"Vermelho", certificado: ""},
			{nome: "Vermelho e azul claro", valor:"Vermelho e azul claro", certificado: ""},
			{nome: "Azul claro", valor:"Azul claro", certificado: ""},
			{nome: "Azul claro e Azul escuro", valor:"Azul claro e Azul escuro", certificado: ""},
			{nome: "Azul escuro", valor:"Azul escuro", certificado: ""},
			{nome: "Azul escuro e Preto", valor:"Azul escuro e Preto", certificado: ""},
			{nome: "Preto", valor:"Preto", certificado: "last"}
		]
	};
	$scope.artes = [{nome: "Hapkido", imagem: "certificado_hapkido.jpg"}, {nome: "Muay Thai", imagem: "certificado_muay_thai.jpg"}, {nome: "Taekwondo", imagem: "certificado_taekwondo.jpg"}];
	$scope.certificados = [];
	//Seta uma variável global para armazenar o menu ativo
	$rootScope.activeTab = $location.path();

	$scope.addCertificado = function(certificado){
		$scope.certificados.push(angular.copy(certificado));
		delete $scope.certificado.nome;
		$("#nome").focus();
	}

	$scope.filterGraduacao = function(arte){
		$scope.graduacoes = graduacoes[arte.nome];
	}
});
