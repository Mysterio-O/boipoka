import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.min.css';
import './sweetalert2-custom.css';
const MySwal = withReactContent(Swal);
const getStoredBook = () => {
    const storedBookStr = localStorage.getItem('readList');
    if(storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr);
        return storedBookData;
    }
    else{
        return [];
    }
}
const addStoreDB = (id, books) => {
    const storedBookData = getStoredBook();
    // console.log(type storedBookData);
    const name = books.find(book => book.bookId === id);
    if(storedBookData.includes(id)) {
        MySwal.fire({
            title: `You cannot add when it alreay there 📚`,
            html: `<p class="text-gray-600">"${name.bookName}" is already in your Readlist.</p>`,
            icon: 'warning',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    }
    else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
        MySwal.fire({
            title: 'Added to Readlist! 📚',
            html: `<p class="text-gray-600">"${name.bookName} has been added to your Readlist.</p>`,
            icon: 'success',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    }
}

const getWishedBooks = () => {
    const storedWishStr = localStorage.getItem('wishList');
    if(storedWishStr) {
        const storedWishData = JSON.parse(storedWishStr);
        return storedWishData;
    }
    else{
        return [];
    }
}

const addWishList = (id, books) => {
    const storedWishData = getWishedBooks();
    console.log(typeof storedWishData);
    console.log('this is book', books)
    const name = books.find((book) => book.bookId === id)
    console.log(name.bookName);
    if(storedWishData.includes(id)) {
        MySwal.fire({
            title: `Cannot add twice 📚`,
            html: `<p class="text-gray-600">"${name.bookName}" is already in your wishlist.</p>`,
            icon: 'warning',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    } 
    else{
        storedWishData.push(id);
        const data = JSON.stringify(storedWishData); 
        localStorage.setItem('wishList', data)
        MySwal.fire({
            title: 'Added to Wishlist! 📚',
            html: `<p class="text-gray-600">"${name.bookName} has been added to your wishlist.</p>`,
            icon: 'success',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    }
} 

const getBookData = (id, data) => {
    removeBookData(id ,data)
}
const removeBookData = (id, data) => {
    const bookStr = localStorage.getItem('wishList');
    const bookInfo = JSON.parse(bookStr);
    console.log();
    const name = data.find(d=> d.bookId === id)
    if(bookInfo && bookInfo.length > 0){
        const book = JSON.parse(bookStr);
        const updatedList = book.filter((b) => b.bookId === id);
        localStorage.setItem('wishList', JSON.stringify(updatedList));
        MySwal.fire({
            title: 'Removed from Wishlist! 📚',
            html: `<p class="text-gray-600">"${name.bookName} has been removed from your wishlist.</p>`,
            icon: 'success',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    }
    else {
        MySwal.fire({
            title: 'No Books Found! 📚',
            html: `<p class="text-gray-600">"Wishlist is empty.</p>`,
            icon: 'warning',
            cancelButtonText: 'Continue Browsing',
            showCancelButton: true,
            customClass: {
                popup: 'swal2-popup',
                title: 'swal2-title',
                htmlContainer: 'swal2-html-container',
                cancelButton: 'swal2-cancel',
            },
            buttonsStyling: false,
            showClass: {
                popup: 'animate__animated animate__bounceIn',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut',
            },
        });
    }
}
export {addStoreDB, getStoredBook, addWishList, getWishedBooks, getBookData};