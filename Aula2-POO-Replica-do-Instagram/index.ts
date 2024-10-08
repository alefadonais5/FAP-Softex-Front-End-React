class Post {
    private _userName: string;
    private _imageUrl: string;
    private _description: string;
    private _numLikes: number;
    
    constructor(userName: string, imageUrl: string, description: string){
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._description = description;
        this._numLikes = 0;

    }

    get userName(){
        return this._userName;
    }

    get imageUrl(){
        return this._imageUrl;
    }

    get description(){
        return this._description
    }

    set description(description:string){
        this._description = description;
    }

    get numLikes(){
        return this._numLikes
    }
    
    incrementLike(){
        this._numLikes +=1;
    }
}

const post1 = new Post("alef", "http://.........", "Imagem 1");
const post2 = new Post("apolo", "http://.........", "Imagem 10");
console.log(post1);
console.log(post2);

post1.incrementLike();
console.log(post1.userName);

post1.description = "Nova Imagem";

console.log(post1);

