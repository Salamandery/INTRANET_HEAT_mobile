# 📱 INTRANET HEAT Mobile

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.62.13-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Expo-38.0.8-000020?style=for-the-badge&logo=expo"/>
  <img src="https://img.shields.io/badge/TypeScript-3.9.5-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/styled--components-5.1.1-DB7093?style=for-the-badge&logo=styled-components"/>
  <img src="https://img.shields.io/badge/Axios-0.19.2-5A29E4?style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/badge/React%20Navigation-5.6.1-6C52EE?style=for-the-badge&logo=react"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Funcionalidades | Features](#funcionalidades--features)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure](#estrutura--structure)
- [Rotas | Routes](#rotas--routes)
- [Configurações | Configuration](#configurações--configuration)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> Aplicativo móvel React Native/Expo para sistema de intranet corporativa. Permite gerenciamento de ordens de serviço (OS), autenticação de usuários, e acesso a informações de serviços internos. Desenvolvido para empresas HEAT, HEJBC e UPA.

**EN:**
> React Native/Expo mobile application for corporate intranet system. Enables service order (OS) management, user authentication, and access to internal service information. Developed for HEAT, HEJBC, and UPA companies.

---

## 🚀 Funcionalidades | Features

**PT-BR:**
- 🔐 **Autenticação de Usuários**: Login com credenciais corporativas
- 🏢 **Multi-empresa**: Suporte para HEAT, HEJBC e UPA
- 📋 **Gestão de OS**: Visualização e gerenciamento de ordens de serviço
- 📱 **Interface Responsiva**: Design adaptável para diferentes dispositivos
- 🔄 **Sincronização em Tempo Real**: Atualização automática de dados
- 📊 **Detalhes de Serviços**: Informações completas sobre cada OS
- 🌙 **Tema Escuro/Claro**: Suporte a diferentes temas visuais

**EN:**
- 🔐 **User Authentication**: Login with corporate credentials
- 🏢 **Multi-company**: Support for HEAT, HEJBC, and UPA
- 📋 **OS Management**: View and manage service orders
- 📱 **Responsive Interface**: Adaptive design for different devices
- 🔄 **Real-time Sync**: Automatic data updates
- 📊 **Service Details**: Complete information about each OS
- 🌙 **Dark/Light Theme**: Support for different visual themes

---

## 🛠️ Tecnologias | Technologies

**PT-BR:**
- **React Native 0.62.13**: Framework para desenvolvimento mobile multiplataforma
- **Expo 38.0.8**: Plataforma para desenvolvimento React Native
- **TypeScript 3.9.5**: Linguagem de programação tipada
- **React Navigation 5.6.1**: Navegação entre telas
- **Styled Components 5.1.1**: Estilização baseada em componentes
- **Axios 0.19.2**: Cliente HTTP para requisições à API
- **Moment Timezone 0.5.31**: Manipulação de datas e fusos horários

**EN:**
- **React Native 0.62.13**: Cross-platform mobile development framework
- **Expo 38.0.8**: React Native development platform
- **TypeScript 3.9.5**: Typed programming language
- **React Navigation 5.6.1**: Screen navigation
- **Styled Components 5.1.1**: Component-based styling
- **Axios 0.19.2**: HTTP client for API requests
- **Moment Timezone 0.5.31**: Date and timezone manipulation

---

## 🗂️ Estrutura | Structure
```
INTRANET_HEAT_mobile/
├── assets/
│   ├── fonts/
│   └── images/
├── components/
│   ├── __tests__/
│   ├── default.ts
│   ├── EditScreenInfo.tsx
│   ├── StyledText.tsx
│   └── Themed.tsx
├── constants/
│   ├── Colors.ts
│   └── Layout.ts
├── hooks/
│   ├── useCachedResources.ts
│   └── useColorScheme.ts
├── navigation/
│   ├── BottomTabNavigator.tsx
│   ├── index.tsx
│   └── LinkingConfiguration.ts
├── screens/
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── NotFoundScreen.tsx
│   └── ServicoInfoScreen.tsx
├── services/
│   └── api.ts
├── utils/
│   ├── FormatDate.ts
│   └── MessageHandling.ts
├── App.tsx
├── app.json
├── package.json
└── types.tsx
```

---

## 🗺️ Rotas | Routes

**PT-BR:**
- **LoginScreen**: Tela de autenticação com seleção de empresa
- **HomeScreen**: Lista principal de ordens de serviço
- **ServicoInfoScreen**: Detalhes completos de uma OS específica
- **NotFoundScreen**: Tela de erro 404
- **BottomTabNavigator**: Navegação por abas (se implementada)

**EN:**
- **LoginScreen**: Authentication screen with company selection
- **HomeScreen**: Main service orders list
- **ServicoInfoScreen**: Complete details of a specific OS
- **NotFoundScreen**: 404 error screen
- **BottomTabNavigator**: Tab navigation (if implemented)

---

## ⚙️ Configurações | Configuration

**PT-BR:**
- **API Endpoints**:
  - Externo: `http://138.204.78.244:55321`
  - Interno: `http://10.42.112.50:3333`
- **Empresas Suportadas**:
  - HEAT (ID: 1)
  - HEJBC (ID: 2)
  - UPA (ID: 3)
- **Autenticação**: Token-based com Bearer
- **Armazenamento**: AsyncStorage para persistência de dados

**EN:**
- **API Endpoints**:
  - External: `http://138.204.78.244:55321`
  - Internal: `http://10.42.112.50:3333`
- **Supported Companies**:
  - HEAT (ID: 1)
  - HEJBC (ID: 2)
  - UPA (ID: 3)
- **Authentication**: Token-based with Bearer
- **Storage**: AsyncStorage for data persistence

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 16+ e Yarn
2. **Instale as dependências:**
   ```bash
   yarn install
   ```
3. **Inicie o aplicativo:**
   ```bash
   yarn start
   ```
4. **Para desenvolvimento específico:**
   ```bash
   yarn android    # Android
   yarn ios        # iOS
   yarn web        # Web
   ```

**EN:**
1. **Prerequisites:** Node.js 16+ and Yarn
2. **Install dependencies:**
   ```bash
   yarn install
   ```
3. **Start the app:**
   ```bash
   yarn start
   ```
4. **For specific development:**
   ```bash
   yarn android    # Android
   yarn ios        # iOS
   yarn web        # Web
   ```

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de React Native, Expo e desenvolvimento mobile multiplataforma.<br/>
  Made with 💙 for React Native, Expo and cross-platform mobile development studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>