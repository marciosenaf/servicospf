//Data e Hora
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var meses = new Array(
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
);
var ano = data.getFullYear();
var hora = data.getHours();
var minuto = data.getMinutes();

var codigosP = "";
var cP = "";
var myModal = new bootstrap.Modal(document.getElementById('modalFoto'));


// Funções de evento

document.addEventListener("DOMContentLoaded", function(event) {
    $("#showOnPrint").hide()
});

document.getElementById("fecharModal").addEventListener("click", afterImageCopy);

document.getElementById("fecharModal1").addEventListener("click", afterImageCopy);


window.addEventListener('afterprint', (event) => {
    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    $("btnGerar").show()
    //-------------------
    $('#tipMandado').text('')
    $('#oficioN').text('')
    $('#nomeResp').text('')
    $('#ref').text('')
    $('#p1').text('')
    $('#p2').text('')
    $('#p4').text('')
    $('#nOficio').val('')
    $('#tipoMandado').val('')
    //-------------------
    $("#ddsNomeE").text("")
    $("#ddsAtvE").text("")
    $("#ddsEndereco").text("")
    $("#ddsDataV").text("")
    $("#ddsDataE").text("")
    $("#ddsInscE").text("")
    $("#inscMuni").val("")
    $("#nomeEst").val("")
    $("#atvEst").val("")
    $("endEst").val("")
    //-------------------
    // Da Natureza
    $("#ddsFatoNatureza").text("")
    $("#ddsFatoLocal").text("")
    $("#ddsFatoData").text("")
    $("#naturezaFato").val("")
    $("#localFato").val("")
    
    $('#cidadeAutor').val('')
    $('#cidadePessoa').val('')
    $('#nTco').val('')
    

    // Da Vitima
    $("#ddsNomeV").text("")
    $("#ddsRGV").text("")
    $("#ddsTelV").text("")
    $("#ddsTrabV").text("")
    $("#nomeVitima").val("")
    $("#rgVitima").val("")
    $("#telefoneVitima").val("")
    $("#trabalhoVitima").val("")

    // Do Autor
    $("#ddsNomeA").text("")
    $("ddsRGA").text("")
    $("ddsTelA").text("")
    $("ddsTrabA").text("")
    $("#nomeAutor").val("")
    $("#rgAutor").val("")
    $("#telefoneAutor").val("")
    $("#trabalhoAutor").val("")

    // Da Narrativa
    $("#relatoV").text("")
    $("#relatoA").text("")
    $("#provasF").text("")
    $("#relatoFatoV").val("")
    $("#defesaFato").val("")
    $("#provasFato").val("")
    // ----------------------------------------
    $("#codigoPenal input:checkbox:not(:checked)").show()
    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    codigosP = "";
    cP = "";
    $("#codigoPenal").show()

    $("#ddsRG").text("")
    $("#ddsNome").text("")
    $("#ddsTel").text("")
    $("#infoAuto").find("p").remove()
    $("#ddsTrab").text("")
    $("#infoRelato").text("")
    $("#infoDefesa").text("")
    $("#tableArtigos").each(function(key, element) {
        $(element).find("tr").remove()
    })
    $("#codigoPenal input:checkbox:checked").each(function(key, element) {
        $(element).prop("checked", true);
    })
    $("#rgPessoa").val("")
    $("#nomePessoa").val("")
    $("#telefonePessoa").val("")
    $("#trabalhoPessoa").val("")
    $("#relatoPrisao").val("")
    $("#defesaReu").val("")
    $("#motivoConvoc").val("")
    $('#assinatura').text("")

});




