import Card from '../UI/Card';
import './AvailableBook.css';
import BookItem from './BookItem/BookItem';

const DUMMY_BOOKS = [
  {
    id: 'b1',
    name: 'book1',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'b2',
    name: 'book2',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'b3',
    name: 'book2',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'b4',
    name: 'book4',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableBook = () => {
  const booksList = DUMMY_BOOKS.map((book) => <BookItem key={book.id} book={book}/>);

  return (
    <section className='books'>
        <Card>
            <ul>{booksList}</ul>
        </Card>
    </section>
  );
};

export default AvailableBook;