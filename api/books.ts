import { faBookSkull } from '@fortawesome/free-solid-svg-icons';
import {Application, Router} from 'https://deno.land/x/oak/mod.ts';

books.set ('1', {
    id:1,
    title: 'The Hound of Baskervilles',
    author: 'Conan Doyle, Arthur',
});

const router = new Router ();
router
    .get ('/', ({response})=>{
        response.body = 'Hello World';
    });
    .get('/book', ({response})=>{
        response.body = Array.from(books.values());
    });

const app = new Application ();
app.use (router.routes());
app.use(router.allowedMethods());

await app.listen ({port:8000});