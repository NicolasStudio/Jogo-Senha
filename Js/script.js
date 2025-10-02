function validar() {
    let senha = document.getElementById('input').value;
    const mensagem = document.querySelector(".boxSenha p")
    
    if (senha.length < 5) {
        mensagem.style.display = "block";
        mensagem.innerHTML = "Senha muito curta!";
    } else {
        mensagem.style.display = "block";
        mensagem.innerHTML = "A senha precisa conter uma letra maiúscula!";
        
        if (senha.length >= 5 && /[A-Z]/.test(senha)) {
            mensagem.textContent = "A senha precisa conter uma letra minúscula!";
            mensagem.style.display = "block";

            if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha)) {
                mensagem.textContent = "A senha precisa conter um número";
                mensagem.style.display = "block";

                    if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha)) {
                        mensagem.textContent = "A senha precisa conter um caractere especial!";
                        mensagem.style.display = "block";

                        if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
                            mensagem.textContent = "A senha precisa conter o nome de um mês!";
                            mensagem.style.display = "block";
                            const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
                            const senhaMinuscula = senha.toLowerCase();
                            const contemMes = meses.some(mes => senhaMinuscula.includes(mes));

                            if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes) {
                                mensagem.textContent = "A senha precisa conter a soma de 17 + 13 em algarismos romanos!";
                                mensagem.style.display = "block";
                                if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes && /XXX/.test(senha)) {
                                    mensagem.textContent = "A senha precisa conter um ano bissexto entre 1900 e 2024!";
                                    mensagem.style.display = "block";

                                    const anosBissextos = [];
                                    for (let ano = 1900; ano <= 2024; ano++) {
                                        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                                            anosBissextos.push(ano.toString());
                                        }
                                    }  
                                    const contemAnoBissexto = anosBissextos.some(ano => senha.includes(ano));

                                    if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes && /XXX/.test(senha) && contemAnoBissexto) {
                                        mensagem.textContent = "A senha precisa conter um elemento da tabela periódica!";
                                        mensagem.style.display = "block";

                                        const elementos = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
                                        const contemElemento = elementos.some(elemento => senha.includes(elemento));
                                        if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes && /XXX/.test(senha) && contemAnoBissexto && contemElemento) {
                                            mensagem.textContent = "A senha precisa conter uma cor em hexadecimal!";
                                            mensagem.style.display = "block";

                                            const regexHex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;
                                            if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes && /XXX/.test(senha) && contemAnoBissexto && contemElemento && regexHex.test(senha)) {
                                                mensagem.textContent = "A senha precisa conter um número primo entre 1 e 100!";
                                                mensagem.style.display = "block";

                                                const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
                                                const primosEncontrados = primos.filter(primo => {
                                                    const primoStr = primo.toString();
                                                    let index = senha.indexOf(primoStr);
                                                    
                                                    while (index !== -1) {
                                                        const antes = index > 0 ? senha[index - 1] : '';
                                                        const depois = index + primoStr.length < senha.length ? senha[index + primoStr.length] : '';
                                                        
                                                        if (!/\d/.test(antes) && !/\d/.test(depois)) {
                                                            return true;
                                                        }
                                                        index = senha.indexOf(primoStr, index + 1);
                                                    }
                                                    return false;
                                                });

                                                const contemPrimo = primosEncontrados.length > 0;
                                                const temMaisDeUmPrimo = primosEncontrados.length > 1;

                                                if (senha.length >= 5 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && contemMes && /XXX/.test(senha) && contemAnoBissexto && contemElemento && regexHex.test(senha) && contemPrimo) {
                                                    
                                                    if (temMaisDeUmPrimo) {
                                                        mensagem.textContent = "Sua senha tem mais de um número primo!";
                                                        mensagem.style.color = "#fc0000";
                                                        mensagem.style.display = "block";
                                                    } else {
                                                        mensagem.textContent = "A senha é válida!";
                                                        mensagem.style.color = "lightgreen";
                                                        mensagem.style.display = "block";

                                                            // Alternativa: esconder elementos específicos instead of boxConteudo
                                                        document.querySelector("header").style.display = "none";
                                                        document.querySelector(".container").style.display = "none";

                                                        // Mostrar parabéns
                                                        const parabens = document.querySelector(".boxParabens");
                                                        parabens.style.display = "block";
                                                    }
                                                } else {
                                                    mensagem.textContent = "Sua senha não tem um número primo entre 1 e 100!";
                                                    mensagem.style.display = "block";
                                                }
  
                                            } else {
                                                mensagem.textContent = "Sua senha não tem uma cor em hexadecimal!";
                                                mensagem.style.display = "block";
                                            }
                                        } else {
                                            mensagem.textContent = "Sua senha não tem um elemento da tabela periódica!";
                                            mensagem.style.display = "block";
                                        }
                                    } else {
                                        mensagem.textContent = "Sua senha não tem um ano bissexto entre 1900 e 2024!";
                                        mensagem.style.display = "block";
                                    }
                                }else{
                                    mensagem.textContent = "Sua senha não tem a soma de 17 + 13 em algarismos romanos!";
                                    mensagem.style.display = "block";
                                }
                            }else {
                                mensagem.textContent = "Sua senha não tem o nome de um mês!";
                                mensagem.style.display = "block";
                            }
                        }else{
                            mensagem.textContent = "Sua senha não tem caractere especial!";
                            mensagem.style.display = "block";
                        }
                    }else{
                        mensagem.textContent = "Sua senha não tem um número!";
                        mensagem.style.display = "block";
                    }
            }else{
                mensagem.textContent = "Sua senha não tem letra minúscula!";
                mensagem.style.display = "block";
            }

    } else {
        mensagem.textContent = "Sua senha não tem letra maiúscula!";
        mensagem.style.display = "block";
    }
    }
}
