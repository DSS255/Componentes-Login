const { createApp } = Vue;

const ComponenteA = Vue.markRaw({
template: `
<div class="componente">
    <input type="email" placeholder="Email"></input>
    <input type="password" placeholder="Senha"></input>
    <button>Entrar</button>
    <label @click="$emit('alterar')">Cadastre-se</label>
</div>
`
});

const ComponenteB = Vue.markRaw({
template: `
<div class="componente">
    <input type="name" placeholder="Nome"></input>
    <input type="email" placeholder="Email"></input>
    <input type="password" placeholder="Senha"></input>
    <input type="password" placeholder="Repita a senha"></input>
    <button @click="$emit('alterar')">Cadastrar</button>
</div>
`
});


createApp({
    data() {
        return {
            componenteAtual: ComponenteA
        };
    },
    methods: {
        alterarComponentes() {
            this.componenteAtual = (this.componenteAtual === ComponenteA) ? ComponenteB : ComponenteA;
        }
    },
}).mount("#app");
