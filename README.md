# Lar-with-Nodejs
Project of storage control for a institution, made with nodejs

This is my project for a institution from Jaguariúna

 DATABASE INFOS
  Table Produto
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    descricao varchar(100)
    
  Table Estoque
    id_estoque int not null auto_increment primary key,
    id_produto int not null Foreign key references Produto(id),
    quantidade int not null
    
    
    
