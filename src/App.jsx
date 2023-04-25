import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import igniteLogo from "./assets/ignite-logo.svg";

import './custom-theme.less'
import styles from './App.module.css'

import { Modal, Button, Placeholder, CustomProvider, Form, ButtonToolbar, Input, InputGroup, InputNumber } from 'rsuite';
import { useState } from 'react'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LourencoHenri.png",
      name: "Henrique Lourenço",
      role: "CEO HE Technologies",
    },
    content: [
      { type: "paragraph", content: "Olá 👋"},
      { type: "paragraph", content: "Sou entusiasta das melhores tecnologias. Atualmente, desenvolvo projetos para aprender e aumentar minhas habilidades. Visite meu perfil no GitHub."},
      { type: "link", content: "github.com/LourencoHenri", contentUrl:"https://github.com/LourencoHenri" },
    ],
    publishedAt: new Date("2023-03-24 01:18:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/DuduLourenco.png",
      name: "Eduardo Lourenço",
      role: "CEO HE Technologies",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋"},
      { type: "paragraph", content: "Amante da arte do desenvolvimento, estou sempre em busca de novos desafios que possam agregar conhecimentos."},
      { type: "link", content: "github.com/DuduLourenco", contentUrl:"https://github.com/DuduLourenco"},
    ],
    publishedAt: new Date("2023-03-23 15:20:37"),
  },
];

export function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <CustomProvider theme='dark'>

    <div>

      <Modal size={"xs"} open={open} onClose={handleClose}>

        <Modal.Header className={styles.modalHeader} >
            <img className={styles.modalLogo} src={igniteLogo} alt="" />
          <Modal.Title className={styles.modalTitle}>
            Bem-bindo ao Ignite Feed
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <Form fluid>
          <Form.Group controlId="name-1">
            <Form.ControlLabel>Usuário Git Hub</Form.ControlLabel>
            <Form.Control className={styles.modalInput} name="name" />
          </Form.Group>
          <Form.Group controlId="name-2">
            <Form.ControlLabel>Ocupação</Form.ControlLabel>
            <Form.Control className={styles.modalInput} name="occupation" />
          </Form.Group>
        </ Form>
          
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} appearance="ghost" >
            Entrar sem autenticação
          </Button>
          <Button onClick={handleClose} appearance="primary" >
            Login
          </Button>
        </Modal.Footer>

      </Modal>

      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar handleOpenMenu={handleOpen} />

        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
              )
            })}
        </main>
      </div>
        
    </div>
  </CustomProvider>
  )
}