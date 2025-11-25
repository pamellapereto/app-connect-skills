# App Connect Skills — Documento Técnico de Autenticação e Integração com Supabase

## 0) Objetivo do Documento
Este documento descreve de forma detalhada o funcionamento **de back-end client-side** do aplicativo **App Connect Skills**, explicando a **autenticação e integração com o Supabase**, o **controle de sessão**, o **fluxo de navegação** e a **estrutura lógica** dos principais arquivos do projeto.

O foco está nos **módulos e funções que operam a comunicação com o Supabase**, excluindo explicações de componentes puramente visuais (como `View`, `Text`, `TouchableOpacity`, etc.).

---

## 1) Visão Geral do Fluxo de Autenticação e Navegação

### 1.1 Linha do tempo (client-side)
1. O app inicializa e monta o **Root Layout** (`app/_layout.tsx`);
2. O **AuthContext** é carregado e o app verifica a sessão atual (`supabase.auth.getSession()`);
3. Enquanto isso, exibe a tela de **loading** (`app/(auth)/index.tsx`);
4. Se **há sessão**, o app redireciona para `(tabs)` (área logada);
5. Se **não há sessão**, o app direciona para `(auth)` (Login/Register);
6. `supabase.auth.onAuthStateChange()` observa login, logout e refresh de token;
7. `signInWithPassword()` e `signUp()` executam fluxos de autenticação;
8. Listener detecta login e envia o usuário para `(tabs)`;
9. Listener detecta logout e redireciona para `(auth)`.

### 1.2 Esquema lógico do fluxo
App Start
└─ app/_layout.tsx
├─ <AuthProvider> (contexts/authContext.tsx)
├─ supabase.auth.getSession()
├─ supabase.auth.onAuthStateChange()
└─ Decide rota:
├─ (auth) → login / register
└─ (tabs) → home / perfil / etc.


---

## 2) ./lib/supabase.ts — Instância do Cliente Supabase

### Propósito
Centraliza a criação e configuração do **cliente Supabase** usado em todo o app.

### Detalhes técnicos
- Usa `createClient(SUPA_URL, SUPA_ANON_KEY, { auth: { ... } })`;
- Opções de `auth`:
  - `storage: AsyncStorage`: armazena sessão localmente no dispositivo;
  - `persistSession: true`: restaura sessão automaticamente;
  - `autoRefreshToken: true`: renova tokens expirados;
  - `detectSessionInUrl: false`: desativa comportamento web.

### Módulos usados
- `@supabase/supabase-js`: SDK principal de acesso ao Supabase;
- `@react-native-async-storage/async-storage`: substitui `localStorage` do navegador.

---

## 3) ./constants/supabase.ts — Configurações do Projeto Supabase

### Função
Armazena as constantes de conexão:
- `SUPA_URL`: endpoint do projeto no Supabase;
- `SUPA_ANON_KEY`: chave pública “anon”.

Esses valores são importados em `lib/supabase.ts` para criar o cliente.

---

## 4) ./contexts/authContext.tsx — Contexto Global de Autenticação

### Função
Gerencia e distribui o **estado global de autenticação** (`user`, `session`).

### Estrutura
- `createContext`: cria o contexto;
- `AuthProvider`: mantém `user` e `session` em `useState`;
- `useAuth()`: hook que expõe o contexto aos componentes.

### Integração
- O layout principal usa `supabase.auth.getSession()` e `onAuthStateChange()`;
- Quando a sessão muda, o contexto é atualizado automaticamente;
- Os componentes consomem `user` e `session` sem precisar passar props.

---

## 5) ./app/_layout.tsx — Root Layout e Controle de Sessão

### Responsabilidade
Define as rotas principais e gerencia a lógica de sessão.

### Funções e módulos principais
- `Stack` e `useRouter` (Expo Router): definem pilhas de rotas;
- `supabase.auth.getSession()`: verifica sessão inicial;
- `supabase.auth.onAuthStateChange()`: observa mudanças;
- `unsubscribe()`: remove listener ao desmontar (boa prática).

### Fluxo
1. Busca a sessão atual;
2. Atualiza o `AuthContext`;
3. Decide entre `(auth)` ou `(tabs)`;
4. Listener mantém app sincronizado com login/logout.

