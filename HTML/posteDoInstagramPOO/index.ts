import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";

//Cria a classe postagem 
class Post {
    private _idPost: string;
    private _avatar: string;
    private _userName: string;
    private _imageUrl: string;
    private _descricao: string;
    private _numLikes: number;
    private _isLike: boolean;
    private _comentario: string[];
    
    constructor(avatar: string,userName: string,imageUrl: string,descricao: string){
        this._idPost = randomUUID();
        this._avatar = avatar;
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._descricao = descricao;
        this._numLikes = 0;
        this._isLike = false;
        this._comentario = [];
    }
    
    // Método para quantificar o número de curtidas na postagem
    incrementarLike(){
        this._numLikes += 1;
    }

    //
    get getUserName(){
        return this._userName
    }
    
    get getImageUrl(): string {
        return this._imageUrl;
    }
    get getDescricao(): string {
        return this._descricao;
    }

    // Adiciona descrição na postagem
    set setDescricao(setDescricao: string) {
        this._descricao = setDescricao;
    }

    // Determina se a postagem está curtida
    set setIsLike(setIsLike: boolean){
        this._isLike = setIsLike;
        if (!this._isLike) {
            setIsLike = true
        }
    }

    get getNumLikes(): number {
        return this._numLikes;
    }
    
}

// Cria instâncias da classe Post com dados fictícios
const posts: Post[] = [];
for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.image.avatar(),
    faker.person.firstName(),
    faker.image.url(),
    faker.lorem.lines(),
    
    );
  posts.push(post);
}

console.log(posts);