function afterImageCopy() {

    $("#showOnPrint").hide()
    $("#hideOnPrint").show()
    $('#assinatura').text("")
    $("#btnGerar").show()
    //-------------------
    $('#tipMandado').text('')
    $('#oficioN').text('')
    $('#nomeResp').text('')
    $('#ref').text('')
    $('#p1').text('')
    $('#p2').text('')
    $('#p4').text('')
    $('#nOficio').val('')
    $('#tipoMandado').val('')
    // ------------------------------------------------------
    $("#ddsNomeE").text("")
    $("#ddsAtvE").text("")
    $("#ddsEndereco").text("")
    $("#ddsDataV").text("")
    $("#ddsDataE").text("")
    $("#ddsInscE").text("")
    $("#inscMuni").val("")
    $("#nomeEst").val("")
    $("#atvEst").val("")
    $("endEst").val("")
    // -------------------------------------------------------
    // Da Natureza
    $("#ddsFatoNatureza").text("")
    $("#ddsFatoLocal").text("")
    $("#ddsFatoData").text("")
    $("#naturezaFato").val("")
    $("#localFato").val("")

    $('#cidadeAutor').val('')
    $('#cidadePessoa').val('')
    $('#nTco').val('')
    
    // Da Vitima
    $("#ddsNomeV").text("")
    $("#ddsRGV").text("")
    $("#ddsTelV").text("")
    $("#ddsTrabV").text("")
    $("#nomeVitima").val("")
    $("#rgVitima").val("")
    $("#telefoneVitima").val("")
    $("trabalhoVitima").val("")

    // Do Autor
    $("#ddsNomeA").text("")
    $("ddsRGA").text("")
    $("ddsTelA").text("")
    $("ddsTrabA").text("")
    $("#nomeAutor").val("")
    $("#rgAutor").val("")
    $("#telefoneAutor").val("")
    $("trabalhoAutor").val("")

    // Da Narrativa
    $("#relatoV").text("")
    $("#relatoA").text("")
    $("#provasF").text("")
    $("#relatoFatoV").val("")
    $("#defesaFato").val("")
    $("#provasFato").val("")
    // -----------------------------------------------------
    $("#codigoPenal input:checkbox:not(:checked)").show()
    codigosP = "";
    cP = "";
    $("#codigoPenal").show()

    $("#ddsRG").text("")
    $("#ddsNome").text("")
    $("#ddsTel").text("")
    $("#infoAuto").find("p").remove()
    $("#ddsTrab").text("")
    $("#infoRelato").text("")
    $("#infoDefesa").text("")
    $("#motivoConvoc").val("")
    $("#tableArtigos").each(function(key, element) {
        $(element).find("tr").remove()
    })
    $("#codigoPenal input:checkbox:checked").each(function(key, element) {
        $(element).prop("checked", false);
    })
    $("#rgPessoa").val("")
    $("#nomePessoa").val("")
    $("#telefonePessoa").val("")
    $("#trabalhoPessoa").val("")
    $("#relatoPrisao").val("")
    $("#defesaReu").val("")
    // ------------------------------------------------------
    $("#fotoPrisao").find("canvas").remove();
    $(".navbar").show();
}

