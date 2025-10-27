# 📋 To-Do List App

Um aplicativo mobile completo para gerenciamento de tarefas, focado em produtividade. Permite ao usuário total controle sobre suas pendências com funcionalidades avançadas de CRUD, filtragem e acompanhamento de progresso.

<img width="1221" height="654" alt="image" src="https://github.com/user-attachments/assets/7429cb81-b3fb-425e-8e5a-817c30a685be" />


---

### ✨ Funcionalidades Principais

* **CRUD Completo:**
    * **Adicionar** novas tarefas rapidamente.
    * **Editar** o texto de tarefas existentes.
    * **Excluir** tarefas que não são mais necessárias.
    * **Marcar** tarefas como concluídas (toggle).
* **Acompanhamento de Progresso:**
    * Visualização clara da **porcentagem (%) de tarefas concluídas**, motivando o usuário a finalizar suas pendências.
* **Filtragem Dinâmica:**
    * Filtre facilmente entre tarefas "Pendentes" e "Concluídas" para manter o foco.
* **Persistência de Dados:**
    * As tarefas são salvas localmente no dispositivo.

---

### 🛠️ Tecnologias Utilizadas

* **React Native:** Framework principal para o desenvolvimento.
* **TypeScript:** Para um código mais robusto, escalável e com menos bugs.
* **Async Storage:** Para armazenamento local de dados no dispositivo.
* **Styled Components:** Para a estilização dos componentes.

---

### 📖 O que aprendi

Este projeto foi essencial para dominar os fundamentos do desenvolvimento de aplicativos:

* Implementação de um **CRUD (Create, Read, Update, Delete)** completo no lado do cliente.
* Gerenciamento de **estado complexo** para habilitar a filtragem dinâmica de listas.
* Lógica para calcular e exibir **estatísticas de progresso** (porcentagem de conclusão) em tempo real.
* Manipulação avançada de arrays (adicionar, remover, editar, filtrar) de forma imutável.

---

### 🏃 Como rodar o projeto (Desenvolvimento)

Para rodar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/CaioVHilario/to_dolist.git

# 2. Acesse a pasta do projeto
cd to_dolist

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Inicie o Metro Bundler
npm start
# ou
yarn start

# 5. Rode no simulador ou dispositivo
# Em outro terminal, na mesma pasta:
npm run android
# ou
npm run ios

```

### Para Melhorar (Próximos Passos)

* [ ] Implementar reordenação de tarefas (Drag and Drop).
* [ ] Adicionar Notificações Push para lembretes de tarefas.
* [ ] **Desafio Backend:** Substituir o [Async Storage] por uma **API REST em Python/FastAPI** para salvar as tarefas na nuvem.

---

### 👨‍💻 Autor

**Caio Vieira Hilário**
