interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    } 
    accessToken?: string
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
  }
  interface Error{
    code :string;
    message:String;
  }