function elaborarInformativo()
{
    window.scrollTo(0, 0)
    if ($("#relatoPrisao").val().length != 0 && $("#respPrisao").val() != "") 
    {
        switch($('#respPrisao').val()){
            case 'Alfa Zeus':
                $('#assinatura').text("Delegado Geral de Polícia Federal");
                break;
            default:
                break;
        }
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#p1").text($('#relatoPrisao').val())
        $("#dataAtual").append('Servidor BR, '+str_data)
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function eAPF() {
    window.scrollTo(0, 0)
    if ($("#defesaReu").val().length != 0 && $("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#telefonePessoa").val().length != 0 && $("#trabalhoPessoa").val().length != 0 && $("#relatoPrisao").val().length != 0 && $("#respPrisao").val() != "") {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {

            $("#ddsRG").text($("#rgPessoa").val().toUpperCase())
            $("#ddsNome").text($("#nomePessoa").val().toUpperCase())
            $("#ddsTel").text($("#telefonePessoa").val().toUpperCase())
            $("#ddsTrab").text($("#trabalhoPessoa").val().toUpperCase())
            $("#infoRelato").text($("#relatoPrisao").val().toUpperCase())
            $("#infoDefesa").text($("#defesaReu").val().toUpperCase())
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#codigoPenal").hide()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            var tempo = 0;
            var resto = 0;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-label").text().trim() + ", ";
                console.log(parseInt("" + element.value));
                tempo = tempo + parseInt("" + element.value);
                if(element.value <= 60){
                $("#tableArtigos").append(` <tr>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>${element.value} meses.</td>
                </tr>`)
                }else if(element.value == 150){
                    $("#tableArtigos").append(` <tr>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>2 anos e 30 meses.</td>
                </tr>`)
                }else if(element.value == 360){
                    $("#tableArtigos").append(` <tr>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>6 anos.</td>
                </tr>`)
                }else if(element.value == 180){
                    $("#tableArtigos").append(` <tr>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>3 anos.</td>
                </tr>`)
                }else if(element.value == 60){
                    $("#tableArtigos").append(` <tr>
                    <td>${$(element).parent().find(".form-check-label").text()}</td>
                    <td>1 ano.</td>
                </tr>`)
                }

            })
            /* Início Calculo do Tempo em Anos e Meses */
            if(tempo > 0 && tempo < 60){
                tempo = tempo+" meses";
            }
            else if(tempo>=60 && tempo < 120){resto = tempo - 60; if(resto>0){tempo = "1 ano e "+resto+" meses";}else if(resto<=0){tempo = "1 ano";}}
            else if(tempo>=120 && tempo < 180){resto = tempo - 120; if(resto>0){tempo = "2 anos e "+resto+" meses";}else if(resto<=0){tempo = "2 anos";}}
            else if(tempo>=180 && tempo < 240){resto = tempo - 180; if(resto>0){tempo = "3 anos e "+resto+" meses";}else if(resto<=0){tempo = "3 anos";}}
            else if(tempo>=240 && tempo < 300){resto = tempo - 240; if(resto>0){tempo = "4 anos e "+resto+" meses";}else if(resto<=0){tempo = "4 anos";}}
            else if(tempo>=300 && tempo < 360){resto = tempo - 300; if(resto>0){tempo = "5 anos e "+resto+" meses";}else if(resto<=0){tempo = "5 anos";}}
            else if(tempo>=360 && tempo < 420){resto = tempo - 360; if(resto>0){tempo = "6 anos e "+resto+" meses";}else if(resto<=0){tempo = "6 anos";}}
            else if(tempo>=420 && tempo < 480){resto = tempo - 420; if(resto>0){tempo = "7 anos e "+resto+" meses";}else if(resto<=0){tempo = "7 anos";}}
            else if(tempo>=480 && tempo < 540){resto = tempo - 480; if(resto>0){tempo = "8 anos e "+resto+" meses";}else if(resto<=0){tempo = "8 anos";}}
            else if(tempo>=540 && tempo < 600){resto = tempo - 540; if(resto>0){tempo = "9 anos e "+resto+" meses";}else if(resto<=0){tempo = "9 anos";}}
            else if(tempo>=600 && tempo < 660){resto = tempo - 600; if(resto>0){tempo = "10 anos e "+resto+" meses";}else if(resto<=0){tempo = "10 anos";}}
            else if(tempo>=660 && tempo < 720){resto = tempo - 660; if(resto>0){tempo = "11 anos e "+resto+" meses";}else if(resto<=0){tempo = "11 anos";}}
            else if(tempo>=720 && tempo < 780){resto = tempo - 720; if(resto>0){tempo = "12 anos e "+resto+" meses";}else if(resto<=0){tempo = "12 anos";}}
            else if(tempo>=780 && tempo < 840){resto = tempo - 780; if(resto>0){tempo = "13 anos e "+resto+" meses";}else if(resto<=0){tempo = "13 anos";}}
            else if(tempo>=840 && tempo < 900){resto = tempo - 840; if(resto>0){tempo = "14 anos e "+resto+" meses";}else if(resto<=0){tempo = "14 anos";}}
            else if(tempo>=900 && tempo < 960){resto = tempo - 900; if(resto>0){tempo = "15 anos e "+resto+" meses";}else if(resto<=0){tempo = "15 anos";}}
            else if(tempo>=960 && tempo < 1020){resto = tempo - 960; if(resto>0){tempo = "16 anos e "+resto+" meses";}else if(resto<=0){tempo = "16 anos";}}
            else if(tempo>=1020 && tempo < 1080){resto = tempo - 1020; if(resto>0){tempo = "17 anos e "+resto+" meses";}else if(resto<=0){tempo = "17 anos";}}
            /* Fim Calculo do Tempo em Anos e Meses */
            $("#infoAuto").append(`<p class="text-justify">Frente recolhimento de <b>${$("#nomePessoa").val().toUpperCase()}</b> inscrito sob o RG <b>${$("#rgPessoa").val().toUpperCase()}</b>, em que caracterizando o estado de flagrante dos crimes de previsto nos artigos <b>${codigosP.toUpperCase()}</b> nos termos do Código Penal, representa a autoridade policial pelas diligências cabíveis.</p><p class="text-justify">Isto posto, DETERMINO a prisão de <b>${$("#nomePessoa").val().toUpperCase()}</b> pelo prazo de <b>${tempo}</b> em regime fechado, fixando como improrrogável a dosimetria para fins de condenações.</p>`)
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }

}

function elaborarTco() {
    window.scrollTo(0, 0)
        if ($("#rgAutor").val().length != 0 && $("#nomeAutor").val().length != 0 && $("#nomeVitima").val().length != 0 && $("#rgVitima").val().length != 0 && $("#telefoneVitima").val().length != 0 && $("#trabalhoVitima").val().length != 0 && $("#respPrisao").val() != "") {
    
                // Da Natureza

                var str_data = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+1)).slice(-2) +'/'+ ano +' ás '+ ("0" + hora).slice(-2) +':'+ ("0" + minuto).slice(-2);
                // Da Vitima
                $("#ddsNomeV").text($("#nomeVitima").val().toUpperCase())
                $("#ddsRGV").text($("#rgVitima").val().toUpperCase())
                $("#ddsTelV").text($("#telefoneVitima").val().toUpperCase())
                $("#ddsTrabV").text($("#trabalhoVitima").val().toUpperCase())

                // Do Autor
                $("#ddsNomeA").text($("#nomeAutor").val().toUpperCase())
                $("#ddsRGa").text($("#rgAutor").val().toUpperCase())

                // Da Narrativa
                $("#relatoV").text($("#relatoFatoV").val().toUpperCase())

                // Config
                $("#hideOnPrint").hide()
                $("#btnGerar").hide()
                $("#showOnPrint").show()
                $("#assinaturaResp").text($("#respPrisao").val())
                $(".navbar").hide();
                html2canvas(document.getElementById("container"), {
                    allowTaint: true,
                    scrollY: -window.scrollY
                }).then(canvas => {
                    document.getElementById("fotoPrisao").appendChild(canvas)
                });
                myModal.show()

        } else {
            toastr["warning"]("Algum campo está vazio", "Opa...")
        }
}