---

## 6) ./app/(auth)/index.tsx — Tela de Loading

### Propósito
Renderiza uma tela de **carregamento** enquanto o app verifica a sessão ativa.

### Observação
Não contém lógica de autenticação. Serve apenas para transição suave entre rotas.

---

## 7) ./components/login/index.tsx — Tela de Login

### Função
Interface que executa o **fluxo de login** com Supabase.

### Principais métodos
- `supabase.auth.signInWithPassword({ email, password })`:
  - Retorna `{ data, error }`;
  - Em sucesso, o listener detecta o login;
  - Em erro, exibe feedback ao usuário.

### Observações
- `AsyncStorage` persiste tokens de sessão;
- O redirecionamento é feito pelo listener global, não pelo componente.

---

## 8) ./app/(auth)/register.tsx e ./components/register/index.tsx — Tela de Cadastro

### Função
Tela de criação de conta que utiliza `supabase.auth.signUp()`.

### Principais chamadas
- `signUp({ email, password, options: { data: { name } } })`;
- Pode enviar metadados (`raw_user_meta_data`) ao Supabase;
- Permite configurar triggers no banco para popular `public.users`.

### Integração
- Pode redirecionar para login após sucesso;
- Listener global detecta a nova sessão.

---

## 9) ./app/(tabs)/index.tsx e ./components/home/index.tsx — Área Logada

### Função
Área de navegação para usuários logados.

### Comportamento
- O acesso é permitido apenas se existir sessão;
- As abas podem incluir Home, Perfil e outras;
- `components/home/index.tsx` pode usar `supabase` para buscar dados autenticados.

---

## 10) Supabase Auth e AsyncStorage

### Integração
`@react-native-async-storage/async-storage` é usado pelo Supabase para armazenar tokens de sessão.  
Isso substitui `localStorage` no ambiente nativo.

### Benefícios
- Sessão persistente mesmo após fechar o app;
- Renovação automática de token;
- Segurança centralizada via políticas RLS no banco.

---

## 11) Funções de Autenticação Supabase (Resumo)

| Função | Descrição |
|--------|------------|
| `getSession()` | Obtém a sessão atual do usuário |
| `onAuthStateChange()` | Monitora login, logout e refresh |
| `signInWithPassword()` | Realiza login com e-mail e senha |
| `signUp()` | Cadastra novo usuário |
| `signOut()` | Encerra a sessão e limpa tokens |
| `updateUser()` | Atualiza e-mail, senha ou metadados |

---

## 12) Segurança e Regras (RLS e Policies)

### Boas práticas
- Ativar **RLS (Row Level Security)** nas tabelas;
- Criar **policies** que limitem acesso ao próprio usuário:
using (auth.uid() = id)

- Criar **trigger** que insere registro em `public.users` após novo cadastro.

---

## 13) Fluxo de Logout
- `supabase.auth.signOut()` apaga a sessão;
- O listener detecta `SIGNED_OUT` e redireciona o app para `(auth)`.

---

## 14) Erros comuns e soluções
- ❌ Esquecer `detectSessionInUrl: false` em RN → comportamento incorreto;
- ❌ Não cancelar listener → eventos duplicados;
- ❌ Policies incorretas → usuário enxerga dados de outros;
- ✅ Usar RLS corretamente → cada usuário acessa apenas seus próprios dados.

---

## 15) Conclusão
O App Connect Skills integra **Supabase** e **React Native** em uma arquitetura moderna e segura.  
O fluxo centraliza autenticação no Supabase, persistência de sessão via AsyncStorage e controle de estado com o AuthContext.  
O `_layout.tsx` atua como núcleo da navegação, garantindo redirecionamento automático e sincronização de sessão entre telas.

---

## 16) Checklist de Revisão

- [ ] Cliente Supabase configurado com AsyncStorage  
- [ ] Contexto de autenticação implementado  
- [ ] Listener `onAuthStateChange` ativo e encerrado corretamente  
- [ ] Policies RLS habilitadas no banco  
- [ ] Login e Register funcionam e redirecionam corretamente  
- [ ] Sessão persistente entre reinicializações do app  

---