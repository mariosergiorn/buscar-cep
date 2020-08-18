var result;

function api(){
    var cep = document.querySelector("#cep").value;
    axios.get("https://viacep.com.br/ws/"+ cep +"/json/").then(response => { 
                        //Aqui você pega a resposta e trata ela.
                        result = response.data;
                        //console.log(result);

                    //Caso o CEP informado esteja incorreto, ele exibe um alerta de erro.
                    if(result.uf !== undefined){
                        //Abre o modal.
                        $("#modalCEP").modal('show')
                        //Chama a função após o modal estar aberto.
                        $(document).on('shown.bs.modal', '#modalCEP', function(){

                            $('#exibir-cep').val(result.cep)
                            $('#exibir-logradouro').val(result.logradouro)
                            $('#exibir-bairro').val(result.bairro)
                            $('#exibir-localidade').val(result.localidade +" - "+ result.uf)

                        });}

                    else{
                            alert("CEP incorreto/ Nâo localizado");
                        }
            
                        }).catch(err => 
                        { 
                            // Aqui trata algum erro na resposta. 
                            alert("Tamanho mínimo de 8 números");
                            $('#cep').val("")
                        });

                    }