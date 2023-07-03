
## Next Auth Clean Example   
https://next-auth.js.org/   

Just trying to use NextAuth to get both client and server side Auth token/data from discord without much effort.

Seems to work.

requires .env vars:

```
DISCORD_CLIENT_ID=xXxXxXx
DISCORD_CLIENT_SECRET=xXxXxXxXx
NEXTAUTH_SECRET='xXxXxXxX'
```

To generate the NEXTAUTH_SECRET you need to follow these instructions

`openssl rand -base64 32` 

