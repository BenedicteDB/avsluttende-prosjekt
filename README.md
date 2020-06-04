# Main project
This is a skincare webpage built using <a href='https://svelte.dev/'> Svelte </a>. This webpage fetches and displays skincare products using my own<a href="https://console.firebase.google.com/u/0/project/skincare-firestore/database/firestore/data~2Fproducts~2F0CUhPq4q9HCILeyAT0J2"> firebase </a>. The user can navigate through the webpage and find different skincare products sorted by product type, category and brand. 

## How To Get started
To test the project, run

```javascript
    npm intsall
    npm run dev
```

## info
- When you search you have to write with capital letters
- the add to cart and wishlist button is not working. 

## Known bugs
- When you write a review and click submit it sometimes submit two times in a row into firebase. One with all of the info and one that is empty. 
- If you search and type something incorrect, it wont let you search again, so you have to refresh the page. 
- Sometimes global.css dont always work in chrome, so if you are using chrome and there is a margin on both sides a temporary solution to this is to just press Ctrl + Shift + R (command if you're using mac)

### With [surge] (website-demo)

http://hovedprosjekt.surge.sh/


