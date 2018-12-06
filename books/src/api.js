import axios from 'axios';

export default {
    books: {
        fetchAll: () => axios.get('/api/books').then(res => res.data.books),
        create: book => {
            axios.post('/api/books', { book }).then(res => res.data.book)
        }
    }
};