function eIntimacao()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#nOficio").val().length != 0 && $("#respPrisao").val() != "") 
    {
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#ddsNome").text($("#nomePessoa").val());
        $("#ddsRG").text($("#rgPessoa").val());
        $("#dataAtual").text(str_data);
        $("#dataAtual2").append(str_data+".");
        $("#oficioN").append($("#nOficio").val());
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarAlvara()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#telefonePessoa").val().length != 0 && $("#inscMuni").val().length != 0 && $("#nomeEst").val().length != 0 && $("#atvEst").val().length != 0 && $("#endEst").val().length != 0 && $("#respPrisao").val() != "") 
    {
        var datae = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+1)).slice(-2) +'/'+ ano;
        var datav = ("0" + dia).slice(-2) +'/'+ ("0" + (mes+2)).slice(-2) +'/'+ ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#ddsNome").text($("#nomePessoa").val())
        $("#ddsRG").text($("#rgPessoa").val())
        $("#ddsTel").text($("#telefonePessoa").val())
        $("#ddsInscE").text('Nº '+$("#inscMuni").val()+'/2021')
        $("#ddsNomeE").text($("#nomeEst").val())
        $("#ddsAtvE").text($("#atvEst").val())
        $("#ddsEndereco").text($("#endEst").val())
        $("#ddsDataE").text(datae)
        $("#ddsDataV").text(datav)

        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function eMedProt()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $('#rgAutor').val().length != 0 && $('#nomeAutor').val().length != 0 && $("#respPrisao").val() != "") 
    {
        var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
        $("#hideOnPrint").hide()
        $("#btnGerar").hide()
        $("#showOnPrint").show()
        $("#assinaturaResp").text($("#respPrisao").val())
        $(".navbar").hide();
        $("#aNome").text($("#nomeAutor").val());
        $("#aRG").text($("#rgAutor").val());
        $("#ddsNome").text($("#nomePessoa").val());
        $("#ddsRG").text($("#rgPessoa").val());
        $("#dataAtual").append('Servidor BR, '+str_data)
        html2canvas(document.getElementById("container"), {
            allowTaint: true,
            scrollY: -window.scrollY
        }).then(canvas => {
            document.getElementById("fotoPrisao").appendChild(canvas)
        });
        myModal.show()

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function elaborarMandado()
{
    window.scrollTo(0, 0)
    if ($("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#nOficio").val().length != 0 && $('#tipoMandado').val() != "" && $("#respPrisao").val() != "") 
    {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {
            var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-label").text().trim()+", ";
                console.log(codigosP);
            });
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            $("#dataAtual").append(' '+str_data)
            $("#oficioN").append(`<b>Numeração do Processo:</b> ${$("#nOficio").val().toUpperCase()}/2021 cuja data `)
            $('#nomeResp').append($('#respPrisao').val())
            if($('#tipoMandado').val() == 'Prisão'){
                $('#tipMandado').append('MANDADO DE PRISÃO')
                $('#ref').append(`<b>Assunto Referente</b>: Requerimento de Prisão do réu.`)
                $("#p1").append(`Aos cumprimentos, o Departamento de Polícia Federal encaminha a Vossa Senhoria este requerimento de prisão, em razão no cumprimento judicial de prisão de <b>${$('#nomePessoa').val().toUpperCase()}</b> de RG inscrito diante numeração <b>${$('#rgPessoa').val().toUpperCase()}</b> autuado com fulcro no(s) crime(s) de <b>${codigosP}</b> nos termos do Código Penal. Os demais crimes deverão ser ajustados de forma legal durante a execução do processo.`)
                $("#p2").append(`DETERMINO que a autoridade policial a quem for apresentada este documento execute o procedimento realizando a prisão do acusado.`)
                $('p4').append('')
            }
            else if($('#tipoMandado').val() == 'Busca e Apreensão'){
                $('#tipMandado').append('MANDADO DE BUSCA E APREENSÃO')
                $('#ref').append(`<b>Assunto Referente</b>: Requerimento de Busca e Apreensão dos bens do réu.`)
                $("#p1").append(`Aos cumprimentos, o Departamento de Polícia Federal encaminha a Vossa Senhoria este requerimento de busca e apreensão, em razão no cumprimento judicial de busca e apreensão de <b>${$('#nomePessoa').val().toUpperCase()}</b> de RG inscrito diante numeração <b>${$('#rgPessoa').val().toUpperCase()}</b> autuado com fulcro no(s) crime(s) de <b>${codigosP}</b> nos termos do Código Penal. Os demais crimes deverão ser ajustados de forma legal durante a execução do processo.`)
                $("#p2").append(`DETERMINO que a autoridade policial a quem for apresentada este documento execute o procedimento realizando a <b>BUSCA E APREENSÃO</b> dos bens do réu como <b>VEÍCULOS OU PROPRIEDADES</b> do mesmo.`)
                $('p4').append('')
            }
            else if($('#tipoMandado').val() == 'Revisão de Bens'){
                $('#tipMandado').append('MANDADO DE REVISÃO DE BENS')
                $('#ref').append(`<b>Assunto Referente</b>: Requerimento de Revisão dos Bens do réu.`)
                $("#p1").append(`Aos cumprimentos, o Departamento de Polícia Federal encaminha a Vossa Senhoria este requerimento de revisão de bens, em razão no cumprimento judicial de revisão de bens de <b>${$('#nomePessoa').val().toUpperCase()}</b> de RG inscrito diante numeração <b>${$('#rgPessoa').val().toUpperCase()}</b> autuado com fulcro no(s) crime(s) de <b>${codigosP}</b> nos termos do Código Penal.`)
                $("#p2").append(`DETERMINO que a autoridade policial a quem for apresentada este documento execute o procedimento realizando a <b>BUSCA E APREENSÃO</b> dos bens do réu como <b>VEÍCULOS OU PROPRIEDADES</b> do mesmo.`)
                $('p4').append('')
            }
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}

function eInq()
{
    window.scrollTo(0, 0)
    if ($("#assunto").val().length != 0 && $("#telefonePessoa").val().length != 0 && $("#trabalhoPessoa").val() != "" && $("#rgPessoa").val().length != 0 && $("#nomePessoa").val().length != 0 && $("#nOficio").val().length != 0 && $("#respPrisao").val() != "") 
    {
        if ($("#codigoPenal input:checkbox:checked").length != 0) {
            var str_data = ("0" + dia).slice(-2)+" de "+meses[data.getMonth()]+" de "+ano;
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                codigosP += $(element).parent().find(".form-check-label").text().trim()+", ";
                console.log(codigosP);
            });
            $("#codigoPenal input:checkbox:checked").each(function(key, element) {
                cP += $(element).parent().find(".form-check-input").val().trim()+", ";
                console.log(cP);
            })
            $("#hideOnPrint").hide()
            $("#btnGerar").hide()
            $("#showOnPrint").show()
            $("#assinaturaResp").text($("#respPrisao").val())
            $(".navbar").hide();
            $("#dataAtual").append(' '+str_data)
            $("#oficioN").append(`<b>Numeração do Processo:</b> ${$("#nOficio").val().toUpperCase()}/2021 cuja data `);
            cP = cP.slice(0, -2);
            $("#ref").append(`<b>Capitulações:</b> Art. ${cP}.`);
            $("#ddsNome").append($("#nomePessoa").val());
            $("#ddsRG").append($("#rgPessoa").val());
            $("#ddsTel").append($("#telefonePessoa").val());
            $("#ddsTrab").append($("#trabalhoPessoa").val());
            $('#nomeResp').append($('#respPrisao').val())
            $("#infoAuto").append(`<p class="text-justify">O Departamento de Polícia Federal resolve instaurar um inquérito tendo como requerido o senhor <b>${$("#nomePessoa").val().toUpperCase()}</b> de RG inscrito diante numeração <b>${$("#rgPessoa").val().toUpperCase()}</b> a fim de averiguar e apurar os fatos envolvendo os crimes de <b>${codigosP.toUpperCase()}</b> nos termos do Código Penal.</p><p class="text-justify">Com os dados apresentados, requisita-se a Vossa Senhoria a análise deste inquérito em face do requerido supracitado, pelos fatos e fundamentos que se apresentam em sede investigativa.</p><p class="text-justify">Vale-se ressaltar que as provas escolhidas pelo departamento acusando o requerido já citado neste, estarão anexadas a este documento para uma melhor compreensão por parte de Vossa Senhoria.</p>`)
            html2canvas(document.getElementById("container"), {
                allowTaint: true,
                scrollY: -window.scrollY
            }).then(canvas => {
                document.getElementById("fotoPrisao").appendChild(canvas)
            });
            myModal.show()
        } else {
            toastr["warning"]("Esqueceu de colocar os artigos", "Opa...")
        }

    } else {
        toastr["warning"]("Algum campo está vazio", "Opa...")
    }   
}